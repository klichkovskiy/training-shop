import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames'

import ShoppingCartCard from '../ShoppingCartCard/ShoppingCartCard';
import DeliveryCart from '../DeliveryCart/DeliveryCart';

import { useState } from 'react';
import PaymentCart from '../PaymentCart/PaymentCart';
import { postProducts } from '../../redux/reducers/order';

function ShoppingCartPopup(props) {
  function handleClickCloseCart() {
    props.setIsStateButtonCart(false)
    props.setIsActiveButtonCart(false)
  }

  const cards = useSelector(state => state.cart.itemsInCart)
  const totalValue = cards.reduce((acc, card) => acc += card.price * card.quantity, 0)

  const [isActiveStepCart, setIsActiveStepCart] = useState('one');

  const dispatch = useDispatch();

  function handleClickFurter() {
    setIsActiveStepCart('two')
    dispatch(postProducts({
      products: cards,
      totalPrice: totalValue.toFixed(2)
    }))
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
        <p className='shopping-cart__title-sorry'>Sorry, your cart is empty</p>
        <div className='shopping-cart__center-grid'>
          <button type="button" onClick={handleClickCloseCart} className='shopping-cart__back-shopping'>Back to shopping</button>
        </div>
      </div>

      <div className={classNames({ 'shopping-cart__no-hiden': cards.length === 0 })}>
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

        {isActiveStepCart === 'one' && <form className='shopping-cart__form'>
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
            <button type="button" onClick={handleClickCloseCart} className='shopping-cart__button-view'>View Cart</button>
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
      </div>
    </section>
  )
}

export default ShoppingCartPopup;