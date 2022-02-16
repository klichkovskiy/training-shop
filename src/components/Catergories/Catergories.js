import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';

function Catergories(props) {
  const [counterCard, setСounterCard] = useState(8);

  function handleChangeAddCard() {
    setСounterCard(counterCard + 4);
  }
  
  return (
    <section className="catergories" data-test-id={`products-page-${props.url}`}>
      <Breadcrumbs
        stepTwo={props.name}
      />
      <div className="catergories__title">
        <h2 className="catergories__name">{props.name}</h2>
      </div>
      <Filter />

      <div className="catergories__cards">
        {props.products.data.slice(0, counterCard).map((card) =>
          <Link to={`/${props.url}/${card.id}`} className="card-link" key={card.id}>
            <Card
              name={card.name}
              img={card.img}
              price={card.price}
            />
          </Link>
        )}
      </div>

      <button type="button" onClick={handleChangeAddCard} className="catergories__button">show more</button>
    </section>
  )
}

export default Catergories;