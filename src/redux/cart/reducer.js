import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: []
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload)
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter((card) => card[0] !== action.payload[0] ||
        card[1] !== action.payload[1] ||
        card[2] !== action.payload[2])
    },
    changeItemFromCart: (state, action) => {
      state.itemsInCart.forEach(card => {
        if (
          card[0] !== action.payload[0] ||
          card[1] !== action.payload[1] ||
          card[2] !== action.payload[2]
        ) {
          if (card[5] >= 1) {
            card[5] = card[5] + 1
          }
          //card[5] = action.payload[3]
        }
      })
    }
  }
})

export const { setItemInCart, deleteItemFromCart, changeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;