import { combineReducers } from 'redux';
import cartReducer from './cart';
import cards from './cards';
import email from './email';
import review from './review';


const rootReducer = combineReducers({
  cart: cartReducer,
  cards,
  email,
  review,
});

export default rootReducer;