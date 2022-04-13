import { createAction, createReducer } from "@reduxjs/toolkit";

export const postProducts = createAction('POST_PRODUCTS');
export const postDeliveryInfo = createAction('POST_DELIVERY_INFO');
export const postPayment = createAction('POST_PAYMENT');
export const responsePostProducts = createAction('RESPONSE_POST_PRODUCTS');
export const PostProductsCart = createAction('POST_PRODUCTS_CART');

const initialState = {
  data: {
    products: [],
    totalPrice: "",

    deliveryMethod: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
    postcode: "",
    storeAddress: "",

    paymentMethod: "",
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
    state.data.country = action.payload.countryStore;
    state.data.storeAddress = action.payload.adressStore;
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
  [PostProductsCart]: () => {
  }
})