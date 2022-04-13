import { all } from 'redux-saga/effects';
//import rootSagaEmail from './email';
import rootSagaCards from './cards';
import emailSagaPostWatcher from './email';
import reviewSagaPostWatcher from './review';
import countryStoreGet from './countryStore';
import adressSagaGetWatcher from './adress';

export default function* allSaga() {
  yield all([rootSagaCards(), emailSagaPostWatcher(), reviewSagaPostWatcher(), countryStoreGet(), adressSagaGetWatcher()])
}