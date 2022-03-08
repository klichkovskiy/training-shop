import React, { useState } from 'react';
import classNames from 'classnames'

import iconFilter from '../../images/icon_filter.svg';
import iconClose from '../../images/icon_close.svg';
import iconButtonDown from '../../images/icon_button-down.svg';

function Filter(props) {
  const minPrice = '0 - 100';
  const minMiddlePrice = '100 - 150';
  const maxMiddlePrice = '150 - 250';
  const maxPrice = '250 - 500';
  const [isStateButtonFilter, setIsStateButtonFilter] = useState(false);

  function handleClickButtonFilter() {
    setIsStateButtonFilter(!isStateButtonFilter)
    if (isStateButtonFilter === true) {
      checkbox.forEach(function (el) {
        el.checked = false;
      });
      props.handleCardsArr(CardsArr)
      return setIsFilteredValue([])
    }
  }

  let filterClassNames = classNames('filter__button-icon', { 'filter__button-icon_hiden': isStateButtonFilter });
  let filterClassNamesClose = classNames('filter__button-icon', { 'filter__button-icon_hiden': !isStateButtonFilter });
  let filterFormClassNames = classNames('filter__form-block', { 'filter__form-block_hiden': !isStateButtonFilter });

  const colorsArr = props.products.map((card) => {
    return card.images.map((images) => {
      return images.color
    })
  })

  const sizesArr = props.products.map((card) => {
    return card.sizes
  })

  const brandsArr = props.products.map((card) => {
    return card.brand
  })

  //Функция поиска уникального элемента (передаем массив с данными)
  function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  }

  const colors = unique(colorsArr.join().split(','));
  const sizes = unique(sizesArr.join().split(',').sort());
  const brands = unique(brandsArr.join().split(',').sort());


  //Фильтрация
  const checkbox = document.querySelectorAll('.filter__fieldset-input');
  const CardsArr = props.products
  const [isFilteredValue, setIsFilteredValue] = useState([]);

  function checkedFilteredValue() {
    let result = [];
    for (let i = 0; i < checkbox.length; i = i + 1) {
      let resultUnique = [];
      if (checkbox[i].checked) {
        resultUnique.push(`${checkbox[i].name}: ${checkbox[i].value}`)
        result.push(resultUnique[0])
      }
    }

    setIsFilteredValue(result.join().split(','));

    function isFilteredCards(data) {
      let attributesArr = result.map((res) => {
        const attributes = res.split(': ')
        return attributes
      })
      let filteredArr = [];
      
      for (let i = 0; i < attributesArr.length; i = i + 1) {
        if (data.brand === attributesArr[i][1]) {
          return filteredArr.push(data)
        }
        if (data.sizes.includes(attributesArr[i][1])) {
          return filteredArr.push(data)
        }
        if (data.images.map( (image) => image.color.includes(attributesArr[i][1]) ).includes(true)) {
          return filteredArr.push(data)
        }
        if (attributesArr[i][1].split(' - ')[0] < data.price && data.price < attributesArr[i][1].split(' - ')[1]) {
          return filteredArr.push(data)
        }
      }

    }

    return props.handleCardsArr(CardsArr.filter((card) => isFilteredCards(card)))
  }
  let filterInfoTextClassNames = classNames('filter__check-info-text', { 'filter__form-block_hiden': !isFilteredValue.length });

  return (
    <section className="filter">
      <div className="filter__buttons-block">
        <button type="button" onClick={handleClickButtonFilter} className="filter__button" data-test-id='filter-button'>
          <img src={iconFilter} alt="Иконка фильтра" className={filterClassNames} />
          <img src={iconClose} alt="Иконка закрытия" className={filterClassNamesClose} />
          <p className="filter__button-text">Filter</p>
        </button>

        <div className="filter__button-display">
          <div className="filter__button-display-block">
            <button type="button" className="filter__button-display-list"></button>
          </div>
          <div className="filter__button-display-block">
            <button type="button" className="filter__button-display-window"></button>
          </div>
        </div>

        <button type="button" className="filter__button">
          <p className="filter__button-text">BESTSELLERS</p>
          <img src={iconButtonDown} alt="Иконка стрелки вниз" className="filter__button-icon" />
        </button>
      </div>

      <div className={filterFormClassNames}>
        <form className="filter__form" data-test-id={`filters-${props.url}`}>
          <fieldset className="filter__fieldset">
            <h3 className="filter__fieldset-attribute">Color</h3>
            <div className="filter__fieldset-values" data-test-id='filters-color'>
              {colors.map((value) =>
                <div className="filter__fieldset-value" key={value}>
                  <label className="filter__fieldset-label" htmlFor={`checkbox-${value}`} data-test-id={`filter-color-${value}`}>
                    <input type="checkbox" name='Color' value={value} id={`checkbox-${value}`}
                      className="filter__fieldset-input" onClick={checkedFilteredValue}></input>
                    <span className="filter__fieldset-pseudo-input" style={{ backgroundColor: `${value}` }}></span>
                    <span className="filter__fieldset-text">{value}</span>
                  </label>
                </div>
              )}
            </div>
          </fieldset>

          <fieldset className="filter__fieldset">
            <h3 className="filter__fieldset-attribute">Size</h3>
            <div className="filter__fieldset-values" data-test-id='filters-size'>
              {sizes.map((value) =>
                <div className="filter__fieldset-value" key={value}>
                  <label className="filter__fieldset-label" htmlFor={`checkbox-${value}`} data-test-id={`filter-size-${value}`}>
                    <input type="checkbox" name='Size' value={value} id={`checkbox-${value}`}
                      className="filter__fieldset-input" onClick={checkedFilteredValue}></input>
                    <span className="filter__fieldset-pseudo-input"></span>
                    <span className="filter__fieldset-text">{value}</span>
                  </label>
                </div>
              )}
            </div>
          </fieldset>

          <fieldset className="filter__fieldset">
            <h3 className="filter__fieldset-attribute">Brand</h3>
            <div className="filter__fieldset-values" data-test-id='filters-brand'>
              {brands.map((value) =>
                <div className="filter__fieldset-value" key={value}>
                  <label className="filter__fieldset-label" htmlFor={`checkbox-${value}`} data-test-id={`filter-brand-${value}`}>
                    <input type="checkbox" name='Brand' value={value} id={`checkbox-${value}`}
                      className="filter__fieldset-input" onClick={checkedFilteredValue}></input>
                    <span className="filter__fieldset-pseudo-input"></span>
                    <span className="filter__fieldset-text">{value}</span>
                  </label>
                </div>
              )}
            </div>
          </fieldset>

          <fieldset className="filter__fieldset">
            <h3 className="filter__fieldset-attribute">Price</h3>
            <div className="filter__fieldset-values">

                <div className="filter__fieldset-value">
                  <label className="filter__fieldset-label" htmlFor={`checkbox-${minPrice}`}>
                    <input type="checkbox" name='Price' value={minPrice} id={`checkbox-${minPrice}`}
                      className="filter__fieldset-input" onClick={checkedFilteredValue}></input>
                    <span className="filter__fieldset-pseudo-input"></span>
                    <span className="filter__fieldset-text">{minPrice}</span>
                  </label>
                </div>

                <div className="filter__fieldset-value">
                  <label className="filter__fieldset-label" htmlFor={`checkbox-${minMiddlePrice}`}>
                    <input type="checkbox" name='Price' value={minMiddlePrice} id={`checkbox-${minMiddlePrice}`}
                      className="filter__fieldset-input" onClick={checkedFilteredValue}></input>
                    <span className="filter__fieldset-pseudo-input"></span>
                    <span className="filter__fieldset-text">{minMiddlePrice}</span>
                  </label>
                </div>

                <div className="filter__fieldset-value">
                  <label className="filter__fieldset-label" htmlFor={`checkbox-${maxMiddlePrice}`}>
                    <input type="checkbox" name='Price' value={maxMiddlePrice} id={`checkbox-${maxMiddlePrice}`}
                      className="filter__fieldset-input" onClick={checkedFilteredValue}></input>
                    <span className="filter__fieldset-pseudo-input"></span>
                    <span className="filter__fieldset-text">{maxMiddlePrice}</span>
                  </label>
                </div>

                <div className="filter__fieldset-value">
                  <label className="filter__fieldset-label" htmlFor={`checkbox-${maxPrice}`}>
                    <input type="checkbox" name='Price' value={maxPrice} id={`checkbox-${maxPrice}`}
                      className="filter__fieldset-input" onClick={checkedFilteredValue}></input>
                    <span className="filter__fieldset-pseudo-input"></span>
                    <span className="filter__fieldset-text">{maxPrice}</span>
                  </label>
                </div>

            </div>
          </fieldset>
        </form>
      </div>

      <div className="filter__check-info">
        <p className={filterInfoTextClassNames}><span className="filter__check-info-number">{props.amountCards}</span> items Found</p>
        {isFilteredValue.map((value, i) =>
          <p className="filter__check-info-value" key={i}>{value}</p>
        )}
      </div>
    </section>
  )
}

export default Filter;