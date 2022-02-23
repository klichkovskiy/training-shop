import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";

import "./Banner.css"

import slideOne from '../../images/banner__principal.jpg';

function Banner() {
  return (
    <section className="banner">
      <Swiper
      navigation={true} 
      modules={[Navigation]} 
      className="banner__swiper" 
      data-test-id='main-slider'
      autoHeight={true}
      >
        <SwiperSlide>
          <img src={slideOne} alt="Иконка машины" className="advantage__icon" />
          <Link to="/accessories" className="banner__swiper-link">
            <div className="banner__swiper-text">
              <h3 className="banner__title">Banner</h3>
              <p className="banner__subtitle">your title text</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideOne} alt="Иконка машины" className="advantage__icon" />
          <Link to="/accessories" className="banner__swiper-link">
            <div className="banner__swiper-text">
              <h3 className="banner__title">Banner</h3>
              <p className="banner__subtitle">your title text</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideOne} alt="Иконка машины" className="advantage__icon" />
          <Link to="/accessories" className="banner__swiper-link">
            <div className="banner__swiper-text">
              <h3 className="banner__title">Banner</h3>
              <p className="banner__subtitle">your title text</p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>


      <div className="banner__women">
        <Link to="/women" className="banner__link">Women</Link>
      </div>

      <div className="banner__men">
        <Link to="/men" className="banner__link">Men</Link>
      </div>

      <div className="banner__accessories">
        <Link to="/accessories" className="banner__link banner__link-accessories">Accessories</Link>
      </div>
    </section>
  )
}

export default Banner;