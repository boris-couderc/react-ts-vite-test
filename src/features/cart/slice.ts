import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '~/app/store'

type Item = {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartState {
  count: number
  items: Item[]
}

type addItemPayload = {
  id: number
  name: string
  price: number
}

type removeItemPayload = {
  id: number
}

type updateQuantityPayload = {
  id: number
  quantity: number
}

const initialState: CartState = {
  count: 0,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<addItemPayload>) {
      const { id, name, price } = action.payload
      const item = state.items.find(item => item.id === id)
      if (item) {
        item.quantity++
      } else {
        state.items.push({ id, name, price, quantity: 1 })
      }
      state.count++
    },
    removeItem(state, action: PayloadAction<removeItemPayload>) {
      const { id } = action.payload
      const item = state.items.find(item => item.id === id)
      if (!item) return
      if (item.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id)
      } else {
        item.quantity--
      }
      state.count--
    },
    updateQuantity(state, action: PayloadAction<updateQuantityPayload>) {
      const { id, quantity } = action.payload
      const item = state.items.find(item => item.id === id)
      if (!item) return
      if (quantity === 0) {
        state.items = state.items.filter(item => item.id !== id)
      } else {
        item.quantity = quantity
      }
      state.count = state.items.reduce((acc, item) => acc + item.quantity, 0)
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions

export const selectCartCount = (state: RootState) => state.cart.count
export const selectCartItems = (state: RootState) => state.cart.items
