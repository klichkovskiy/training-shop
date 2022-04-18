import { all, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { checkedMethod, getCountryStore } from '../reducers/country';


function* countryStoreSagaGet() {
  try {
      const responce = yield call(axios.get, "https://training.cleverland.by/shop/countries");
      yield put(getCountryStore(responce))
    
  } catch (err) {
    yield put(getCountryStore(err.message))
  }
}

function* countrySagaGetWatcher() {
  yield all([takeLatest(checkedMethod().type, countryStoreSagaGet)]);
}


export default countrySagaGetWatcher;