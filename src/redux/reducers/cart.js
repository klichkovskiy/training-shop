const initialState = {
  itemsInCart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      return {
        ...state,
        ...state.itemsInCart.push(action.payload),
      };
    }

    case 'REMOVE_CART_ITEM': {
      const itemsInCart = state.itemsInCart.filter(
        (card) =>
        (
          card[0] !== action.payload[0] ||
          card[1] !== action.payload[1] ||
          card[2] !== action.payload[2]
        ),
      );

      return {
        ...state,
        itemsInCart,
      };
    }

    case 'PLUS_PRODUCT': {
      const plus = state.itemsInCart.forEach((card) => {
        if (
          card[0] === action.payload[0] &&
          card[1] === action.payload[1] &&
          card[2] === action.payload[2]
        ) {
          if (card[5] >= 1) {
            card[5] = card[5] + 1;
          }
        }
      }
      );

      return {
        ...state,
        plus,
      };
    }

    case 'MINUS_PRODUCT': {
      const minus = state.itemsInCart.forEach((card) => {
        if (
          card[0] === action.payload[0] &&
          card[1] === action.payload[1] &&
          card[2] === action.payload[2]
        ) {
          if (card[5] >= 1) {
            card[5] = card[5] - 1;
          }
        }
      }
      );

      return {
        ...state,
        minus,
      };
    }

    default:
      return state;
  }
};

export default cart;