import { createAction, createReducer } from "@reduxjs/toolkit";

export const postReview = createAction('POST_REVIEW');
export const loadingReview = createAction('LOADING_REVIEW');
export const reseptionResponseReview = createAction('RESEPTION_RESPONSE_REVIEW');
export const closeForm = createAction('CLOSE_FORM');

const initialState = {
  serverResponce: null,
  isLoadingPostReview: false,
  isCloseForm: false,
  error: false,
  review: {
    "id": '',
    "name": '',
    "review": '',
    "rating": ''
  },
}

export default createReducer(initialState, {
  [postReview]: (state, action) => {
    state.review.id = action.payload.id;
    state.review.name = action.payload.name;
    state.review.review = action.payload.review;
    state.review.rating = action.payload.rating;
    state.error = false;
  },
  [loadingReview]: (state, action) => {
    state.isLoadingPostReview = action.payload;
  },
  [reseptionResponseReview]: (state, action) => {
    state.serverResponce = action.payload;
    state.error = true;
  },
  [closeForm]: (state, action) => {
    state.isCloseForm = action.payload;
  },
})