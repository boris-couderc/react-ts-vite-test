import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { listApi } from '~/features/list/api'
import { cartSlice } from '~/features/cart/slice'

export const store = configureStore({
  reducer: {
    [listApi.reducerPath]: listApi.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(listApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
