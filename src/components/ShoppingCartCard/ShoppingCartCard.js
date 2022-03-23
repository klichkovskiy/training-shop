import { useDispatch } from 'react-redux';
import { changeCounterPlus, changeCounterMinus, deleteItemFromCart } from '../../redux/reducers/cart';

import iconTrash from '../../images/icon_trash.svg';


function ShoppingCartCard(props) {
  const dispatch = useDispatch();
  function handleDeleteCard(event) {
    event.stopPropagation()
    dispatch(deleteItemFromCart([props.size, props.color, props.name]))
  }

  function handleMinusCounter() {
    dispatch(changeCounterMinus([props.size, props.color, props.name, props.image, props.price, props.quantity]))
  }

  function handlePlusCounter() {
    dispatch(changeCounterPlus([props.size, props.color, props.name, props.image, props.price, props.quantity]))
  }

  const totalPriceCard = props.price * props.quantity
  return (
    <article className='cart__card' data-test-id='cart-card'>
      <img src={props.image} className="cart__img" alt={props.name} />
      <h3 className="cart__name">{props.name}</h3>
      <p className="cart__info">{props.color}, {props.size}</p>

      <div className="cart__counter">
        <button type="button" onClick={handleMinusCounter} className='cart__button-minus' data-test-id='minus-product'>
          <span className='cart__button_gorizont'></span>
        </button>
        <p className="card__count">{props.quantity}</p>
        <button type="button" onClick={handlePlusCounter} className='cart__button-plus' data-test-id='plus-product'>
          <span className='cart__button_gorizont'></span>
          <span className='cart__button_vertical'></span>
        </button>
      </div>

      <p className="cart__price">&#36; {totalPriceCard.toFixed(2)}</p>
      <button type="button" onClick={handleDeleteCard} className='cart__button-trash'  data-test-id='remove-product'>
        <img src={iconTrash} alt="Иконка мусорки" className="cart__button-trash-icon" />
      </button>
      <span className='cart__span'></span>
    </article>
  )
}

export default ShoppingCartCard;