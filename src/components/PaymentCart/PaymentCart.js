import { Formik } from 'formik';
import InputMask from 'react-input-mask';
import { useState } from 'react';
//import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';

import { validatoinSchemaMethodCard, validatoinSchemaMethodPayPal } from '../../utils/validationSchema';
import { postPayment, PostProductsCart } from '../../redux/reducers/order';

import iconPayPal from '../../images/paypal.png';
import iconVisa from '../../images/visa.png';
import iconMasterCard from '../../images/mastercard.png';
import iconEye from '../../images/icon_eye.svg';
import iconEyeNot from '../../images/icon_eyenot.svg';


function PaymentCart(props) {
  const [isMethodPayPal, setIsMethodPayPal] = useState(false);
  const [isMethodCards, setIsMethodCards] = useState(true);
  const [isMethodCash, setIsMethodCash] = useState(false);

  const dispatch = useDispatch();
  const dataCart = useSelector(state => state.order.data);

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  return (
    <section className="payment-cart">
      <Formik
        initialValues={{
          paymentMethod: dataCart.paymentMethod,
          cashEmail: dataCart.cashEmail,
          card: dataCart.card,
          cardDate: dataCart.cardDate,
          cardCVV: dataCart.cardCVV,
        }}
        validateOnBlur
        onSubmit={
          (values) => {

            dispatch(PostProductsCart({
              products: dataCart.products,
              deliveryMethod: dataCart.deliveryMethod,
              totalPrice: dataCart.totalPrice,
              phone: dataCart.phone,
              email: dataCart.email,
              country: dataCart.country,
              city: dataCart.city,
              street: dataCart.street,
              house: dataCart.house,
              apartment: dataCart.apartment,
              postcode: dataCart.postcode,
              storeAdress: dataCart.storeAdress,

              paymentMethod: values.paymentMethod,
              cashEmail: values.cashEmail,
              card: values.card,
              cardDate: values.cardDate,
              cardCVV: values.cardCVV,
            }));
            props.setIsActiveStepCart('four')
          }
        }
        validationSchema={
          isMethodPayPal ? validatoinSchemaMethodPayPal :
            isMethodCards ? validatoinSchemaMethodCard :
              isMethodCash ? null : null}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <form className="payment-cart__form">
            <div className="payment-cart__items">
              <div className="payment-cart__method">
                <p className="payment-cart__method-title">Method of payments</p>
                <span className='payment-cart__span'></span>

                <div className="payment-cart__method-items">
                  <div className="payment-cart__method-radio">
                    <input
                      type='radio'
                      className="payment-cart__method-item"
                      value='paypal'
                      name='paymentMethod'
                      onChange={handleChange}
                      id='paypal'
                      onClick={() => {
                        setIsMethodPayPal(true)
                        setIsMethodCards(false)
                        setIsMethodCash(false)
                      }}
                    >
                    </input>
                    <label htmlFor='paypal' className="payment-cart__method-label">
                      <img src={iconPayPal} alt="Иконка PayPal" className="payment-cart__icon" />
                    </label>
                  </div>

                  <span className='payment-cart__span'></span>

                  <div className="payment-cart__method-radio">
                    <input
                      type='radio'
                      className="payment-cart__method-item"
                      value='visa'
                      name='paymentMethod'
                      onChange={handleChange}
                      id='visa'
                      defaultChecked
                      onClick={() => {
                        setIsMethodPayPal(false)
                        setIsMethodCards(true)
                        setIsMethodCash(false)
                      }}
                    >
                    </input>
                    <label htmlFor='visa' className="payment-cart__method-label">
                      <img src={iconVisa} alt="Иконка Visa" className="payment-cart__icon" />
                    </label>
                  </div>

                  <span className='payment-cart__span'></span>

                  <div className="payment-cart__method-radio">
                    <input
                      type='radio'
                      className="payment-cart__method-item"
                      value='mastercard'
                      name='paymentMethod'
                      onChange={handleChange}
                      id='mastercard'
                      onClick={() => {
                        setIsMethodPayPal(false)
                        setIsMethodCards(true)
                        setIsMethodCash(false)
                      }}
                    >
                    </input>
                    <label htmlFor='mastercard' className="payment-cart__method-label">
                      <img src={iconMasterCard} alt="Иконка MasterCard" className="payment-cart__icon" />
                    </label>
                  </div>

                  <span className='payment-cart__span'></span>

                  <div className="payment-cart__method-radio">
                    <input
                      type='radio'
                      className="payment-cart__method-item"
                      value='cash'
                      name='paymentMethod'
                      onChange={handleChange}
                      id='cash'
                      onClick={() => {
                        setIsMethodPayPal(false)
                        setIsMethodCards(false)
                        setIsMethodCash(true)
                      }}
                    >
                    </input>
                    <label htmlFor='cash' className="payment-cart__method-label">
                      Cash
                    </label>
                  </div>

                  <span className='payment-cart__span'></span>
                </div>

                {(values.paymentMethod === 'visa' || values.paymentMethod === 'mastercard') &&
                  <div className="payment-cart__card">
                    <p className="payment-cart__title">card</p>
                    <div className="payment-cart__input">
                      <InputMask
                        name={'card'}
                        className="payment-cart__item"
                        mask="9999 9999 9999 9999"
                        value={values.card}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="____ ____ ____ ____"
                        required
                      >
                      </InputMask>
                      {touched.card && errors.card &&
                        <p className="payment-cart__error">{errors.card}</p>
                      }
                    </div>

                    <div className="payment-cart__adress-half-block">
                      <div className="payment-cart__input">
                        <InputMask
                          name={'cardDate'}
                          className="payment-cart__item"
                          mask="99/99"
                          value={values.cardDate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="MM/YY"
                          required
                        >
                        </InputMask>
                        {touched.cardDate && errors.cardDate &&
                          <p className="payment-cart__error">{errors.cardDate}</p>
                        }
                      </div>

                      <div className="payment-cart__input">
                        <input
                          maxLength={3}
                          type={isVisiblePassword !== true ? "password" : "text"}
                          name={'cardCVV'}
                          className="payment-cart__item"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.cardCVV}
                          placeholder="CVV"
                          suggested="current-password"
                          required
                        >
                        </input>
                        {touched.cardCVV && errors.cardCVV &&
                          <p className="payment-cart__error">{errors.cardCVV}</p>
                        }

                        <img src={!isVisiblePassword ? iconEyeNot : iconEye}
                          onClick={() => { setIsVisiblePassword(!isVisiblePassword) }}
                          alt="Иконка глаза" className="payment-cart__icon-eye" />
                      </div>
                    </div>
                  </div>}

                {values.paymentMethod === 'paypal' &&
                  <div className="payment-cart__email">
                    <p className="payment-cart__title">e-mail</p>
                    <div className="payment-cart__input">
                      <input
                        type="email"
                        name={'cashEmail'}
                        className="payment-cart__item"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cashEmail}
                        placeholder="e-mail"
                        required
                      >
                      </input>
                      {touched.cashEmail && errors.cashEmail &&
                        <p className="payment-cart__error">{errors.cashEmail}</p>
                      }
                    </div>
                  </div>
                }
              </div>
            </div>


            <div className='payment-cart__total'>
              <p className='shopping-cart__total-text'>Total</p>
              <p className='shopping-cart__total-value'>&#36; {props.totalValue.toFixed(2)}</p>
            </div>
            <div className='shopping-cart__buttons'>
              <button type="button" className='shopping-cart__button-further'
                onClick={() => {
                  handleSubmit()
                  
                }}>
                {values.paymentMethod === 'cash' ? 'READY' : 'Check Out'}
              </button>
              <button type="button" className='shopping-cart__button-view' onClick={() => {
                props.setIsActiveStepCart('two')
                dispatch(postPayment(values))
              }}>View Cart</button>
            </div>

          </form>
        )}
      </Formik>

    </section>
  )
}

export default PaymentCart;