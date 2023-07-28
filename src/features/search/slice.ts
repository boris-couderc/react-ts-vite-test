import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '~/app/store'

interface SearchState {
  input: string
  current: string
}

const initialState: SearchState = {
  input: '',
  current: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchInputValue(state, action: PayloadAction<string>) {
      state.input = action.payload
    },
    setSearchCurrentValue(state, action: PayloadAction<string>) {
      state.current = action.payload
    },
    cleanSearch(state) {
      state.input = ''
      state.current = ''
    },
  },
})

export const { setSearchInputValue, setSearchCurrentValue, cleanSearch } = searchSlice.actions

export const selectSearchInputValue = (state: RootState) => state.search.input
export const selectSearchCurrentValue = (state: RootState) => state.search.current
