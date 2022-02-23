import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./CarouselImages.css"

import productImage from '../../images/product_image.jpg';

function CarouselImages() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="carousel-images" data-test-id='product-slider'>
      <div className="carousel-images__preview">
        <button type="button" className="carousel-images__button carousel-images__button-up"></button>
        <button type="button" className="carousel-images__button carousel-images__button-down"></button>
      </div>

      <div className="carousel-images__vertical">
        <Swiper
          direction={"vertical"}
          modules={[FreeMode, Navigation, Thumbs]}
          onSwiper={setThumbsSwiper}
          className="carousel-images__swiper-vertical"
          slidesPerView={5}
          spaceBetween={16}
          freeMode={true}
          watchSlidesProgress={true}
          navigation={{
            nextEl: '.carousel-images__button-down',
            prevEl: '.carousel-images__button-up',
          }}
        >
          <SwiperSlide className="carousel-images__swiper-slide">
            <img src={productImage} className='carousel-images__img-preview' alt="Фото товара" />
          </SwiperSlide>
          <SwiperSlide className="carousel-images__swiper-slide">
            <img src={productImage} className='carousel-images__img-preview' alt="Фото товара" />
          </SwiperSlide>
          <SwiperSlide className="rcarousel-images__swiper-slide">
            <img src={productImage} className='carousel-images__img-preview' alt="Фото товара" />
          </SwiperSlide>
          <SwiperSlide className="carousel-images__swiper-slide">
            <img src={productImage} className='carousel-images__img-preview' alt="Фото товара" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="carousel-images__main">
        <button type="button" className="carousel-images__button carousel-images__button-up carousel-images__button-left"></button>
        <Swiper
          navigation={
            {
              nextEl: '.carousel-images__button-down',
              prevEl: '.carousel-images__button-up',
            }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="carousel-images__swiper-main"
          thumbs={{ swiper: thumbsSwiper }}
        >
          <SwiperSlide>
            <img src={productImage} className="carousel-images__foto" alt="Фото товара" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={productImage} className="carousel-images__foto" alt="Фото товара" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={productImage} className="carousel-images__foto" alt="Фото товара" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={productImage} className="carousel-images__foto" alt="Фото товара" />
          </SwiperSlide>
        </Swiper>
        <button type="button" className="carousel-images__button carousel-images__button-down carousel-images__button-right"></button>
      </div>


    </div>
  )
}

export default CarouselImages;