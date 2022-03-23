import { combineReducers } from 'redux';
import cartReducer from './cart';
import cards from './cards';

const rootReducer = combineReducers({
  cart: cartReducer,
  cards,
});

export default rootReducer;