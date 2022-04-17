import { createAction, createReducer } from "@reduxjs/toolkit";

export const getAdressStore = createAction('GET_ADRESS_STORE');
export const checkedAdress = createAction('CHECKED_ADRESS');
export const resetAdressStore = createAction('RESET_ADRESS_STORE');

const initialState = {
  adressStore: [],
  selectedСountry: 'Country',
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
    state.adressStore = action.payload.data;
    state.checkedAdress = false;
  },
  [resetAdressStore]: (state) => {
    state.adressStore = [];
    state.selectedСountry = 'Country';
    state.inputAdress = '';
    state.checkedAdress = false;
  },
})

