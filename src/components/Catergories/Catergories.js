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

  const [filteredСardsArr, setfilteredСardsArr] = useState(props.products);

  function handleCardsArr(cards) {
    setfilteredСardsArr(cards)
  }
  //console.log(filteredСardsArr);

  return (
    <section className="catergories" data-test-id={`products-page-${props.url}`}>
      <Breadcrumbs
        stepTwo={props.name}
        url={props.url}
      />
      <div className="catergories__title">
        <h2 className="catergories__name">{props.name}</h2>
      </div>
      <Filter
        url={props.url}
        products={props.products}
        handleCardsArr={handleCardsArr}
        amountCards={filteredСardsArr.length}
      />

      <div className="catergories__cards">
        {filteredСardsArr.slice(0, counterCard).map((card) =>
          <Link to={`/${props.url}/${card.id}`} className="card-link" key={card.id}>
            <Card
              card={card}
              name={card.name}
              img={card.images[0]}
              price={card.price}
              rating={card.rating}
              discount={card.discount}
            />
          </Link>
        )}
      </div>

      <button type="button" onClick={handleChangeAddCard} className="catergories__button">show more</button>
    </section>
  )
}

export default Catergories;