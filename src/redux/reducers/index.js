import { combineReducers } from 'redux';
import cartReducer from './cart';
import cards from './cards';
import email from './email';
import review from './review';
import country from './country';
import adress from './adress';
import order from './order';


const rootReducer = combineReducers({
  cart: cartReducer,
  cards,
  email,
  review,
  country,
  adress,
  order,
});

export default rootReducer;