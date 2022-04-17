import { Formik } from 'formik';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { checkedMethod } from '../../redux/reducers/country';
import { checkedAdress, getAdressStore } from '../../redux/reducers/adress';
import { postDeliveryInfo, pullAgreeChecked } from '../../redux/reducers/order';

import {
  validatoinSchemaMethodPickupFromPostOffices,
  validatoinSchemaMethodExpressDelivery,
  validatoinSchemaMethodStorePickup
} from '../../utils/validationSchema'

import { DELIVERY_METHOD } from '../../constants/constants';

function DeliveryCart(props) {
  const dispatch = useDispatch();
  
  const dataCart = useSelector(state => state.order.data);
  const countryStrore = useSelector(state => state.country.countryStore);
  const adressState = useSelector(state => state.adress);

  const [isMethodPickupFromPostOffices, setIsMethodPickupFromPostOffices] = useState(dataCart.deliveryMethod === DELIVERY_METHOD.pickupFromPostOffices);
  const [isMethodExpressDelivery, setIsMethodExpressDelivery] = useState(dataCart.deliveryMethod === DELIVERY_METHOD.expressDelivery);
  const [isMethodStorePickup, setIsMethodStorePickup] = useState(dataCart.deliveryMethod === DELIVERY_METHOD.storePickup);

  const [isSelectedСountry, setIsSelectedСountry] = useState('');

  function onChangeAdressStore(adress) {
    if (adress.target.value.length >= 3) {
      dispatch(checkedAdress({ checked: true, adress: adress.target.value, country: isSelectedСountry }))
    }
    if (adress.target.value.length < 3) {
      dispatch(checkedAdress({ checked: false, adress: '', country: '' }))
    }
  }

  function onSubmitForm(data) {
    dispatch(postDeliveryInfo(data))
    props.setIsActiveStepCart('three')
  }

  function onValidationShema() {
    if (isMethodPickupFromPostOffices) {
      return validatoinSchemaMethodPickupFromPostOffices
    } else if (isMethodExpressDelivery) {
      return validatoinSchemaMethodExpressDelivery
    } else if (isMethodStorePickup) {
      return validatoinSchemaMethodStorePickup
    } else {
      return null
    }
  }

  function onClickMethodPickupFromPostOffices() {
    setIsMethodPickupFromPostOffices(true)
    setIsMethodExpressDelivery(false)
    setIsMethodStorePickup(false)
  }

  function onClickMethodExpressDeliver() {
    setIsMethodPickupFromPostOffices(false)
    setIsMethodExpressDelivery(true)
    setIsMethodStorePickup(false)
  }

  function onClickMethodStorePickup() {
    dispatch(checkedMethod('true'))
    setIsMethodPickupFromPostOffices(false)
    setIsMethodExpressDelivery(false)
    setIsMethodStorePickup(true)
  }

  function onClickGetAdressStore(country) {
    setIsSelectedСountry(country)
    dispatch(getAdressStore({ data: [] }))
  }

  return (
    <section className="delivery-cart">
      <Formik
        initialValues={{
          deliveryMethod: dataCart.deliveryMethod,
          phone: dataCart.phone,
          email: dataCart.email,
          country: dataCart.country,
          city: dataCart.city,
          street: dataCart.street,
          house: dataCart.house,
          apartment: dataCart.apartment,
          postcode: dataCart.postcode,

          countryStore: adressState.selectedСountry,
          adressStore: adressState.inputAdress,
          agree: dataCart.agree
        }}
        validateOnBlur
        onSubmit={(values) => {
          if (values.adressStore !== '') {
            if (adressState.adressStore.some(data => data.city === values.adressStore)) {
              onSubmitForm(values)
            }
          } else {
            onSubmitForm(values)
          }
        }}
        validationSchema={
          onValidationShema()
        }
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <form className="delivery-cart__form">
            <div className="delivery-cart__items">
              <div className="delivery-cart__method">
                <p className="delivery-cart__method-title">Choose the method of delivery of the items</p>
                <span className='delivery-cart__span'></span>

                <div className="delivery-cart__method-items">
                  <div className="delivery-cart__method-radio">
                    <input
                      type='radio'
                      className="delivery-cart__method-item"
                      value={DELIVERY_METHOD.pickupFromPostOffices}
                      name='deliveryMethod'
                      onChange={handleChange}
                      id={DELIVERY_METHOD.pickupFromPostOffices}
                      checked={isMethodPickupFromPostOffices}
                      onClick={() => { onClickMethodPickupFromPostOffices() }}
                    >
                    </input>
                    <label htmlFor={DELIVERY_METHOD.pickupFromPostOffices} className="delivery-cart__method-label">
                      Pickup from post offices
                    </label>
                  </div>
                  <span className='delivery-cart__span'></span>

                  <div className="delivery-cart__method-radio">
                    <input
                      type='radio'
                      className="delivery-cart__method-item"
                      value={DELIVERY_METHOD.expressDelivery}
                      name='deliveryMethod'
                      onChange={handleChange}
                      id={DELIVERY_METHOD.expressDelivery}
                      checked={isMethodExpressDelivery}
                      onClick={() => { onClickMethodExpressDeliver() }}
                    >
                    </input>
                    <label htmlFor={DELIVERY_METHOD.expressDelivery} className="delivery-cart__method-label">
                      Express delivery
                    </label>
                  </div>
                  <span className='delivery-cart__span'></span>

                  <div className="delivery-cart__method-radio">
                    <input
                      type='radio'
                      className="delivery-cart__method-item"
                      value={DELIVERY_METHOD.storePickup}
                      name='deliveryMethod'
                      onChange={handleChange}
                      id={DELIVERY_METHOD.storePickup}
                      checked={isMethodStorePickup}
                      onClick={() => { onClickMethodStorePickup() }}
                    >
                    </input>
                    <label htmlFor={DELIVERY_METHOD.storePickup} className="delivery-cart__method-label">
                      Store pickup
                    </label>
                  </div>
                  <span className='delivery-cart__span'></span>
                </div>
              </div>


              <div className="delivery-cart__phone">
                <p className="delivery-cart__title">PHONE</p>
                <div className="delivery-cart__input">
                  <InputMask
                    name={'phone'}
                    className="delivery-cart__item"
                    mask="+375 (99) 9999999"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+375 (__) _______"
                    required
                  >
                  </InputMask>

                  {touched.phone && errors.phone &&
                    <p className="delivery-cart__error">{errors.phone}</p>
                  }
                </div>
              </div>

              <div className="delivery-cart__email">
                <p className="delivery-cart__title">e-mail</p>
                <div className="delivery-cart__input">
                  <input
                    type="email"
                    name={'email'}
                    className="delivery-cart__item"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="e-mail"
                    required
                  >
                  </input>
                  {touched.email && errors.email &&
                    <p className="delivery-cart__error">{errors.email}</p>
                  }
                </div>
              </div>

              {(values.deliveryMethod === DELIVERY_METHOD.pickupFromPostOffices || values.deliveryMethod === DELIVERY_METHOD.expressDelivery) &&
                <div>
                  <div className="delivery-cart__adress">
                    <p className="delivery-cart__title">ADRESS</p>
                    <div className="delivery-cart__input">
                      <input
                        type="text"
                        name={'country'}
                        className="delivery-cart__item"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.country}
                        placeholder="Country"
                        required
                      >
                      </input>
                      {touched.country && errors.country &&
                        <p className="delivery-cart__error">{errors.country}</p>
                      }
                    </div>

                    <div className="delivery-cart__input">
                      <input
                        type="text"
                        name={'city'}
                        className="delivery-cart__item"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                        placeholder="City"
                        required
                      >
                      </input>
                      {touched.city && errors.city &&
                        <p className="delivery-cart__error">{errors.city}</p>
                      }
                    </div>

                    <div className="delivery-cart__input">
                      <input
                        type="text"
                        name={'street'}
                        className="delivery-cart__item"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.street}
                        placeholder="Street"
                        required
                      >
                      </input>
                      {touched.street && errors.street &&
                        <p className="delivery-cart__error">{errors.street}</p>
                      }
                    </div>

                    <div className="delivery-cart__adress-half-block">
                      <div className="delivery-cart__input">
                        <input
                          type="text"
                          name={'house'}
                          className="delivery-cart__item"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.house}
                          placeholder="House"
                          required
                        >
                        </input>
                        {touched.house && errors.house &&
                          <p className="delivery-cart__error">{errors.house}</p>
                        }
                      </div>

                      <div className="delivery-cart__input">
                        <input
                          type="text"
                          name={'apartment'}
                          className="delivery-cart__item"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.apartment}
                          placeholder="Apartment"
                        >
                        </input>
                        {touched.apartment && errors.apartment &&
                          <p className="delivery-cart__error">{errors.apartment}</p>
                        }
                      </div>
                    </div>
                  </div>

                </div>}

              {values.deliveryMethod === DELIVERY_METHOD.pickupFromPostOffices &&
                <div className="delivery-cart__postcode">
                  <p className="delivery-cart__title">POSTcode</p>
                  <div className="delivery-cart__input">

                    <InputMask
                      type="text"
                      name={'postcode'}
                      className="delivery-cart__item"
                      mask="BY 999999"
                      value={values.postcode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="BY ______"
                      required
                    >
                    </InputMask>

                    {touched.postcode && errors.postcode &&
                      <p className="delivery-cart__error">{errors.postcode}</p>
                    }
                  </div>
                </div>}

              {values.deliveryMethod === DELIVERY_METHOD.storePickup &&
                <div className="delivery-cart__adress-store">
                  <p className="delivery-cart__title">ADRESS of store</p>
                  <div className="delivery-cart__input">

                    <select
                      autoComplete='off'
                      name={'countryStore'}
                      className="delivery-cart__item"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onClick={(value) => {
                        onClickGetAdressStore(value.target.value)
                      }}
                      value={values.countryStore}

                    >
                      <option defaultValue="Country">Country</option>
                      {countryStrore.map(country =>
                        <option
                          key={country._id}
                          className="delivery-cart__item"
                          value={country.name}
                        >
                          {country.name}
                        </option>
                      )}
                    </select>

                    {touched.countryStore && errors.countryStore &&
                      <p className="delivery-cart__error">{errors.countryStore}</p>
                    }

                  </div>

                  <div className="delivery-cart__input">
                    <input
                      type="text"
                      name={'adressStore'}
                      className="delivery-cart__item delivery-cart__item-adress"
                      onChange={(e) => {
                        handleChange(e);
                        onChangeAdressStore(e);
                      }}
                      onBlur={handleBlur}
                      placeholder="Store adress"
                      disabled={(values.countryStore !== 'Country') ? false : true}
                      value={values.adressStore}
                      list="city-list"
                      autoComplete='off'
                    >
                    </input>
                    <datalist id="city-list">
                      {adressState.adressStore.map(({ city, _id }) => (
                        <option
                          key={_id}
                          value={city}
                        >
                          {city}
                        </option>
                      ))}
                    </datalist>

                    {touched.adressStore && errors.adressStore &&
                      (values.countryStore !== 'Country' && values.countryStore !== '') &&
                      <p className="delivery-cart__error">{errors.adressStore}</p>
                    }
                    {values.adressStore.length >= 3 && adressState.adressStore.length === 0 &&
                      <p className="delivery-cart__not-find">Не найдено ни одного города</p>
                    }

                    {adressState.adressStore.some(data => data.city === values.adressStore) === false &&
                      (values.countryStore !== 'Country' && values.countryStore !== '') &&
                      values.adressStore.length >= 3 && adressState.adressStore.length > 0 ?
                      <p className="delivery-cart__not-list">Выберите город из списка</p> : ''
                    }
                  </div>
                </div>}

              <div className="delivery-cart__agree">
                <input
                  type="checkbox"
                  name={'agree'}
                  className="delivery-cart__agree-item"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  //value={values.agree}
                  checked={values.agree}
                  id='agree'

                >
                </input>
                <label htmlFor='agree' className="delivery-cart__agree-label">
                  I agree to the processing of my personal information
                </label>
                {touched.agree && errors.agree &&
                  <p className="delivery-cart__agree_error">{errors.agree}</p>
                }
              </div>
            </div>

            <div className='delivery-cart__total'>
              <p className='shopping-cart__total-text'>Total</p>
              <p className='shopping-cart__total-value'>&#36; {props.totalValue.toFixed(2)}</p>
            </div>
            <div className='shopping-cart__buttons'>
              <button type="button" className='shopping-cart__button-further'
                onClick={() => {
                  if(isValid) {
                    dispatch(pullAgreeChecked(true))
                    values.agree = true
                  } else {
                    dispatch(pullAgreeChecked(false))
                    values.agree = false
                  }
                  handleSubmit()
                }}>
                Further
              </button>
              <button type="button" className='shopping-cart__button-view' onClick={() => {
                props.setIsActiveStepCart('one');
                dispatch(postDeliveryInfo(values))
              }}>View Cart</button>
            </div>

          </form>
        )}
      </Formik>

    </section>
  )
}

export default DeliveryCart;