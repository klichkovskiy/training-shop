import { Link } from 'react-router-dom';

function Banner() {
  return (
    <section className="banner">
      <div className="banner__principal">
        <div className="banner__button banner__left-button">
          <button type="button" className="banner__button-left"></button>
        </div>
        <Link to="/accessories" className="banner__principal-link">
          <h3 className="banner__title">Banner</h3>
          <p className="banner__subtitle">your title text</p>
        </Link>
        <div className="banner__button banner__right-button">
          <button type="button" className="banner__button-right"></button>
        </div>
      </div>

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