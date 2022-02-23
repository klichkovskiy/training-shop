import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames'

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
  const [isStateButtonBurger, setIsStateButtonBurger] = useState(false);

  function handleClickButtonBurger() {
    setIsStateButtonBurger(!isStateButtonBurger)
  }

  let menuClassNames = classNames('header__menu', { 'header__menu_mobile': isStateButtonBurger });
  let buttonBurgerClassNames = classNames('header__button-burger', { 'header__button-burger_close': isStateButtonBurger });

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
          <nav className={menuClassNames} data-test-id='burger-menu'>
            <NavLink to="/about-us" data-test-id='menu-link-about-us' onClick={handleClickButtonBurger} activeClassName="header__menu-link_active" className="header__menu-link">About Us</NavLink>
            <NavLink to="/women" data-test-id='menu-link-women' onClick={handleClickButtonBurger} activeClassName="header__menu-link_active" className="header__menu-link">Women</NavLink>
            <NavLink to="/men" data-test-id='menu-link-men' onClick={handleClickButtonBurger} activeClassName="header__menu-link_active" className="header__menu-link">Men</NavLink>
            <NavLink to="/beauty" data-test-id='menu-link-beauty' onClick={handleClickButtonBurger} activeClassName="header__menu-link_active" className="header__menu-link">Beauty</NavLink>
            <NavLink to="/acccessories" data-test-id='menu-link-acccessories' onClick={handleClickButtonBurger} activeClassName="header__menu-link_active" className="header__menu-link">Accessories</NavLink>
            <NavLink to="/blog" data-test-id='menu-link-blog' onClick={handleClickButtonBurger} activeClassName="header__menu-link_active" className="header__menu-link">Blog</NavLink>
            <NavLink to="/contact" data-test-id='menu-link-contact' onClick={handleClickButtonBurger} activeClassName="header__menu-link_active" className="header__menu-link">Contact</NavLink>
          </nav>

          <div className="header__logo-block">
            <Link to="#/" className="header__logo-link" data-test-id='header-logo-link'>
              <img src={logo} className="header__logo" alt="Логотип" />
            </Link>
          </div>

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

            <button type="button" onClick={handleClickButtonBurger} className={buttonBurgerClassNames} data-test-id='burger-menu-btn'>
              <span className='header__button-line header__button-line_first'></span>
              <span className='header__button-line header__button-line_second'></span>
              <span className='header__button-line header__button-line_third'></span>
              <span className='header__button-line header__button-line_fourth'></span>
            </button>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header;