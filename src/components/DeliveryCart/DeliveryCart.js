import { Formik } from 'formik';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { checkedMethod } from '../../redux/reducers/country';
import { checkedAdress, getAdressStore } from '../../redux/reducers/adress';
import { useState } from 'react';
//import classNames from 'classnames'

import {
  validatoinSchemaMethodPickupFromPostOffices,
  validatoinSchemaMethodExpressDelivery,
  validatoinSchemaMethodStorePickup
} from '../../utils/validationSchema'
import { postDeliveryInfo } from '../../redux/reducers/order';

function DeliveryCart(props) {
  const [isMethodPickupFromPostOffices, setIsMethodPickupFromPostOffices] = useState(true);
  const [isMethodExpressDelivery, setIsMethodExpressDelivery] = useState(false);
  const [isMethodStorePickup, setIsMethodStorePickup] = useState(false);

  const dispatch = useDispatch();
  const dataCart = useSelector(state => state.order.data);
  const countryStrore = useSelector(state => state.country.countryStore);
  const adressState = useSelector(state => state.adress);

  const [isSelectedСountry, setIsSelectedСountry] = useState('');

  function onChangeAdressStore(adress) {
    if (adress.target.value.length >= 3) {
      dispatch(checkedAdress({ checked: true, adress: adress.target.value, country: isSelectedСountry }))
    }
    if (adress.target.value.length < 3) {
      dispatch(checkedAdress({ checked: false, adress: '', country: '' }))
    }

  }

  return (
    <section className="delivery-cart">

      <Formik
        initialValues={{
          deliveryMethod: 'pickup-from-post-offices',
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
          agree: false
        }}
        validateOnBlur
        onSubmit={
          (values) => {
            dispatch(postDeliveryInfo(values))
            props.setIsActiveStepCart('three')
          }
        }
        validationSchema={
          isMethodPickupFromPostOffices ? validatoinSchemaMethodPickupFromPostOffices :
            isMethodExpressDelivery ? validatoinSchemaMethodExpressDelivery :
              isMethodStorePickup ? validatoinSchemaMethodStorePickup : null
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
                      value='pickup-from-post-offices'
                      name='deliveryMethod'
                      onChange={handleChange}
                      id='pickup-from-post-offices'
                      defaultChecked
                      onClick={() => {
                        setIsMethodPickupFromPostOffices(true)
                        setIsMethodExpressDelivery(false)
                        setIsMethodStorePickup(false)
                      }}
                    >
                    </input>
                    <label htmlFor='pickup-from-post-offices' className="delivery-cart__method-label">
                      Pickup from post offices
                    </label>
                  </div>
                  <span className='delivery-cart__span'></span>

                  <div className="delivery-cart__method-radio">
                    <input
                      type='radio'
                      className="delivery-cart__method-item"
                      value='express-delivery'
                      name='deliveryMethod'
                      onChange={handleChange}
                      id='express-delivery'
                      onClick={() => {
                        setIsMethodPickupFromPostOffices(false)
                        setIsMethodExpressDelivery(true)
                        setIsMethodStorePickup(false)
                      }}
                    >
                    </input>
                    <label htmlFor='express-delivery' className="delivery-cart__method-label">
                      Express delivery
                    </label>
                  </div>
                  <span className='delivery-cart__span'></span>

                  <div className="delivery-cart__method-radio">
                    <input
                      type='radio'
                      className="delivery-cart__method-item"
                      value='store-pickup'
                      name='deliveryMethod'
                      onChange={handleChange}
                      id='store-pickup'
                      onClick={() => {
                        dispatch(checkedMethod('true'))
                        setIsMethodPickupFromPostOffices(false)
                        setIsMethodExpressDelivery(false)
                        setIsMethodStorePickup(true)
                      }}
                    >
                    </input>
                    <label htmlFor='store-pickup' className="delivery-cart__method-label">
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

                  >
                  </input>
                  {touched.email && errors.email &&
                    <p className="delivery-cart__error">{errors.email}</p>
                  }
                </div>
              </div>

              {(values.deliveryMethod === 'pickup-from-post-offices' || values.deliveryMethod === 'express-delivery') &&
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

              {values.deliveryMethod === 'pickup-from-post-offices' &&
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

                    >
                    </InputMask>

                    {touched.postcode && errors.postcode &&
                      <p className="delivery-cart__error">{errors.postcode}</p>
                    }
                  </div>
                </div>}

              {values.deliveryMethod === 'store-pickup' &&
                <div className="delivery-cart__adress-store">
                  <p className="delivery-cart__title">ADRESS of store</p>
                  <div className="delivery-cart__input">

                    <select
                      autoComplete='off'
                      name={'countryStore'}
                      className="delivery-cart__item"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onClick={() => {
                        setIsSelectedСountry(values.countryStore)
                        dispatch(getAdressStore({ data: [] }))
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
                      disabled={(values.countryStore !== 'Country' && values.countryStore !== '') ? false : true}
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
                  value={values.agree}
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
                  if (values.adressStore !== '') {
                    if (adressState.adressStore.some(data => data.city === values.adressStore)) {
                      handleSubmit()
                    }
                  } else {
                    handleSubmit()
                  }
                  
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