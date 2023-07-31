import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '~/app/store'

type Item = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface CartState {
  items: Item[]
  count: number
  total: number
  isOpen: boolean
}

type addItemPayload = {
  id: number
  name: string
  price: number
  image: string
}

type removeItemPayload = {
  id: number
}

type updateQuantityPayload = {
  id: number
  quantity: number
}

const initialState: CartState = {
  items: [],
  count: 0,
  total: 0,
  isOpen: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<addItemPayload>) {
      const { id, name, price, image } = action.payload
      const item = state.items.find(item => item.id === id)
      if (item) {
        item.quantity++
      } else {
        state.items.push({ id, name, price, quantity: 1, image })
      }
      state.count++
      state.total = Number((state.total + price).toFixed(2))
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
      state.total = Number((state.total - item.price).toFixed(2))
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
      const { count, total } = state.items.reduce(
        (acc, item) => ({
          count: acc.count + item.quantity,
          total: acc.total + item.price * item.quantity,
        }),
        { count: 0, total: 0 },
      )
      state.count = count
      state.total = Number(total.toFixed(2))
    },
    setOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
  },
})

export const { addItem, removeItem, updateQuantity, setOpen } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart
export const selectCartCount = (state: RootState) => state.cart.count
export const selectCartTotal = (state: RootState) => state.cart.total
export const selectCartItems = (state: RootState) => state.cart.items
