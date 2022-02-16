import { Link, NavLink } from 'react-router-dom';

import SocialLinks from '../SocialLinks/SocialLinks';

import logo from '../../images/logo.svg';

import iconPhone from '../../images/icon_phone.svg';
import iconAddress from '../../images/icon_address.svg';
import iconWeek from '../../images/icon_week.svg';

import iconSearch from '../../images/icon_search.svg';
import iconGlobe from '../../images/icon_globe.svg';
import iconUser from '../../images/icon_user.svg';
import iconShopingBag from '../../images/icon_shoping-bag.svg';

function Header() {
  return (
    <header className="header" data-test-id='header'>
      <div className="header__block">
        <section className="header__contact-bar">
          <div className="header__contact-info">
            <div className="header__contact-info-block">
              <img src={iconPhone} alt="Иконка телефона" className="header__contact-info-icon" />
              <p className="header__contact-info-text">+375 29 100 20 30</p>
            </div>
            <div className="header__contact-info-block">
              <img src={iconAddress} alt="Иконка метки на карте" className="header__contact-info-icon" />
              <p className="header__contact-info-text">Belarus, Gomel, Lange 17</p>
            </div>
            <div className="header__contact-info-block">
              <img src={iconWeek} alt="Иконка часов" className="header__contact-info-icon" />
              <p className="header__contact-info-text">All week 24/7</p>
            </div>
          </div>

          <SocialLinks />
        </section>

        <section className="header__nav-menu">
          <Link to="#/" className="header__logo-link" data-test-id='header-logo-link'>
            <img src={logo} className="header__logo" alt="Логотип" />
          </Link>

          <nav className="header__nav-bar" data-test-id='menu'>
            <NavLink to="/about-us" data-test-id='menu-link-about-us' activeClassName="header__nav-bar-link_active" className="header__nav-bar-link">About Us</NavLink>
            <NavLink to="/women" data-test-id='menu-link-women' activeClassName="header__nav-bar-link_active" className="header__nav-bar-link">Women</NavLink>
            <NavLink to="/men" data-test-id='menu-link-men' activeClassName="header__nav-bar-link_active" className="header__nav-bar-link">Men</NavLink>
            <NavLink to="/beauty" data-test-id='menu-link-beauty' activeClassName="header__nav-bar-link_active" className="header__nav-bar-link">Beauty</NavLink>
            <NavLink to="/acccessories" data-test-id='menu-link-acccessories' activeClassName="header__nav-bar-link_active" className="header__nav-bar-link">Accessories</NavLink>
            <NavLink to="/blog" data-test-id='menu-link-blog' activeClassName="header__nav-bar-link_active" className="header__nav-bar-link">Blog</NavLink>
            <NavLink to="/contact" data-test-id='menu-link-contact' activeClassName="header__nav-bar-link_active" className="header__nav-bar-link">Contact</NavLink>
          </nav>

          <div className="header__nav-shop">
            <button type="button" className="header__nav-shop-link">
              <img src={iconSearch} className="header__nav-shop-icon" alt="Иконка лупы" />
            </button>
            <button type="button" className="header__nav-shop-link">
              <img src={iconGlobe} className="header__nav-shop-icon" alt="Иконка глобуса" />
            </button>
            <Link to="/user" className="header__nav-shop-link">
              <img src={iconUser} className="header__nav-shop-icon" alt="Иконка user" />
            </Link>
            <Link to="/basket" className="header__nav-shop-link header__nav-shop-link-bag">
              <img src={iconShopingBag} className="header__nav-shop-icon" alt="Иконка сумки" />
              <p className="header__nav-shop-index">2</p>
            </Link>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header;