import { all, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { PostProductsCart, responsePostProducts } from '../productBasket';


function* cartSagaPost(action) {
  try {
    const responce = yield call(axios.post, "https://training.cleverland.by/shop/cart", {
      product: action.payload.product,
      deliveryMethod: action.payload.deliveryMethod,
      paymentMethod: action.payload.paymentMethod,
      totalPrice: action.payload.totalPrice,
      phone: action.payload.phone,
      email: action.payload.email,
      country: action.payload.country,
      cashEmail: action.payload.cashEmail,
      city: action.payload.city,
      street: action.payload.street,
      house: action.payload.house,
      apartment: action.payload.apartment,
      postcode: action.payload.postcode,
      storeAddress: action.payload.storeAddress,
      card: action.payload.card,
      cardDate: action.payload.cardDate,
      cardCVV: action.payload.cardCVV,
    });
    yield console.log(responce)
    yield put(responsePostProducts(responce.statusText));
  } catch (err) {
    yield put(responsePostProducts(err.message))
    console.log(err.message);
  }
}

function* cartSagaPostWatcher() {
  yield all([takeLatest(PostProductsCart().type, cartSagaPost)]);
}

export default cartSagaPostWatcher;