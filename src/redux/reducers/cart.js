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
      console.log(action);
      state.itemsInCart = state.itemsInCart.filter((card) =>
        card.size !== action.payload[0] ||
        card.color !== action.payload[1] ||
        card.name !== action.payload[2])
    },
    changeCounterPlus: (state, action) => {
      
      state.itemsInCart.forEach((card) => {
        if (
          card.size === action.payload[0] &&
          card.color === action.payload[1] &&
          card.name === action.payload[2]
        ) {
          if (card.quantity >= 1) {
            card.quantity = card.quantity + 1;
          }
        }
      })
    },
    changeCounterMinus: (state, action) => {
      state.itemsInCart.forEach((card) => {
        if (
          card.size === action.payload[0] &&
          card.color === action.payload[1] &&
          card.name === action.payload[2]
        ) {
          if (card.quantity > 1) {
            card.quantity = card.quantity - 1;
          }
        }
      })
    }

  }
})

export const { setItemInCart, deleteItemFromCart, changeCounterPlus, changeCounterMinus } = cartSlice.actions;
export default cartSlice.reducer;