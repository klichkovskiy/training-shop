import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import Card from '../Card/Card';

import { PRODUCTS_WOMEN } from '../../constants/constants';

import 'swiper/css';
import "swiper/css/navigation";
import "./RelatedProducts.css"

function RelatedProducts() {
  return (
    <section className="related-products" data-test-id='related-slider'>
      <h3 className="related-products__title">RELATED PRODUCTS</h3>
      <div className="related-products__switch">
        <button type="button" className="related-products__button related-products__button-left"></button>
        <button type="button" className="related-products__button related-products__button-right"></button>
      </div>
      <Swiper
        modules={[Navigation]}
        className="related-products__swiper"
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={30}
        navigation={{
          nextEl: '.related-products__button-right',
          prevEl: '.related-products__button-left',
        }}
        breakpoints={{
          // when window width is >= 320px
          400: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is >= 480px
          600: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          // when window width is >= 640px
          1000: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1168: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
      >
        {PRODUCTS_WOMEN.data.map((card) =>
          <SwiperSlide key={card.id}>
            <Link to={`/women/${card.id}`} className="card-link">
              <Card
                name={card.name}
                img={card.img}
                price={card.price}
              />
            </Link>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  )
}

export default RelatedProducts;