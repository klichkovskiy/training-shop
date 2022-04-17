import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import classNames from 'classnames'

import ShoppingCartCard from '../ShoppingCartCard/ShoppingCartCard';
import DeliveryCart from '../DeliveryCart/DeliveryCart';
import PaymentCart from '../PaymentCart/PaymentCart';

import { postProducts, resetProductsCart } from '../../redux/reducers/order';
import { resetItemsInCart } from '../../redux/reducers/cart';
import { resetAdressStore } from '../../redux/reducers/adress';
import { resetCountryStore } from '../../redux/reducers/country';

function ShoppingCartPopup(props) {
  function handleClickCloseCart() {
    props.setIsStateButtonCart(false)
    props.setIsActiveButtonCart(false)
    setIsActiveStepCart('one')
    dispatch(resetProductsCart())
    dispatch(resetAdressStore())
    dispatch(resetCountryStore())
  }
  

  const cards = useSelector(state => state.cart.itemsInCart)
  const totalValue = cards.reduce((acc, card) => acc += card.price * card.quantity, 0)

  const [isActiveStepCart, setIsActiveStepCart] = useState('one');

  const dispatch = useDispatch();
  const serverResponce = useSelector(state => state.order.serverResponce);

  function handleClickFurter() {
    setIsActiveStepCart('two')
    dispatch(postProducts({
      products: cards,
      totalPrice: totalValue.toFixed(2)
    }))
  }

  function onClickBackToShopping() {
    handleClickCloseCart();
    setIsActiveStepCart('one')
    dispatch(resetItemsInCart())
    dispatch(resetProductsCart())
    dispatch(resetAdressStore())
    dispatch(resetCountryStore())
  }

  function onClickViewCart() {
    setIsActiveStepCart('one')
    dispatch(resetProductsCart())
    dispatch(resetAdressStore())
    dispatch(resetCountryStore())
  }

  function onClickBackToPayment() {
    setIsActiveStepCart('three')
  }

  

  return (
    <section className={classNames('shopping-cart', { 'shopping-cart_active': props.isStateButtonCart })} data-test-id='cart'>
      <div className='shopping-cart__header'>
        <p className='shopping-cart__title'>Shopping Cart</p>
        <button type="button" onClick={handleClickCloseCart} className='shopping-cart__button-close'>
          <span className='shopping-cart__button-span shopping-cart__button-span_first'></span>
          <span className='shopping-cart__button-span shopping-cart__button-span_second'></span>
        </button>
      </div>

      <div className={classNames('shopping-cart__no-hiden', { 'shopping-cart__hiden': cards.length === 0 })}>
        <div className='shopping-cart__center-grid'>
          <p className='shopping-cart__subtitle'>Sorry, your cart is empty</p>
        </div>
        <div className='shopping-cart__center-grid'>
          <button type="button" onClick={handleClickCloseCart} className='shopping-cart__back-shopping'>
            Back to shopping
          </button>
        </div>
      </div>


      <div className={classNames({ 'shopping-cart__no-hiden': cards.length === 0 })}>

        {(isActiveStepCart === 'one' || isActiveStepCart === 'two' || isActiveStepCart === 'three') &&
          <div className='shopping-cart__breadcrumbs'>
            <p className={classNames('shopping-cart__step-title',
              { 'shopping-cart__step-title_active': isActiveStepCart === 'one' })}>Item in Cart</p>
            <span className='shopping-cart__step-separator'></span>
            <p className={classNames('shopping-cart__step-title',
              { 'shopping-cart__step-title_active': isActiveStepCart === 'two' })}>Delivery Info</p>
            <span className='shopping-cart__step-separator'></span>
            <p className={classNames('shopping-cart__step-title',
              { 'shopping-cart__step-title_active': isActiveStepCart === 'three' })}>Payment</p>
          </div>
        }

        {isActiveStepCart === 'one' &&
          <form className='shopping-cart__form'>
            <div className='shopping-cart__cards'>
              {cards.map((card) =>
                <ShoppingCartCard key={`${card.name}_${card.color}_${card.size}`}
                  size={card.size}
                  color={card.color}
                  name={card.name}
                  image={card.image}
                  price={card.price}
                  quantity={card.quantity}
                />
              )}

            </div>
            <div className='shopping-cart__total'>
              <p className='shopping-cart__total-text'>Total</p>
              <p className='shopping-cart__total-value'>&#36; {totalValue.toFixed(2)}</p>
            </div>
            <div className='shopping-cart__buttons'>
              <button type="button" className='shopping-cart__button-further'
                onClick={() => {
                  handleClickFurter()
                }}
              >Further</button>
            </div>
          </form>}

        {isActiveStepCart === 'two' &&
          <DeliveryCart
            totalValue={totalValue}
            setIsActiveStepCart={setIsActiveStepCart}
          />}

        {isActiveStepCart === 'three' &&
          <PaymentCart
            totalValue={totalValue}
            setIsActiveStepCart={setIsActiveStepCart}
          />}

        {isActiveStepCart === 'four' &&
          serverResponce === 'OK' ?

          <div className='shopping-cart__responce-ok'>
            <div className='shopping-cart__center-grid'>
              <h4 className='shopping-cart__subtitle'>Thank you for your order</h4>
              <p className='shopping-cart__info'>Information about your order will appear in your e-mail.</p>
              <p className='shopping-cart__call-back'>Our manager will call you back.</p>
            </div>

            <div className='shopping-cart__buttons'>
              <button type="button" className='shopping-cart__button-further'
                onClick={() => {
                  onClickBackToShopping()
                }}
              >back to shopping</button>
            </div>
          </div>

          :

          <div className='shopping-cart__responce'>
            <div className='shopping-cart__center-grid'>
              <p className='shopping-cart__subtitle'>Sorry, your payment has not been processed.</p>
              <p className='shopping-cart__error'>{serverResponce}</p>
            </div>
            <div className='shopping-cart__buttons'>
              <button type="button" className='shopping-cart__button-further'
                onClick={() => {
                  onClickBackToPayment()
                }}
              >Back to payment</button>
              <button type="button" className='shopping-cart__button-view'
                onClick={() => {
                  onClickViewCart()
                }}
              >View Cart</button>
            </div>
          </div>
        }


      </div>
    </section>
  )
}

export default ShoppingCartPopup;