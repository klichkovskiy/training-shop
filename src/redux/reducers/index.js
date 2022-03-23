import { combineReducers } from 'redux';
import cart from './cart';
import cards from './cards';

const rootReducer = combineReducers({
  cart,
  cards,
});

export default rootReducer;