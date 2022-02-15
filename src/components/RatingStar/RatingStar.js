import iconRatingActive from '../../images/icon_rating-active.svg';
import iconRating from '../../images/icon_rating.svg';

function RatingStar() {
  return (
    <div className="rating">
      <img src={iconRatingActive} className="rating-star" alt="Иконка звезда" />
      <img src={iconRatingActive} className="rating-star" alt="Иконка звезда" />
      <img src={iconRatingActive} className="rating-star" alt="Иконка звезда" />
      <img src={iconRatingActive} className="rating-star" alt="Иконка звезда" />
      <img src={iconRating} className="rating-star" alt="Иконка звезда" />
    </div>
  )
}

export default RatingStar;