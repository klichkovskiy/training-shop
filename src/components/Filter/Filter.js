import iconFilter from '../../images/icon_filter.svg';
import iconButtonDown from '../../images/icon_button-down.svg';

function Filter() {
  return (
    <section className="filter">
      <button type="button" className="filter__button">
        <img src={iconFilter} alt="Иконка фильтра" className="filter__button-icon" />
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
    </section>
  )
}

export default Filter;