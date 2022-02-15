import { Link } from 'react-router-dom';

import Card from '../Card/Card';

function Clothes(props) {
  return (
    <section className="сlothes" data-test-id={`clothes-${props.url}`}>
      <div className="сlothes__header">
        <h2 className="сlothes__title">{props.title}</h2>
        <nav className="сlothes__nav">
          <button type="button" className="сlothes__button сlothes__button_active">NEW ARRIVALS</button>
          <button type="button" className="сlothes__button">SPECIALS</button>
          <button type="button" className="сlothes__button">BESTSELLERS</button>
          <button type="button" className="сlothes__button">MOST VIEWED</button>
          <button type="button" className="сlothes__button">FEATURED PRODUCTS</button>
        </nav>
      </div>

      <div className="template-cards">
        {props.products.data.map((card) =>
          <Link to={`/${props.url}/${card.id}`} className="card-link" key={card.id} data-test-id={`clothes-card-${props.url}`}>
            <Card
              name={card.name}
              img={card.img}
              price={card.price}
            />
          </Link>
        )}
      </div>
      <button type="button" className="сlothes__button-all">See All</button>
    </section>
  )
}

export default Clothes;