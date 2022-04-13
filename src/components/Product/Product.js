import { useHistory } from 'react-router-dom';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import RatingStar from '../RatingStar/RatingStar';
import CarouselImages from '../CarouselImages/CarouselImages';
import ProductInfo from '../ProductInfo/ProductInfo';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

import { useSelector } from 'react-redux';


function Product(props) {
  const history = useHistory()

  function getCard(data, cardId) {
    if (data.id === cardId) {
      return data
    }
  }

  const cards = useSelector(state => state.cards.itemsInCards)

  return (
    <div>
      {cards[props.url].filter((cards) => getCard(cards, history.location.pathname.split('/')[2])).map((card) =>
        <section className="product" data-test-id={`product-page-${props.url}`} key={card.id}>

          <Breadcrumbs
            stepTwo={props.productType}
            stepThree={card.name}
            url={props.url}
          />
          <div className="product__info">
            <h2 className="product__name">{card.name}</h2>

            <div className="product__rating">
              <RatingStar
                rating={card.rating}
              />
              <p className="product__reviews">{card.reviews.length} Reviews</p>
            </div>

            <div className="product__articles">
              <div className="product__article">
                <h3 className="product__attribute">SKU:</h3>
                <p className="product__value">{card.sku}</p>
              </div>

              <div className="product__article">
                <h3 className="product__attribute">Availability:</h3>
                <p className="product__value">{card.availability}</p>
              </div>
            </div>
          </div>
          <div className="product__data">
            <CarouselImages
              images={card.images}
            />

            <ProductInfo
              card={card}
              setIsActiveFormReview={props.setIsActiveFormReview}
            />

            <RelatedProducts
              product={cards[props.url]}
              url={props.url}
            />
          </div>
        </section>
      )}
    </div>
  )
}

export default Product;