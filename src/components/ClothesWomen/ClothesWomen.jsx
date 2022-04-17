import { Link } from 'react-router-dom';

import Card from '../Card/Card';

import { PRODUCTS_WOMEN } from '../../constants/constants';

function ClothesWomen() {
  
  return (
    <section className="clothes-women">
      <div className="clothes-women__header">
        <h2 className="clothes-women__title">WOMEN&#10076;S</h2>
        <nav className="clothes-women__nav">
          <button type="button" className="clothes-women__button clothes-women__button_active">NEW ARRIVALS</button>
          <button type="button" className="clothes-women__button">SPECIALS</button>
          <button type="button" className="clothes-women__button">BESTSELLERS</button>
          <button type="button" className="clothes-women__button">MOST VIEWED</button>
          <button type="button" className="clothes-women__button">FEATURED PRODUCTS</button>
        </nav>
      </div>

      <div className="template-cards">
        {PRODUCTS_WOMEN.data.map((card) =>
          <Link to={`/women/${card.id}`} className="card-link">
            <Card
              key={card.id}
              name={card.name}
              img={card.img}
              price={card.price}
            />
          </Link>
        )}
      </div>
      <button type="button" className="clothes-women__button-all">See All</button>
    </section>
  )
}

export default ClothesWomen;