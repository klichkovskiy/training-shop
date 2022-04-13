import { Formik } from 'formik';
import * as yup from 'yup'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { postUserEmail, reseptionResponseEmail } from '../../redux/reducers/email';
import Preloader from '../Preloader/Preloader';

function Subscribe() {
  const dispatch = useDispatch();

  const loadingAction = useSelector(state => state.email.isLoadingPostEmail);
  const responce = useSelector(state => state.email.serverResponce);
  const id = useSelector(state => state.email.id);


  const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  const validatoinSchema = yup.object().shape({
    mail: yup.string()
      .matches(emailRegex, "Введите email")
  })

  function handleClickInput() {
    dispatch(reseptionResponseEmail(null))
    const div = document.querySelector('.subscribe__form');
    document.addEventListener('click', (event) => {
      const withinBoundaries = event.composedPath().includes(div);

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
            validationSchema={validatoinSchema}
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
                  value={responce === "OK" ? "" : values.mail}
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
                  {responce === null ? "" : responce === "OK" && id === 'subscribe' ? "Почта успешно отправлена" : responce === "Network Error" && id === 'subscribe' ? `${responce}` : ''}
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