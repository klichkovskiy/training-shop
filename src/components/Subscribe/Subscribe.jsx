import { useRef } from 'react';
import { Formik } from 'formik';
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';

import Preloader from '../Preloader/Preloader';

import { postUserEmail, reseptionResponseEmail } from '../../redux/reducers/email';

import { validatoinSchemaEmail } from '../../utils/validationSchema'

function Subscribe() {
  const dispatch = useDispatch();

  const loadingAction = useSelector(state => state.email.isLoadingPostEmail);
  const response = useSelector(state => state.email.serverResponse);
  const id = useSelector(state => state.email.id);

  const formRef = useRef();

  function handleClickInput() {
    dispatch(reseptionResponseEmail(null))
    document.addEventListener('click', (event) => {
      const withinBoundaries = event.composedPath().includes(formRef);

      if (!withinBoundaries) {
        dispatch(reseptionResponseEmail(null))
      }
    })
  }
  return (
    <section className="subscribe">
      <form className="subscribe__form">
        <fieldset className="subscribe__fieldset">
          <h3 className="subscribe__title">Special Offer</h3>
          <p className="subscribe__subtitle">Subscribe<br />And <span
            className="subscribe__subtitle subscribe__subtitle_red">Get 10% Off</span></p>

          <Formik
            innerRef={formRef}
            initialValues={{
              mail: '',
              id: 'subscribe'
            }}
            validateOnBlur
            onSubmit={(values, { resetForm }) => {
              if (values.mail) {
                dispatch(postUserEmail(values));
              }
              resetForm({
                mail: ""
              });
            }}
            validationSchema={validatoinSchemaEmail}
          >
            {({ values, errors, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (

              <div className="subscribe__formik">
                <input
                  type="email"
                  name={'mail'}
                  className="subscribe__input"
                  onChange={handleChange}
                  onClick={handleClickInput}
                  onBlur={handleBlur}
                  value={response === "OK" ? "" : values.mail}
                  placeholder="Enter your email"
                  data-test-id='main-subscribe-mail-field'
                ></input>

                <button
                  disabled={!isValid || !dirty || loadingAction || values.mail === ''}
                  onClick={() => {
                    handleSubmit();

                  }}
                  type="submit"
                  data-test-id='main-subscribe-mail-button'
                  className={classNames(
                    { 'subscribe__button_deactivated': !isValid || !dirty || loadingAction || values.mail === '' },
                    { 'subscribe__button': isValid && dirty && values.mail !== '' && !loadingAction })}
                >
                  {loadingAction ? <Preloader /> : 'Subscribe'}
                </button>

                {!isValid && <p className="subscribe__error">{errors.mail}</p>}

                <div className="subscribe__responce">
                  {response === null ? "" : response === "OK" && id === 'subscribe' ? "Почта успешно отправлена" : response === "Network Error" && id === 'subscribe' ? `${response}` : ''}
                </div>
              </div>
            )}
          </Formik>

          <div className="subscribe__form-img-women"></div>
          <div className="subscribe__form-img-men"></div>
        </fieldset>
      </form>
    </section>
  )
}

export default Subscribe;