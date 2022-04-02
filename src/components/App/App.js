import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames'

import Header from '../Header/Header';
import Main from '../Main/Main';
import Product from '../Product/Product';
import Catergories from '../Catergories/Catergories';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';

import { URL_WOMEN } from '../../constants/constants';
import { URL_MEN } from '../../constants/constants';

import { PRODUCT_TYPE_WOMEN } from '../../constants/constants';
import { PRODUCT_TYPE_MEN } from '../../constants/constants';

import { PRODUCTS_WOMEN } from '../../constants/constants';
import { PRODUCTS_MEN } from '../../constants/constants';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [isActiveButtonMenu, setIsActiveButtonMenu] = useState(false);
  const [isActiveButtonCart, setIsActiveButtonCart] = useState(false);
  const [isActiveFormReview, setIsActiveFormReview] = useState(false);

  const cardsMen = useSelector(state => state.cards.itemsInCads.men)
  const cardsWomen = useSelector(state => state.cards.itemsInCads.women)
  const cards = useSelector(state => state.cards.itemsInCads)
  const { isLoading, isError } = useSelector((state) => state.cards);

  return (
    <div className={classNames('app', { 'app__fixed': isActiveButtonMenu }, { 'app__fixed app__muted': isActiveButtonCart || isActiveFormReview})} data-test-id='app'>
      <Header
        setIsActiveButtonMenu={setIsActiveButtonMenu}
        setIsActiveButtonCart={setIsActiveButtonCart}
        isActiveButtonCart={isActiveButtonCart}
      />
      <div className={classNames('app__error_none', { 'app__error': isError })}>
        <Error />
      </div>

      <div className={classNames('app__preloader_none', { 'app__preloader': isLoading })}>
        <Preloader />
      </div>

      <div className={classNames('app__loading_none', { 'app__loading': isLoading })}>
        <Switch>

          <Route exact path="/men">
            <Catergories
              key={PRODUCTS_MEN.id}
              name='Men'
              url={URL_MEN}
              products={cardsMen}
            />
          </Route>

          <Route exact path="/women">
            <Catergories
              key={PRODUCTS_WOMEN.id}
              name='Women'
              url={URL_WOMEN}
              products={cardsWomen}
            />
          </Route>

          <Route exact path={`/${URL_WOMEN}/:id`}>
            <Product
              productType={PRODUCT_TYPE_WOMEN}
              url={URL_WOMEN}
              setIsActiveFormReview={setIsActiveFormReview}
            />
          </Route>

          <Route exact path={`/${URL_MEN}/:id`}>
            <Product
              productType={PRODUCT_TYPE_MEN}
              url={URL_MEN}
              setIsActiveFormReview={setIsActiveFormReview}
            />
          </Route>

          <Route path="/">
            <Main
              products={cards}
              isActiveButtonCart={isActiveButtonCart}
            />
          </Route>

        </Switch>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
