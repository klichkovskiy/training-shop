import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames'

import SocialLinks from '../SocialLinks/SocialLinks';
import ShoppingCartPopup from '../ShoppingCartPopup/ShoppingCartPopup';

import logo from '../../images/logo.svg';

import iconPhone from '../../images/icon_phone.svg';
import iconAddress from '../../images/icon_address.svg';
import iconWeek from '../../images/icon_week.svg';

import iconSearch from '../../images/icon_search.svg';
import iconGlobe from '../../images/icon_globe.svg';
import iconUser from '../../images/icon_user.svg';
import iconShopingBag from '../../images/icon_shoping-bag.svg';

function Header(props) {
  const [isStateButtonBurger, setIsStateButtonBurger] = useState(false);

  function handleClickButtonBurger() {
    setIsStateButtonBurger(!isStateButtonBurger)
    props.setIsActiveButtonMenu(!isStateButtonBurger)

    const div = document.querySelector('.header__menu');
    const div2 = document.querySelector('.header__button-burger');
    document.addEventListener('click', (event) => {
      const withinBoundaries = event.composedPath().includes(div);
      const withinBoundaries2 = event.composedPath().includes(div2);

      if (!withinBoundaries && !withinBoundaries2) {
        setIsStateButtonBurger(false);
        props.setIsActiveButtonMenu(false)
      }
    })
  }

  function handleClickButtonLink() {
    setIsStateButtonBurger(false)
    props.setIsActiveButtonMenu(false)
  }

  let menuClassNames = classNames('header__menu', { 'header__menu_mobile': isStateButtonBurger });
  let buttonBurgerClassNames = classNames('header__button-burger', { 'header__button-burger_close': isStateButtonBurger });

  //открытие корзины
  const [isStateButtonCart, setIsStateButtonCart] = useState(false);
  function handleClickButtonShoppingCart() {
    setIsStateButtonCart(!isStateButtonCart)
    props.setIsActiveButtonCart(!isStateButtonCart)

    const div = document.querySelector('.shopping-cart');
    const div2 = document.querySelector('.header__nav-shop-link-bag');
    document.addEventListener('click', (event) => {
      const withinBoundaries = event.composedPath().includes(div);
      const withinBoundaries2 = event.composedPath().includes(div2);
      if (!withinBoundaries && !withinBoundaries2) {
        setIsStateButtonCart(false)
        props.setIsActiveButtonCart(false)
      }
    })
  }

  const cards = useSelector(state => state.cart.itemsInCart)
  let indexClassNames = classNames('header__nav-shop-index', { 'header__nav-shop-index_hiden': cards.length === 0 });

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
            <NavLink to="/about-us" data-test-id='menu-link-about-us' onClick={handleClickButtonLink} activeClassName="header__menu-link_active" className="header__menu-link">About Us</NavLink>
            <NavLink to="/women" data-test-id='menu-link-women' onClick={handleClickButtonLink} activeClassName="header__menu-link_active" className="header__menu-link">Women</NavLink>
            <NavLink to="/men" data-test-id='menu-link-men' onClick={handleClickButtonLink} activeClassName="header__menu-link_active" className="header__menu-link">Men</NavLink>
            <NavLink to="/beauty" data-test-id='menu-link-beauty' onClick={handleClickButtonLink} activeClassName="header__menu-link_active" className="header__menu-link">Beauty</NavLink>
            <NavLink to="/acccessories" data-test-id='menu-link-acccessories' onClick={handleClickButtonLink} activeClassName="header__menu-link_active" className="header__menu-link">Accessories</NavLink>
            <NavLink to="/blog" data-test-id='menu-link-blog' onClick={handleClickButtonLink} activeClassName="header__menu-link_active" className="header__menu-link">Blog</NavLink>
            <NavLink to="/contact" data-test-id='menu-link-contact' onClick={handleClickButtonLink} activeClassName="header__menu-link_active" className="header__menu-link">Contact</NavLink>
          </nav>

          <div className="header__logo-block">
            <Link to="/#" className="header__logo-link" data-test-id='header-logo-link'>
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
            <button type="button" onClick={handleClickButtonShoppingCart}
              className="header__nav-shop-link header__nav-shop-link-bag" data-test-id='cart-button'>
              <img src={iconShopingBag} className="header__nav-shop-icon" alt="Иконка сумки" />
              <p className={indexClassNames}>{cards.length}</p>
            </button>

            <button type="button" onClick={handleClickButtonBurger}
              className={buttonBurgerClassNames} data-test-id='burger-menu-btn'>
              <span className='header__button-line header__button-line_first'></span>
              <span className='header__button-line header__button-line_second'></span>
              <span className='header__button-line header__button-line_third'></span>
              <span className='header__button-line header__button-line_fourth'></span>
            </button>
          </div>

          <ShoppingCartPopup
            isStateButtonCart={isStateButtonCart}
            setIsStateButtonCart={setIsStateButtonCart}
            setIsActiveButtonCart={props.setIsActiveButtonCart}
          />
        </section>
      </div>
    </header>
  )
}

export default Header;