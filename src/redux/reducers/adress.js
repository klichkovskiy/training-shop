import { createAction, createReducer } from "@reduxjs/toolkit";

export const getAdressStore = createAction('GET_ADRESS_STORE');
export const checkedAdress = createAction('CHECKED_ADRESS');

const initialState = {
  adressStore: [],
  selectedСountry: '',
  inputAdress: '',
  checkedAdress: false
}

export default createReducer(initialState, {
  [checkedAdress]: (state, action) => {
    state.selectedСountry = action.payload.country;
    state.inputAdress = action.payload.adress;
    state.checkedAdress = action.payload.checked;
  },
  [getAdressStore]: (state, action) => {
    console.log(action.payload);
    state.adressStore = action.payload.data;
    state.checkedAdress = false;
  },
})

