////import { compose, applyMiddleware, createStore } from 'redux';
//import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
//import createSagaMiddleware from "@redux-saga/core";
//import cartReducer from './cart/reducer';
////import cardsReducer from './cards/reducer';
//import rootSaga from './cards/reducer';
//import { configureStore } from '@reduxjs/toolkit';

////const sagaMiddleware = createSagaMiddleware();
////sagaMiddleware.run(rootSaga);

//export const store = configureStore({
//  reducer: {
//    cart: cartReducer,
//    //cards: cardsReducer
//  }
//});


//const sagaMiddleware = createSagaMiddleware();
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//export const store2 = createStore(cartReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
//sagaMiddleware.run(rootSaga);



////const sagaMiddleware = createSagaMiddleware()
////export const store2 = createStore(reducer, applyMiddleware(sagaMiddleware));
////const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
////const enhancer = composeEnhancers(applyMiddleware());
////export const store = createStore(cartReducer, enhancer);

import { compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);















