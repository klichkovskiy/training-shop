//import { createSlice } from '@reduxjs/toolkit';
import {put, call} from 'redux-saga/effects'

function* getCards() {
  const request = yield call(fetch, 'https://training.cleverland.by/shop/products');
  const data = yield call([request, request.json]);
  return data;
}

export function* loadingData() {
  yield put({ type: 'LOADING_DATA' });
}

export function* loadError() {
  yield put({ type: 'LOAD_ERROR_DATA' });
}

export function* loadData() {
  const data = yield getCards()
  yield put({ type: 'LOAD_SUCCESS_DATA', payload: data });
}

export default function* rootSaga() {
  yield loadingData();

  try {
    yield loadData();
  } catch (e) {
    yield loadError(e);
  }
}




//const cardsSlice = createSlice({
//  name: 'cards',
//  initialState: {
//    itemsInCards:{
//      men: [],
//      women: []
//    },
//    isLoading: false,
//    isError: false,
//  },
//  reducers: {
//    setItemsInCards: (state, action) => {
  
//      state.isLoading = true;
//      console.log(action.payload.men.length);
//      state.itemsInCards.men = action.payload.men
//      state.itemsInCards.women = action.payload.women
//    }
//  }
//})

//export const { setItemsInCards } = cardsSlice.actions;
//export default cardsSlice.reducer;
