import { configureStore } from '@reduxjs/toolkit'
import Cart from "./slices/CartSlice"

export const store = configureStore({
  reducer: {
        Cart
  },
})