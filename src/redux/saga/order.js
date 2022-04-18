import { all, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { postProductsCart, responsePostProducts } from '../reducers/order';


function* orderSagaPost(action) {
  try {
    const responce = yield call(axios.post, "https://training.cleverland.by/shop/cart", 
      action.payload
    );
    yield put(responsePostProducts(responce.statusText));
  } catch (err) {
    yield put(responsePostProducts(err.message))
    console.log(err.message);
  }
}

function* orderSagaPostWatcher() {
  yield all([takeLatest(postProductsCart().type, orderSagaPost)]);
}

export default orderSagaPostWatcher;