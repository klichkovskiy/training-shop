import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames'

import Header from '../Header/Header';
import Main from '../Main/Main';
import Product from '../Product/Product';
import Catergories from '../Catergories/Catergories';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';

import { URL_WOMEN, URL_MEN, PRODUCT_TYPE_WOMEN, PRODUCT_TYPE_MEN } from '../../constants/constants';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [isActiveButtonMenu, setIsActiveButtonMenu] = useState(false);
  const [isActiveButtonCart, setIsActiveButtonCart] = useState(false);
  const [isActiveFormReview, setIsActiveFormReview] = useState(false);

  const { isLoading, isError, itemsInCards } = useSelector((state) => state.cards);

  return (
    <div className={classNames('app', { 'app__fixed': isActiveButtonMenu }, { 'app__fixed app__muted': isActiveButtonCart || isActiveFormReview })} data-test-id='app'>
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
              name='Men'
              url={URL_MEN}
              products={itemsInCards.men}
            />
          </Route>

          <Route exact path="/women">
            <Catergories
              name='Women'
              url={URL_WOMEN}
              products={itemsInCards.women}
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
              products={itemsInCards}
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
