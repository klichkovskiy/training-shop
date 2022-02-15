import RatingStar from '../RatingStar/RatingStar';

import iconHanger from '../../images/icon_hanger.svg';

import iconCar from '../../images/icon_car.svg';
import iconReturn from '../../images/icon_return.svg';
import iconLetter from '../../images/icon_letter.svg';

import iconComent from '../../images/icon_coment.svg';

import ProductColorPreview1 from '../../images/product_color-preview-1.jpg';
import ProductColorPreview2 from '../../images/product_color-preview-2.jpg';
import ProductColorPreview3 from '../../images/product_color-preview-3.jpg';
import ProductColorPreview4 from '../../images/product_color-preview-4.jpg';

import iconStripe from '../../images/stripe.png';
import iconAes from '../../images/aes256.png';
import iconPayPal from '../../images/paypal.png';
import iconVisa from '../../images/visa.png';
import iconMasterCard from '../../images/mastercard.png';
import iconDiscover from '../../images/discover.png';
import iconAmericanExpress from '../../images/american-express.png';

function ProductInfo() {
  return (
    <div className="product-info">
      <div className="product-info__color">
        <div className="product-info__characteristic">
          <h3 className="product-info__attribute">Color:</h3>
          <p className="product-info__value">Blue</p>
        </div>
        <div className="product-info__color-carousel">
          <img src={ProductColorPreview1} alt="icon prewiev color" className="product-info__color-carousel-img product-info__color-carousel-img_active" />
          <img src={ProductColorPreview2} alt="icon prewiev color" className="product-info__color-carousel-img" />
          <img src={ProductColorPreview3} alt="icon prewiev color" className="product-info__color-carousel-img" />
          <img src={ProductColorPreview4} alt="icon prewiev color" className="product-info__color-carousel-img" />
        </div>
      </div>

      <div className="product-info__size">
        <div className="product-info__characteristic">
          <h3 className="product-info__attribute">Size:</h3>
          <p className="product-info__value">S</p>
        </div>
        <div className="product-info__radio">
          <div className="product-info__radio-item">
            <input type="radio" id="XS" name="size" value="XS" className="product-info__radio-input"></input>
            <label htmlFor="XS" className="product-info__radio-label">XS</label>
          </div>
          <div className="product-info__radio-item">
            <input type="radio" id="S" name="size" value="S" className="product-info__radio-input"></input>
            <label htmlFor="S" className="product-info__radio-label">S</label>
          </div>
          <div className="product-info__radio-item">
            <input type="radio" id="M" name="size" value="M" className="product-info__radio-input"></input>
            <label htmlFor="M" className="product-info__radio-label">M</label>
          </div>
          <div className="product-info__radio-item">
            <input type="radio" id="L" name="size" value="L" className="product-info__radio-input"></input>
            <label htmlFor="L" className="product-info__radio-label">L</label>
          </div>
        </div>

        <button type="button" className="product-info__size-guide">
          <img src={iconHanger} alt="Иконка телефона" className="product-info__size-guide-icon" />
          <p className="product-info__size-guide-text">Size guide</p>
        </button>
      </div>

      <hr className="product-info__line" />

      <div className="product-info__buy">
        <h3 className="product-info__price">&#36; 379.99</h3>
        <div className="product-info__buy-buttons">
          <button type="button" className="product-info__buy-button">Add to card</button>
          <button type="button" className="product-info__buy-button-like"></button>
          <button type="button" className="product-info__buy-button-comparison"></button>
        </div>
      </div>

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
          <p className="product-info__additional-info-value">Blue, White, Black, Grey</p>
        </div>

        <div className="product-info__additional-info-element">
          <p className="product-info__additional-info-subtitle">Size:</p>
          <p className="product-info__additional-info-value">XS, S, M, L</p>
        </div>

        <div className="product-info__additional-info-element">
          <p className="product-info__additional-info-subtitle">Material:</p>
          <p className="product-info__additional-info-value">	100% Polyester</p>
        </div>
      </div>

      <hr className="product-info__line" />

      <div className="product-info__reviews">
        <div className="product-info__reviews-rating">
          <div className="product-info__rating">
            <RatingStar />
            <p className="product-info__rating-text">2 Reviews</p>
          </div>

          <button type="button" className="product-info__reviews-button">
            <img src={iconComent} alt="Иконка сообщения" className="product-info__reviews-button-icon" />
            <p className="product-info__reviews-button-text">Write a review</p>
          </button>
        </div>

        <div className="product-info__reviews-coment">
          <p className="product-info__reviews-coment-name-user">Oleh Chabanov</p>

          <div className="product-info__reviews-coment-rating">
            <p className="product-info__reviews-coment-rating-age">3 months ago</p>
            <RatingStar />
          </div>

          <p className="product-info__reviews-coment-text">On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
        </div>

        <div className="product-info__reviews-coment">
          <p className="product-info__reviews-coment-name-user">ShAmAn design</p>

          <div className="product-info__reviews-coment-rating">
            <p className="product-info__reviews-coment-rating-age">3 months ago</p>
            <RatingStar />
          </div>

          <p className="product-info__reviews-coment-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
        </div>

      </div>

      <hr className="product-info__line" />
    </div>
  )
}

export default ProductInfo;