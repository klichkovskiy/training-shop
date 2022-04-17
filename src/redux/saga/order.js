import { all, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { PostProductsCart, responsePostProducts } from '../reducers/order';


function* orderSagaPost(action) {
  try {
    const responce = yield call(axios.post, "https://training.cleverland.by/shop/cart", 
      action.payload
    );
    yield put(responsePostProducts(responce.statusText));
  } catch (err) {
    console.log(err);
    yield put(responsePostProducts(err.message))
    console.log(err.message);
  }
}

function* orderSagaPostWatcher() {
  yield all([takeLatest(PostProductsCart().type, orderSagaPost)]);
}

export default orderSagaPostWatcher;