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

export const api = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_URL as string }),
  endpoints: builder => ({
    getPokemons: builder.query<Response<Pokemon>, number | void>({
      query: page => `/cards?page=${page || 1}&pageSize=20`,
      transformResponse: (response: Response<PokemonFromApi>): Response<Pokemon> => {
        return {
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
              price: item.cardmarket?.prices?.trendPrice,
            }
          }),
        }
      },
    }),
  }),
})

export const { useGetPokemonsQuery } = api
