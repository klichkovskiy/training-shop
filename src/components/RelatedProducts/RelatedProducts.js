import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../Card/Card';

import { PRODUCTS_WOMEN } from '../../constants/constants';

function RelatedProducts() {
  const [counterCard, setСounterCard] = useState(4);
  const [startCard, setStartCard] = useState(0);

  function handleChangeCardRight() {
    setСounterCard(counterCard + 4);
    setStartCard(startCard + 4);
  }

  function handleChangeCardLeft() {
    setСounterCard(counterCard - 4);
    setStartCard(startCard - 4);
  }

  return (
    <section className="related-products">
      <h3 className="related-products__title">RELATED PRODUCTS</h3>
      <div className="related-products__switch">
        <button type="button" onClick={handleChangeCardLeft} className="related-products__button related-products__button-left"></button>
        <button type="button" onClick={handleChangeCardRight} className="related-products__button related-products__button-right"></button>
      </div>

      <div className="related-products-cards">
        {PRODUCTS_WOMEN.data.slice(startCard, counterCard).map((card) =>
          <Link to={`/women/${card.id}`} className="card-link" key={card.id}>
            <Card
              name={card.name}
              img={card.img}
              price={card.price}
            />
          </Link>
        )}
      </div>
    </section>
  )
}

export default RelatedProducts;