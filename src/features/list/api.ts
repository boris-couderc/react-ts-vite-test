import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { VITE_API_URL } = import.meta.env

import { Pokemon } from './types'

type Response = {
  data: Pokemon[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

export const api = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_URL as string }),
  endpoints: builder => ({
    getPokemons: builder.query<Response, void>({
      query: () => '/cards?pageSize=20',
    }),
  }),
})

export const { useGetPokemonsQuery } = api
