import productImagePreview1 from '../../images/product_image-preview-1.jpg';
import productImagePreview2 from '../../images/product_image-preview-2.jpg';
import productImagePreview3 from '../../images/product_image-preview-3.jpg';
import productImagePreview4 from '../../images/product_image-preview-4.jpg';

import productImage from '../../images/product_image.jpg';

function CarouselImages() {
  return (
    <div className="carousel-images">
      <div className="carousel-images__preview">
        <button type="button" className="carousel-images__button carousel-images__button-up"></button>
        <button type="button" className="carousel-images__button carousel-images__button-down"></button>
        <img src={productImagePreview1} className="carousel-images__img-preview carousel-images__img-preview_active" alt='Фото товара' />
        <img src={productImagePreview2} className="carousel-images__img-preview" alt='Фото товара' />
        <img src={productImagePreview3} className="carousel-images__img-preview" alt='Фото товара' />
        <img src={productImagePreview4} className="carousel-images__img-preview" alt='Фото товара' />
      </div>

      <div className="carousel-images__baner">
        <button type="button" className="carousel-images__button carousel-images__button-left"></button>
        <img src={productImage} className="carousel-images__foto" alt="Фото товара" />
        <button type="button" className="carousel-images__button carousel-images__button-right"></button>
      </div>
    </div>
  )
}

export default CarouselImages;