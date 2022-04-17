import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames'

import SocialLinks from '../SocialLinks/SocialLinks';
import Preloader from '../Preloader/Preloader';

import { reseptionResponseEmail, postUserEmail } from '../../redux/reducers/email';

import { validatoinSchemaEmail } from '../../utils/validationSchema'

import iconPhone from '../../images/icon_phone.svg';
import iconAddress from '../../images/icon_address-border.svg';
import iconWeek from '../../images/icon_week-border.svg';
import iconLetter from '../../images/icon_letter.svg';
import iconStripe from '../../images/stripe.png';
import iconAes from '../../images/aes256.png';
import iconPayPal from '../../images/paypal.png';
import iconVisa from '../../images/visa.png';
import iconMasterCard from '../../images/mastercard.png';
import iconDiscover from '../../images/discover.png';
import iconAmericanExpress from '../../images/american-express.png';

function Footer() {
  const dispatch = useDispatch();

  const loadingAction = useSelector(state => state.email.isLoadingPostEmail);
  const responce = useSelector(state => state.email.serverResponce);
  const id = useSelector(state => state.email.id);

  function handleClickInput() {
    dispatch(reseptionResponseEmail(null))
    const div = document.querySelector('.footer__form');
    document.addEventListener('click', (event) => {
      const withinBoundaries = event.composedPath().includes(div);

      if (!withinBoundaries) {
        dispatch(reseptionResponseEmail(null))
      }
    })
  }
  return (
    <footer className="footer" data-test-id='footer'>
      <form className="footer__form">
        <fieldset className="footer__fieldset">
          <div className="footer__fieldset-text">
            <p className="footer__in-touch-text">BE IN TOUCH WITH US:</p>
          </div>

          <Formik
            initialValues={{
              mail: '',
              id: 'footer'
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
              <div className="footer__field">
                <input
                  type="email"
                  name='mail'
                  className="footer__input"
                  onChange={handleChange}
                  onClick={handleClickInput}
                  onBlur={handleBlur}
                  value={responce === "OK" ?  "" : values.mail }
                  placeholder="Enter your email"
                  data-test-id='footer-mail-field'
                >
                </input>

                <button
                  disabled={!isValid || !dirty || loadingAction || values.mail === ''}
                  onClick={handleSubmit}
                  type="submit"
                  data-test-id='footer-subscribe-mail-button'
                  className={classNames(
                    { 'footer__button': isValid && dirty && values.mail !== '' && !loadingAction },
                    { 'footer__button_deactivated': !isValid || !dirty || loadingAction || values.mail === '' },
                  )}
                >
                  {loadingAction ? <Preloader /> : 'Join Us'}
                </button>

                {!isValid && <p className="footer__error">{errors.mail}</p>}

                <div className="footer__responce">
                  {responce === null ? "" : responce === "OK" && id === 'footer' ? "Почта успешно отправлена" : responce === "Network Error" && id === 'footer' ? `${responce}`: ''}
                </div>
              </div>
            )}
          </Formik>

          <div className="footer__social-links">
            <SocialLinks />
          </div>
        </fieldset>
      </form>

      <section className="footer__nav">
        <article className="footer__nav-block">
          <h3 className="footer__nav-title">Categories</h3>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <NavLink to="/men" data-test-id='footer-nav-link-men' activeClassName="footer__nav-link_active" className="footer__nav-bar-link">Men</NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink to="/women" data-test-id='footer-nav-link-women' activeClassName="footer__nav-link_active" className="footer__nav-bar-link">Women</NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink to="/acccessories" data-test-id='footer-nav-link-acccessories' activeClassName="footer__nav-link_active" className="footer__nav-bar-link">Accessories</NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink to="/beauty" data-test-id='footer-nav-link-beauty' activeClassName="footer__nav-link_active" className="footer__nav-bar-link">Beauty</NavLink>
            </li>
          </ul>
        </article>

        <article className="footer__nav-block">
          <h3 className="footer__nav-title">Infomation</h3>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <NavLink to="/about-us" data-test-id='footer-nav-link-about-us' activeClassName="footer__nav-link_active" className="footer__nav-bar-link">About Us</NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink to="/contact" data-test-id='footer-nav-link-contact' activeClassName="footer__nav-link_active" className="footer__nav-bar-link">Contact Us</NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink to="/blog" data-test-id='footer-nav-link-blog' activeClassName="footer__nav-link_active" className="footer__nav-bar-link">Blog</NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink to="/faq" data-test-id='footer-nav-link-faq' activeClassName="footer__nav-link_active" className="footer__nav-bar-link">FAQs</NavLink>
            </li>
          </ul>
        </article>

        <article className="footer__nav-block">
          <h3 className="footer__nav-title">Useful links</h3>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <NavLink to="/terms-conditions" data-test-id='footer-nav-link-terms-conditions' activeClassName="footer__nav-link_active" className="footer__nav-bar-link">Terms &amp; Conditions</NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink to="/returns-exchanges" data-test-id='footer-nav-link-returns-exchanges' activeClassName="footer__nav-link_active" className="footer__nav-bar-link">Returns &amp; Exchanges</NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink to="/shipping-delivery" data-test-id='footer-nav-link-shipping-delivery' activeClassName="footer__nav-link_active" className="footer__nav-bar-link">Shipping &amp; Delivery</NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink to="/privacy-policy" data-test-id='footer-nav-link-privacy-policy' activeClassName="footer__nav-link_active" className="footer__nav-bar-link">Privacy Policy</NavLink>
            </li>
          </ul>
        </article>

        <article className="footer__nav-block">
          <h3 className="footer__nav-title">CONTACT US</h3>
          <ul className="footer__nav-list">
            <li className="footer__nav-item footer__nav-item-contact">
              <img src={iconAddress} alt="Иконка метки на карте" className="footer__contact-info-icon" />
              <p className="footer__contact-info-text">Belarus, Gomel, Lange 17</p>
            </li>
            <li className="footer__nav-item footer__nav-item-contact">
              <img src={iconPhone} alt="Иконка телефона" className="footer__contact-info-icon" />
              <p className="footer__contact-info-text">+375 29 100 20 30</p>
            </li>
            <li className="footer__nav-item footer__nav-item-contact">
              <img src={iconWeek} alt="Иконка часов" className="footer__contact-info-icon" />
              <p className="footer__contact-info-text">All week 24/7</p>
            </li>
            <li className="footer__nav-item footer__nav-item-contact">
              <img src={iconLetter} alt="Иконка часов" className="footer__contact-info-icon" />
              <p className="footer__contact-info-text">info@clevertec.ru</p>
            </li>
          </ul>
        </article>
      </section>

      <section className="footer__info">
        <p className="footer__copyright">Copyright &copy; 2022 all rights reserved</p>

        <div className="footer__payment">
          <img src={iconStripe} alt="Иконка Stripe" className="footer__payment-icon" />
          <img src={iconAes} alt="Иконка AES256" className="footer__payment-icon" />
          <img src={iconPayPal} alt="Иконка PayPal" className="footer__payment-icon" />
          <img src={iconVisa} alt="Иконка Visa" className="footer__payment-icon" />
          <img src={iconMasterCard} alt="Иконка MasterCard" className="footer__payment-icon" />
          <img src={iconDiscover} alt="Иконка Discover" className="footer__payment-icon" />
          <img src={iconAmericanExpress} alt="Иконка телефона" className="footer__payment-icon" />
        </div>

        <a className="footer__info-link" href='https://clevertec.ru/study/frontend.html' target="_blank" rel="noopener noreferrer">Clevertec.ru/training</a>
      </section>
    </footer>
  )
}

export default Footer;