import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Product from '../Product/Product';
import Catergories from '../Catergories/Catergories';
import Footer from '../Footer/Footer';

import { URL_WOMEN } from '../../constants/constants';
import { URL_MEN } from '../../constants/constants';

import { PRODUCT_TYPE_WOMEN } from '../../constants/constants';
import { PRODUCT_TYPE_MEN } from '../../constants/constants';

import { PRODUCTS_WOMEN } from '../../constants/constants';
import { PRODUCTS_MEN } from '../../constants/constants';

import { PRODUCTS } from '../../constants/products';


function App() {
  const [card, setCard] = useState(null);
  function onClickCard(card) {
    setCard(card)
  }
  return (
    <div className="app" data-test-id='app'>
      <Header />

      <Switch>

        <Route exact path="/men">
          <Catergories
            key={PRODUCTS_MEN.id}
            name='Men'
            url={URL_MEN}
            products={PRODUCTS.men}
            onClickCard={onClickCard}
          />
        </Route>

        <Route exact path="/women">
          <Catergories
            key={PRODUCTS_WOMEN.id}
            name='Women'
            url={URL_WOMEN}
            products={PRODUCTS.women}
            onClickCard={onClickCard}
          />
        </Route>

        <Route exact path={`/${URL_WOMEN}/:id`}>
          <Product
            productType={PRODUCT_TYPE_WOMEN}
            url={URL_WOMEN}
            onClickCard={onClickCard}
          />
        </Route>

        <Route exact path={`/${URL_MEN}/:id`}>
          <Product
            productType={PRODUCT_TYPE_MEN}
            url={URL_MEN}
            onClickCard={onClickCard}
          />
        </Route>

        <Route path="/">
          <Main
            products={PRODUCTS}
          />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
