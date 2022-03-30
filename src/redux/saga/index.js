import { all } from 'redux-saga/effects';
//import rootSagaEmail from './email';
import rootSagaCards from './cards';
import emailSagaPostWatcher from './email';
import reviewSagaPostWatcher from './review';

export default function* allSaga() {
  yield all([rootSagaCards(), emailSagaPostWatcher(), reviewSagaPostWatcher()])
}