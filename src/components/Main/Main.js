import Banner from '../Banner/Banner';
import Advantage from '../Advantage/Advantage';
import Clothes from '../Clothes/Clothes';
import HotDeals from '../HotDeals/HotDeals';
import Subscribe from '../Subscribe/Subscribe';
import LatestBlog from '../LatestBlog/LatestBlog';

import { URL_WOMEN } from '../../constants/constants';
import { URL_MEN } from '../../constants/constants';
import { useSelector } from 'react-redux';

function Main(props) {
  const { isSuccessData } = useSelector((state) => state.cards);

  return (
    <section className="main">
      <hr className="main__line" />
      <Banner />

      <Advantage />
      <hr className="main__line" />
      {isSuccessData &&
        <Clothes
          title='WOMEN&#10076;S'
          products={props.products.women}
          url={URL_WOMEN}
        />
      }

      {isSuccessData &&
      <Clothes
      title='MEN&#10076;S'
      products={props.products.men}
      url={URL_MEN}
    />
      }

      
      <HotDeals />
      <Subscribe />
      <LatestBlog />
    </section>
  )
}

export default Main;