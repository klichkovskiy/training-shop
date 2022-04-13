import { combineReducers } from 'redux';
import cartReducer from './cart';
import cards from './cards';
import email from './email';
import review from './review';
import countryStore from './countryStore';
import adress from './adress';
import order from './order';


const rootReducer = combineReducers({
  cart: cartReducer,
  cards,
  email,
  review,
  countryStore,
  adress,
  order,
});

export default rootReducer;