import { Formik } from 'formik';
import * as yup from 'yup'
import classNames from 'classnames'

import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { postReview } from '../../redux/reducers/review';
import { useEffect } from 'react';

function FormPostReview(props) {
    const validatoinSchema = yup.object().shape({
    name: yup.string().typeError('Enter your name').required('Obligatory field'),
    review: yup.string().typeError('Enter your review').required('Obligatory field')
  })

  const dispatch = useDispatch();

  const loadingAction = useSelector(state => state.review.isLoadingPostReview);
  const closeForm = useSelector(state => state.review.isCloseForm);
  const serverResponce = useSelector(state => state.review.serverResponce);
  const error = useSelector(state => state.review.error);

  useEffect(() => {
    if (closeForm === true && error === false) {
      console.log(closeForm);
      console.log(error);
      props.setIsActiveFormReview(false);
      props.setIsFixedFormReview(false);
    }
  });


  return (
    <Formik
      initialValues={{
        id: props.idCard,
        name: '',
        review: '',
        rating: '1'
      }}
      validateOnBlur
      onSubmit={values => dispatch(postReview(values))}
      validationSchema={validatoinSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
        <form className="form-post__formik" data-test-id='review-modal'>
          <p className="form-post__title">Write a review</p>


          <div className="form-post__rating">
            <div className="form-post__rating-items">
              <input
                type='radio'
                className="form-post__rating-item"
                value={5}
                name='rating'
                id='rating_5'
                onChange={handleChange}
              >
              </input>
              <label htmlFor='rating_5'className="form-post__rating-label"></label>

              <input
                type='radio'
                className="form-post__rating-item"
                value={4}
                name='rating'
                id='rating_4'
                onChange={handleChange}
              >
              </input>
              <label htmlFor='rating_4'className="form-post__rating-label"></label>

              <input
                type='radio'
                className="form-post__rating-item"
                value={3}
                name='rating'
                id='rating_3'
                onChange={handleChange}
              >
              </input>
              <label htmlFor='rating_3'className="form-post__rating-label"></label>

              <input
                type='radio'
                className="form-post__rating-item"
                value={2}
                name='rating'
                id='rating_2'
                onChange={handleChange}
              >
              </input>
              <label htmlFor='rating_2'className="form-post__rating-label"></label>

              <input
                type='radio'
                className="form-post__rating-item"
                value={1}
                name='rating'
                id='rating_1'
                onChange={handleChange}
                defaultChecked
              >
              </input>
              <label htmlFor='rating_1'className="form-post__rating-label"></label>
            </div>
            <p className="form-post__rating-value">1</p>
          </div>


          <div className="form-post__fieldset">
            <input
              type="text"
              name={'name'}
              className="form-post__input form-post__name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Name"
              data-test-id='review-name-field'
              required
            >
            </input>

            {touched.name && errors.name && <p className="form-post__error">{errors.name}</p>}
          </div>

          <div className="form-post__fieldset">
            <textarea
              type="text"
              name={'review'}
              className="form-post__input form-post__review"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.review}
              placeholder="Review"
              data-test-id='review-text-field'
              required
            >
            </textarea>

            {touched.review && errors.review && <p className="form-post__error">{errors.review}</p>}
          </div>

          <button
            disabled={!isValid || !dirty || loadingAction || values.name === '' || values.review === ''}
            onClick={handleSubmit}
            type="submit"
            data-test-id='review-submit-button'
            className={classNames(
              { 'form-post__button_deactivated': !isValid || !dirty || loadingAction || values.name === '' || values.review === '' },
              { 'form-post__button': isValid && dirty && values.name !== '' && values.review !== '' })}
          >
            {loadingAction ? <Preloader /> : 'Send'}
          </button>
          <div className="form-post__responce">
            {error && `${serverResponce}`}
          </div>
        </form>
      )}
    </Formik>
  )
}

export default FormPostReview;