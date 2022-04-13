import { call, put } from 'redux-saga/effects';
const axios = require('axios');

function* loadCards() {
  const request = yield call(axios.get, 'https://training.cleverland.by/shop/products');
  
  return request.data;
}

export function* loadingBasicData() {
  const data = yield loadCards();
  yield put({ type: 'LOADING_DATA', payload: data });
}

export function* loadSuccessBasicData() {
  const data = yield loadCards();
  yield put({ type: 'LOAD_SUCCESS_DATA', payload: data });
}
export function* loadErrorBasicData() {
  yield put({ type: 'ERROR_LOAD_DATA' });
}

export default function* rootSagaCards() {
  yield loadingBasicData();

  try {
    yield loadSuccessBasicData();
  } catch (e) {
    yield loadErrorBasicData(e);
  }
}