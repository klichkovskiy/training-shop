import { all, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { postReview, loadingReview, reseptionResponseReview, closeForm } from '../reducers/review';


function* reviewSagaPost(action) {
  yield put(loadingReview(true));
  
  try {
    yield call(axios.post, "https://training.cleverland.by/shop/product/review", 
    {
      id: action.payload.id,
      name: action.payload.name,
      text: action.payload.review,
      rating: Number(action.payload.rating),
    });
    const cards = yield call(axios.get, 'https://training.cleverland.by/shop/products');
    yield put({ type: 'LOAD_SUCCESS_DATA', payload: cards.data });
  } catch (err) {
    yield put(reseptionResponseReview(err.message))
  }
  yield put(loadingReview(false));
  yield put(closeForm(true));
  yield put(closeForm(false));
}

function* reviewSagaPostWatcher() {
  yield all([takeLatest(postReview().type, reviewSagaPost)]);
}

export default reviewSagaPostWatcher;