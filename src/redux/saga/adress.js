import { all, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { checkedAdress, getAdressStore } from '../reducers/adress';


function* adressStoreSagaPost(action) {
  try {
    const responce = yield call(axios.post, "https://training.cleverland.by/shop/search/cities",
      {
        city: action.payload.adress,
        country: action.payload.country
      }
    )
    yield put(getAdressStore(responce))

  } catch (err) {
    yield put(getAdressStore(err.message))
  }
}

function* adressSagaGetWatcher() {
  yield all([takeLatest(checkedAdress().type, adressStoreSagaPost)]);
}


export default adressSagaGetWatcher;