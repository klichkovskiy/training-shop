import { createAction, createReducer } from "@reduxjs/toolkit";

export const postUserEmail = createAction('POST_USER_EMAIL');
export const reseptionResponseEmail = createAction('RESEPTION_RESPONSE_EMAIL');
export const loadingPostEmail = createAction('LOADING_POST_EMAIL');

const initialState ={
  serverResponse:null,
  isLoadingPostEmail:false,
  mail:"",
  id: null,
}

export default createReducer(initialState, {
  [postUserEmail]: (state,action) => {
      state.mail=action.payload.mail;
      state.id=action.payload.id;
  },
  [reseptionResponseEmail]: (state,action) => {
      state.serverResponse=action.payload; 
  },
  [loadingPostEmail]: (state,action) => {
      state.isLoadingPostEmail=action.payload; 
  },
})