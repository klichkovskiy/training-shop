import RatingStar from '../RatingStar/RatingStar';

function Card(props) {
  return (
    <article className="card">
      <img src={props.img} className="card__img" alt={props.name} />
      <h3 className="card__name">{props.name}</h3>
      <p className="card__price">&#36; {props.price}.00</p>
      <div className="card__rating-star">
        <RatingStar />
      </div>
    </article>
  )
}

export default Card;