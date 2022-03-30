import { Formik } from 'formik';
import * as yup from 'yup'
import classNames from 'classnames'

import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { postReview } from '../../redux/reducers/review';
import { useEffect } from 'react';

function FormPostReview(props) {
  const ratings = document.querySelectorAll('.form-post__rating')
  if (ratings > 0) {
    initRatings();
  }
  function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating)
    }

    function initRating(rating) {
      initRatingVars(rating);
      setRatingActiveWidth()
      if (rating.classList.contains('form-post__rating-set')) {
        setRating(rating)
      }
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.form-post__rating-active');
      ratingValue = rating.querySelector('.form-post__rating-value');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
      const ratingItems = rating.querySelectorAll('.form-post__rating-item')
      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];

        ratingItem.addEventListener("mouseenter", function (e) {
          initRatingVars(rating);
          setRatingActiveWidth(ratingItem.value);
        })
        ratingItem.addEventListener("mouseleave", function (e) {
          setRatingActiveWidth();
        })
        // eslint-disable-next-line no-loop-func
        ratingItem.addEventListener("click", () => {
          initRatingVars(rating);
          ratingValue.innerHTML = index + 1;
          setRatingActiveWidth();
        })
      }
    }
  }
  initRatings()


  const validatoinSchema = yup.object().shape({
    name: yup.string().typeError('Enter your name').required('Obligatory field'),
    review: yup.string().typeError('Enter your review').required('Obligatory field')
  })

  const dispatch = useDispatch();
  const loadingAction = useSelector(state => state.review.isLoadingPostReview);
  const closeForm = useSelector(state => state.review.isCloseForm);
  const serverResponce = useSelector(state => state.review.serverResponce);
  const error = useSelector(state => state.review.error);

  console.log(closeForm);
  console.log(Boolean(error));
  useEffect(() => {
    if (closeForm === true && Boolean(error) === false) {
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
      onSubmit={(values, { resetForm }) => {
        dispatch(postReview(values));
        resetForm({
          id: props.idCard,
          name: '',
          review: '',
          rating: '1'
        });
      }}
      validationSchema={validatoinSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
        <form className="form-post__formik" data-test-id='review-modal'>
          <p className="form-post__title">Write a review</p>

          <div className="form-post__rating form-post__rating-set">
            <div className="form-post__rating-body">
              <div className="form-post__rating-active"></div>
              <div className="form-post__rating-items">
                <input
                  type='radio'
                  className="form-post__rating-item"
                  value={1}
                  name='rating'
                  onChange={handleChange}
                ></input>
                <input
                  type='radio'
                  className="form-post__rating-item"
                  value={2}
                  name='rating'
                  onChange={handleChange}
                ></input>
                <input
                  type='radio'
                  className="form-post__rating-item"
                  value={3}
                  name='rating'
                  onChange={handleChange}
                ></input>
                <input
                  type='radio'
                  className="form-post__rating-item"
                  value={4}
                  name='rating'
                  onChange={handleChange}
                ></input>
                <input
                  type='radio'
                  className="form-post__rating-item"
                  value={5}
                  name='rating'
                  onChange={handleChange}
                ></input>
              </div>
              <p className="form-post__rating-value">1</p>
            </div>
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
            disabled={!isValid || !dirty || values.name === '' || values.review === ''}
            onClick={handleSubmit}
            type="submit"
            data-test-id='review-submit-button'
            className={classNames(
              { 'form-post__button_deactivated': !isValid || !dirty || values.name === '' || values.review === '' },
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