import Banner from '../Banner/Banner';
import Advantage from '../Advantage/Advantage';
import Clothes from '../Clothes/Clothes';
import HotDeals from '../HotDeals/HotDeals';
import Subscribe from '../Subscribe/Subscribe';
import LatestBlog from '../LatestBlog/LatestBlog';

import { PRODUCTS_WOMEN } from '../../constants/constants';
import { PRODUCTS_MEN } from '../../constants/constants';
import { URL_WOMEN } from '../../constants/constants';
import { URL_MEN } from '../../constants/constants';

function Main() {
  return (
    <section className="main">
      <hr className="main__line" />
      <Banner />
      <Advantage />
      <hr className="main__line" />
      <Clothes
        title='WOMEN&#10076;S'
        products={PRODUCTS_WOMEN}
        url={URL_WOMEN}
      />
      <Clothes
        title='MEN&#10076;S'
        products={PRODUCTS_MEN}
        url={URL_MEN}
      />
      <HotDeals />
      <Subscribe />
      <LatestBlog />
    </section>
  )
}

export default Main;