import { all, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { postUserEmail, reseptionResponseEmail, loadingPostEmail } from '../reducers/email';


function* emailSagaPost(action) {
  console.log(action);
  yield put(loadingPostEmail(true));
  try {
    const responce = yield call(axios.post, "https://training.cleverland.by/shop/email", {
      mail: action.payload.mail
    });
    action.payload.reset()
    yield put(reseptionResponseEmail(responce.statusText))
  } catch (err) {
    yield put(reseptionResponseEmail(err.message))
  }
  yield put(loadingPostEmail(false));
}

function* emailSagaPostWatcher() {
  yield all([takeLatest(postUserEmail().type, emailSagaPost)]);
}

export default emailSagaPostWatcher;