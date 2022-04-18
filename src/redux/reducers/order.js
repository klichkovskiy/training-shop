import { createAction, createReducer } from "@reduxjs/toolkit";

export const postProducts = createAction('POST_PRODUCTS');
export const postDeliveryInfo = createAction('POST_DELIVERY_INFO');
export const postPayment = createAction('POST_PAYMENT');
export const responsePostProducts = createAction('RESPONSE_POST_PRODUCTS');
export const postProductsCart = createAction('POST_PRODUCTS_CART');
export const resetProductsCart = createAction('RESET_PRODUCTS_CART');
export const pullAgreeChecked = createAction('PULL_AGREE_CHECKED');


const initialState = {
  data: {
    products: [],
    totalPrice: "",

    deliveryMethod: "pickup-from-post-offices",
    phone: "",
    email: "",
    country: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
    postcode: "",
    storeAddress: "",

    agree: false,

    paymentMethod: "visa",
    cashEmail: "",
    card: "",
    cardDate: "",
    cardCVV: ""
  },
  serverResponce: null,
}

export default createReducer(initialState, {
  [postProducts]: (state, action) => {
    state.data.products = action.payload.products;
    state.data.totalPrice = action.payload.totalPrice;
  },
  [postDeliveryInfo]: (state, action) => {
    state.data.deliveryMethod = action.payload.deliveryMethod;
    state.data.phone = action.payload.phone;
    state.data.email = action.payload.email;
    state.data.country = action.payload.country;
    state.data.city = action.payload.city;
    state.data.street = action.payload.street;
    state.data.house = action.payload.house;
    state.data.apartment = action.payload.apartment;
    state.data.postcode = action.payload.postcode;
    state.data.storeAddress = action.payload.storeAddress;
    state.data.agree = action.payload.agree;
  },
  [postPayment]: (state, action) => {
    state.data.paymentMethod = action.payload.paymentMethod;
    state.data.cashEmail = action.payload.cashEmail;
    state.data.card = action.payload.card;
    state.data.cardDate = action.payload.cardDate;
    state.data.cardCVV = action.payload.cardCVV;
  },
  [responsePostProducts]: (state, action) => {
    state.serverResponce = action.payload;
  },
  [postProductsCart]: (state, action) => {
    state.data = action.payload;
  },
  [pullAgreeChecked]: (state, action) => {
    state.data.agree = action.payload;
  },
  [resetProductsCart]: (state, action) => {
    state.data = initialState.data
  }
})