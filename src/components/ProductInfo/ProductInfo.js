import React, { useState } from 'react';

import RatingStar from '../RatingStar/RatingStar';

import iconHanger from '../../images/icon_hanger.svg';

import iconCar from '../../images/icon_car.svg';
import iconReturn from '../../images/icon_return.svg';
import iconLetter from '../../images/icon_letter.svg';

import iconComent from '../../images/icon_coment.svg';

import iconStripe from '../../images/stripe.png';
import iconAes from '../../images/aes256.png';
import iconPayPal from '../../images/paypal.png';
import iconVisa from '../../images/visa.png';
import iconMasterCard from '../../images/mastercard.png';
import iconDiscover from '../../images/discover.png';
import iconAmericanExpress from '../../images/american-express.png';

function ProductInfo(props) {
  const images = props.card.images
  const colorsArr = images.map((images) => {
    return images.color
  })

  function uniqueColor(images, colorsArr) {
    let result = [];
    for (let i = 0; i < colorsArr.length; i = i + 1) {
      let resultUnique = [];
      function uniqueArr(image) {
        if (image.color === colorsArr[i]) {
          resultUnique.push(image)
        }
      }
      images.filter((image) => uniqueArr(image))
      result.push(resultUnique[0])
    }
    return result;
  }

  function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  }

  const colors = unique(colorsArr.join().split(','));
  const uniqueColors = uniqueColor(images, colors)

  const [isColorValue, setIsColorValue] = useState(colors[0]);
  function checkedColor(event) {
    setIsColorValue(event.target.value);
  }
  const [isSizeValue, setIsSizeValue] = useState(props.card.sizes[0]);
  function checkedSize(event) {
    setIsSizeValue(event.target.value);
  }

  

  return (
    <div className="product-info">
      <form className="product-info__form">
        <fieldset className="product-info__color">
          <div className="product-info__characteristic">
            <h3 className="product-info__attribute">Color:</h3>
            <p className="product-info__value">{isColorValue}</p>
          </div>
          <div className="product-info__color-carousel">
            {uniqueColors.map((image) =>
              <div className="product-info__color-item" key={image.id}>
                <input type="radio" onClick={checkedColor} id={image.id} name="color" value={image.color}
                  className="product-info__color-input"></input>
                <label htmlFor={image.id} className="product-info__color-label">
                  <img src={`https://training.cleverland.by/shop${image.url}`}
                    alt="Иконка карточки выбора цвета" className="product-info__color-img" />
                </label>
              </div>
            )}
          </div>
        </fieldset>

        <fieldset className="product-info__size">
          <div className="product-info__characteristic">
            <h3 className="product-info__attribute">Size:</h3>
            <p className="product-info__value">{isSizeValue}</p>
          </div>
          <div className="product-info__radio">
            {props.card.sizes.map((size) =>
              <div className="product-info__radio-item" key={size}>
                <input type="radio" id={size} name="size" value={size}
                  onClick={checkedSize} className="product-info__radio-input"></input>
                <label htmlFor={size} className="product-info__radio-label">{size}</label>
              </div>
            )}
          </div>

          <button type="button" className="product-info__size-guide">
            <img src={iconHanger} alt="Иконка телефона" className="product-info__size-guide-icon" />
            <p className="product-info__size-guide-text">Size guide</p>
          </button>
        </fieldset>

        <hr className="product-info__line" />

        <fieldset className="product-info__buy">
          <h3 className="product-info__price">&#36; {props.card.price}</h3>
          <div className="product-info__buy-buttons">
            <button type="button" className="product-info__buy-button">Add to card</button>
            <button type="button" className="product-info__buy-button-like"></button>
            <button type="button" className="product-info__buy-button-comparison"></button>
          </div>
        </fieldset>
      </form>

      <hr className="product-info__line" />

      <div className="product-info__advantage">
        <div className="product-info__advantage-block">
          <img src={iconCar} alt="Иконка машины" className="product-info__advantage-icon" />
          <p className="product-info__advantage-title">Shipping &amp; Delivery</p>
        </div>

        <div className="product-info__advantage-block">
          <img src={iconReturn} alt="Иконка обновления" className="product-info__advantage-icon" />
          <p className="product-info__advantage-title">Returns &amp; Exchanges</p>
        </div>

        <div className="product-info__advantage-block">
          <img src={iconLetter} alt="Иконка письмо" className="product-info__advantage-icon" />
          <p className="product-info__advantage-title">Ask a question</p>
        </div>
      </div>

      <div className="product-info__guaranteed">
        <p className="product-info__guaranteed-text">guaranteed safe checkout</p>
        <hr className="product-info__line" />
      </div>

      <div className="product-info__payment">
        <img src={iconStripe} alt="Иконка Stripe" className="product-info__payment-icon" />
        <img src={iconAes} alt="Иконка AES256" className="product-info__payment-icon" />
        <img src={iconPayPal} alt="Иконка PayPal" className="product-info__payment-icon" />
        <img src={iconVisa} alt="Иконка Visa" className="product-info__payment-icon" />
        <img src={iconMasterCard} alt="Иконка MasterCard" className="product-info__payment-icon" />
        <img src={iconDiscover} alt="Иконка Discover" className="product-info__payment-icon" />
        <img src={iconAmericanExpress} alt="Иконка телефона" className="product-info__payment-icon" />
      </div>

      <hr className="product-info__line" />

      <div className="product-info__description">
        <h3 className="product-info__attribute">DESCRIPTION</h3>
      </div>

      <hr className="product-info__line" />

      <div className="product-info__additional-info">
        <h4 className="product-info__additional-info-title">ADDITIONAL INFORMATION</h4>
      </div>

      <div className="product-info__additional-info-characteristic">
        <div className="product-info__additional-info-element">
          <p className="product-info__additional-info-subtitle">Color:</p>
          <p className="product-info__additional-info-value">{colors.join(', ')}</p>
        </div>

        <div className="product-info__additional-info-element">
          <p className="product-info__additional-info-subtitle">Size:</p>
          <p className="product-info__additional-info-value">{props.card.sizes.join(', ')}</p>
        </div>

        <div className="product-info__additional-info-element">
          <p className="product-info__additional-info-subtitle">Material:</p>
          <p className="product-info__additional-info-value">	{props.card.material}</p>
        </div>
      </div>

      <hr className="product-info__line" />

      <div className="product-info__reviews">
        <div className="product-info__reviews-rating">
          <div className="product-info__rating">
            <RatingStar
              rating={props.card.rating}
            />
            <p className="product-info__rating-text">{props.card.reviews.length} Reviews</p>
          </div>

          <button type="button" className="product-info__reviews-button">
            <img src={iconComent} alt="Иконка сообщения" className="product-info__reviews-button-icon" />
            <p className="product-info__reviews-button-text">Write a review</p>
          </button>
        </div>

        {props.card.reviews.map((review) =>
          <div className="product-info__reviews-coment" key={review.id}>
            <p className="product-info__reviews-coment-name-user">{review.name}</p>
            <div className="product-info__reviews-coment-rating">
              <RatingStar
                rating={review.rating}
              />
            </div>
            <p className="product-info__reviews-coment-text">{review.text}</p>
          </div>
        )}

      </div>

      <hr className="product-info__line" />
    </div>
  )
}

export default ProductInfo;