import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'

import Card from '../Card/Card';

import { CLOTHES_BLOCK_MENU } from '../../constants/constants';

function Clothes(props) {
  const [isStateParticulars, setIsStateParticulars] = useState('isNewArrivals');

  function isFilterData(data, particularsType) {
    if (data.particulars[particularsType.isStateParticulars] === true) {
      return data
    }
  }

  function isActiveButtonMenu(particularName, stateParticulars) {
    if (particularName === stateParticulars) {
      return true
    }
  }
  
  return (
    <section className="сlothes" data-test-id={`clothes-${props.url}`}>
      <div className="сlothes__header">
        <h2 className="сlothes__title">{props.title}</h2>
        <nav className="сlothes__nav">
          {CLOTHES_BLOCK_MENU.map((button) =>
            <button type="button" onClick={() => setIsStateParticulars(button.particularName)}
              className={classNames('сlothes__button', { 'сlothes__button_active': isActiveButtonMenu(button.particularName, isStateParticulars) })}
              key={button.id} data-test-id={`clothes-${props.url}-${button.particularName}`}>{button.name}</button>
          )}

        </nav>
      </div>

      <div className="template-cards">
        {props.products.filter((card) => isFilterData(card, { isStateParticulars })).map((card) =>
          <Link to={`/${props.url}/${card.id}`} className="card-link"
            key={card.id} data-test-id={`clothes-card-${props.url}`}>
            <Card
              card={card}
              name={card.name}
              img={card.images[0]}
              price={card.price}
              rating={card.rating}
              discount={card.discount}
            />
          </Link>
        )
        }
      </div>
      <Link to={`/${props.url}`} className="сlothes__button-all">See All</Link>
    </section>
  )
}

export default Clothes;