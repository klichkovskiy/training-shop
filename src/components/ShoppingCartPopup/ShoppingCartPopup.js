import { useSelector } from 'react-redux';
import classNames from 'classnames'

import ShoppingCartCard from '../ShoppingCartCard/ShoppingCartCard';

function ShoppingCartPopup(props) {
  function handleClickCloseCart() {
    props.setIsStateButtonCart(false)
    props.setIsActiveButtonCart(false)
  }

  const cards = useSelector(state => state.cart.itemsInCart)

  const totalValue = cards.reduce((acc, card) => acc += card[4] * card[5], 0)
  
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
          <p className='shopping-cart__step-title shopping-cart__step-title_active'>Item in Cart</p>
          <span className='shopping-cart__step-separator'></span>
          <p className='shopping-cart__step-title'>Delivery Info</p>
          <span className='shopping-cart__step-separator'></span>
          <p className='shopping-cart__step-title'>Payment</p>
        </div>

        <form className='shopping-cart__form'>
          <div className='shopping-cart__cards'>
            {cards.map((card) =>
              <ShoppingCartCard key={card.toString()}
                size={card[0]}
                color={card[1]}
                name={card[2]}
                image={card[3]}
                price={card[4]}
                quantity={card[5]}
                id={card.toString()}
              />
            )}

          </div>
          <div className='shopping-cart__total'>
            <p className='shopping-cart__total-text'>Total</p>
            <p className='shopping-cart__total-value'>&#36; {totalValue}</p>
          </div>
          <div className='shopping-cart__buttons'>
            <button type="button" className='shopping-cart__button-further'>Further</button>
            <button type="button" onClick={handleClickCloseCart} className='shopping-cart__button-view'>View Cart</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ShoppingCartPopup;