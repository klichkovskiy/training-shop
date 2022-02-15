import { Link } from 'react-router-dom';

import Card from '../Card/Card';

import { PRODUCTS_MEN } from '../../constants/constants';

function ClothesMen(props) {
  return (
    <section className="clothes-men">
      <div className="clothes-men__header">
        <h2 className="clothes-men__title">MEN&#10076;S</h2>
        <nav className="clothes-men__nav">
          <button type="button" className="clothes-men__button clothes-men__button_active">NEW ARRIVALS</button>
          <button type="button" className="clothes-men__button">SPECIALS</button>
          <button type="button" className="clothes-men__button">BESTSELLERS</button>
          <button type="button" className="clothes-men__button">MOST VIEWED</button>
          <button type="button" className="clothes-men__button">FEATURED PRODUCTS</button>
        </nav>
      </div>

      <div className="template-cards">
        {PRODUCTS_MEN.data.map((card) =>
          <Link to={`/men/${card.id}`} className="card-link" key={card.id}>
            <Card
              name={card.name}
              img={card.img}
              price={card.price}
              
            />
          </Link>
        )}
      </div>
      <button type="button" className="clothes-men__button-all">See All</button>
    </section>
  )
}

export default ClothesMen;