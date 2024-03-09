import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   value: number
// }

const initialState = {
  cartProduct: [],
}

export const counterSlice = createSlice({
  name: 'myCart',
  initialState,
  reducers: {
    increment: (state) => {
      state.cartCount += 1
    },
    decrement: (state) => {
      state.cartCount -= 1
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer