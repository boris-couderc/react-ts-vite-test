import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { apiList } from '~/features/list/api'
import { searchSlice } from '~/features/search/slice'

export const store = configureStore({
  reducer: {
    [apiList.reducerPath]: apiList.reducer,
    [searchSlice.name]: searchSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiList.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
