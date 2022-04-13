const defaultState = {
  itemsInCards: {
  },
  isLoading: false,
  isError: false,
  isSuccessData: false,
};

const cards = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOADING_DATA': {
      return {
        ...state,
        isLoading: true,
        itemsInCards: action.payload,
      };
    }

    case 'LOAD_SUCCESS_DATA': {
      return {
        ...state,
        itemsInCards: action.payload,
        isLoading: false,
        isSuccessData: true,
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