import { all } from 'redux-saga/effects';
//import rootSagaEmail from './email';
import rootSagaCards from './cards';
import emailSagaPostWatcher from './email';
import reviewSagaPostWatcher from './review';
import countrySagaGetWatcher from './country';
import adressSagaGetWatcher from './adress';
import orderSagaPostWatcher from './order';


export default function* allSaga() {
  yield all([
    rootSagaCards(),
    emailSagaPostWatcher(),
    reviewSagaPostWatcher(),
    countrySagaGetWatcher(),
    adressSagaGetWatcher(),
    orderSagaPostWatcher()
  ])
}