const defaultState = {
  itemsInCads: {
    men: [],
    women: [],
  },
  isLoading: false,
  isError: false,
};

const cards = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOADING_DATA': {
      return {
        ...state,
        isLoading: true
      };
    }

    case 'LOAD_SUCCESS_DATA': {
      return {
        ...state,
        ...state.itemsInCads.women = action.payload.women,
        ...state.itemsInCads.men = action.payload.men,
        isLoading: false,
      };
    }

    case 'ERROR_LOAD_DATA': {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};

export default cards;