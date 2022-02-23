import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import RatingStar from '../RatingStar/RatingStar';
import CarouselImages from '../CarouselImages/CarouselImages';
import ProductInfo from '../ProductInfo/ProductInfo';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

function Product(props) {
  return (
    <section className="product" data-test-id={`product-page-${props.url}`}>
      <Breadcrumbs
        stepTwo={props.productType}
        stepThree='Women&#10076;s tracksuit Q109'
      />
      <div className="product__info">
        <h2 className="product__name">Women's tracksuit Q109</h2>

        <div className="product__rating">
          <RatingStar />
          <p className="product__reviews">2 Reviews</p>
        </div>

        <div className="product__articles">
          <div className="product__article">
            <h3 className="product__attribute">SKU:</h3>
            <p className="product__value">777</p>
          </div>

          <div className="product__article">
            <h3 className="product__attribute">Availability:</h3>
            <p className="product__value">In Stock</p>
          </div>
        </div>
      </div>
      <div className="product__data">
        <CarouselImages />

        <ProductInfo />

        <RelatedProducts />
      </div>
    </section>
  )
}

export default Product;