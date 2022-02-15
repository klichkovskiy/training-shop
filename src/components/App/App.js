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


function App() {

  return (
    <div className="app" data-test-id='app'>
      <Header />

      <Switch>

        <Route exact path="/men">
          <Catergories
            key={PRODUCTS_MEN.id}
            name='Men'
            url={URL_MEN}
            products={PRODUCTS_MEN}
          />
        </Route>

        <Route exact path="/women">
          <Catergories
            key={PRODUCTS_WOMEN.id}
            name='Women'
            url={URL_WOMEN}
            products={PRODUCTS_WOMEN}
          />
        </Route>

        <Route path={`/${URL_WOMEN}/:id`}>
          <Product 
          productType={PRODUCT_TYPE_WOMEN}
          />
        </Route>

        <Route path={`/${URL_MEN}/:id`}>
          <Product 
          productType={PRODUCT_TYPE_MEN}
          />
        </Route>

        <Route exact path="/">
          <Main />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
