import iconRatingActive from '../../images/icon_rating-active.svg';
import iconRating from '../../images/icon_rating.svg';

function RatingStar(props) {
  let ratingValue = props.rating;
  let ratingNotValue = (5 - props.rating);
  const ratingActive = [];
  const ratingNotActive = [];

  while (ratingValue >= 1) {
    ratingActive.push(ratingValue--);
  }
  while (ratingNotValue > ratingValue) {
    ratingNotActive.push(ratingNotValue--);
  }
  return (
    <div className="rating">
      {ratingActive.map((item) =>
        <div key={item}>
          <img src={iconRatingActive} className="rating-star" alt="Иконка звезда" />
        </div>
      )}
      {ratingNotActive.map((item) =>
        <div key={item}>
          <img src={iconRating} className="rating-star" alt="Иконка звезда" />
        </div>
      )}
      
    </div>
  )
}

export default RatingStar;