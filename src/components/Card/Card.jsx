import classNames from 'classnames'

import RatingStar from '../RatingStar/RatingStar';

function Card(props) {
  const discountClassNames = classNames('card__discount', { 'card__discount_active': props.discount });

  return (
    <article className="card" key={props.id}>
      <div className={discountClassNames}>
        <p className="card__discount-text">{props.discount}</p>
      </div>
      <img src={`https://training.cleverland.by/shop${props.img.url}`} className="card__img" alt={props.name} />
      <h3 className="card__name">{props.name}</h3>
      <p className="card__price">&#36; {props.price}</p>
      <div className="card__rating-star">
        <RatingStar
          rating={props.rating}
        />
      </div>
    </article>
  )
}

export default Card;