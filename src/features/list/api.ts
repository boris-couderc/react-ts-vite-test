import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { VITE_API_URL } = import.meta.env

import { Pokemon, Rarity } from '../types'

import { replaceSpace } from '~/utils/functions'

type Response<T> = {
  data: T[]
}

type ResponsePokemons<T> = Response<T> & {
  page: number
  pageSize: number
  count: number
  totalCount: number
}

export type PokemonFromApi = Pokemon & {
  cardmarket?: {
    prices?: {
      trendPrice?: number
    }
  }
}

const pageSize = 20

export const listApi = createApi({
  reducerPath: 'listApi',
  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_URL as string }),
  endpoints: builder => ({
    getPokemons: builder.query<ResponsePokemons<Pokemon>, { search: string; page: number; filter: string }>({
      query: ({ search, page, filter }) => {
        if (search !== '') {
          if (filter) {
            return `/cards?q=name:*${replaceSpace(search)}* rarity:"${filter}"&page=${page || 1}&pageSize=${pageSize}`
          } else {
            return `/cards?q=name:*${replaceSpace(search)}*&page=${page || 1}&pageSize=${pageSize}`
          }
        } else {
          if (filter) {
            return `/cards?q=rarity:"${filter}"&page=${page || 1}&pageSize=${pageSize}`
          } else {
            return `/cards?page=${page || 1}&pageSize=${pageSize}`
          }
        }
      },
      transformResponse: (response: ResponsePokemons<PokemonFromApi>): ResponsePokemons<Pokemon> => ({
        count: response.count,
        page: response.page,
        pageSize: response.pageSize,
        totalCount: response.totalCount,
        data: response.data.map((item: PokemonFromApi): Pokemon => {
          return {
            id: item.id,
            name: item.name,
            supertype: item.supertype,
            subtypes: item.subtypes,
            hp: item.hp,
            types: item.types,
            rules: item.rules,
            images: item.images,
            rarity: item.rarity,
            price: item.cardmarket?.prices?.trendPrice,
          }
        }),
      }),
    }),
    getRarities: builder.query<Response<Rarity>, void>({
      query: () => {
        return `/rarities`
      },
    }),
  }),
})

export const { useGetPokemonsQuery, useGetRaritiesQuery } = listApi
