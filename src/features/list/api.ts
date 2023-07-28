import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { VITE_API_URL } = import.meta.env

import { PokemonFromApi, Pokemon } from './types'

type Response<T> = {
  data: T[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

const pageSize = 20

const replaceSpace = (s: string) => s.replace(/\s/g, '*')

export const apiList = createApi({
  reducerPath: 'listApi',
  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_URL as string }),
  endpoints: builder => ({
    getPokemons: builder.query<Response<Pokemon>, { query: string; page: number }>({
      query: ({ query, page }) => {
        if (query !== '') {
          return `/cards?q=name:*${replaceSpace(query)}*&page=${page || 1}&pageSize=${pageSize}`
        } else {
          return `/cards?page=${page || 1}&pageSize=${pageSize}`
        }
      },
      transformResponse: (response: Response<PokemonFromApi>): Response<Pokemon> => ({
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
    getRarities: builder.query<Response<Pokemon>, void>({
      query: () => {
        return `/rarities`
      },
    }),
  }),
})

export const { useGetPokemonsQuery, useGetRaritiesQuery } = apiList
