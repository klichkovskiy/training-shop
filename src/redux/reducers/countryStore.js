import { createAction, createReducer } from "@reduxjs/toolkit";

export const getCountryStore = createAction('GET_COUNTRY_STORE');
export const checkedMethod = createAction('CHECKED_METHOD');

const initialState = {
  countryStore: [],
  checkedMethod: false
}

export default createReducer(initialState, {
  [getCountryStore]: (state, action) => {
    state.countryStore = action.payload.data;
    state.checkedMethod = false;
  },
  [checkedMethod]: (state, action) => {
    state.checkedMethod = action.payload;
  }
})