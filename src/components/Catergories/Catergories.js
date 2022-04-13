import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames'

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';

function Catergories(props) {
  const { isLoading } = useSelector((state) => state.cards);
  const [filteredСardsArr, setfilteredСardsArr] = useState(props.products);

  const cards = useSelector(state => state.cards.itemsInCards[props.url])
  useEffect(() => {
    setfilteredСardsArr(cards);
  }, [cards]);

  function handleCardsArr(cards) {
    setfilteredСardsArr(cards)
  }

  const [counterCard, setСounterCard] = useState(8);

  function handleChangeAddCard() {
    setСounterCard(counterCard + 4);
  }
  
  return (
    <section className={classNames('catergories_none', { 'catergories': !isLoading })} data-test-id={`products-page-${props.url}`}>
      <Breadcrumbs
        stepTwo={props.name}
        url={props.url}
      />
      <div className="catergories__title">
        <h2 className="catergories__name">{props.name}</h2>
      </div>
      <Filter
        url={props.url}
        products={cards}
        handleCardsArr={handleCardsArr}
        amountCards={filteredСardsArr.length}
      />

      <div className="catergories__cards">
        {filteredСardsArr.slice(0, counterCard).map((card) =>
          <Link to={`/${props.url}/${card.id}`} className="card-link" key={card.id}
            data-test-id={`clothes-card-${props.url}`}>
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