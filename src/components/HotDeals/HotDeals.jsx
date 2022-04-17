import { Link } from 'react-router-dom';

function HotDeals() {
  return (
    <section className="hot-deals">
      <article className=" hot-deals__block hot-deals__block-new-season">
        <Link to="/accessories" className="hot-deals__link">
          <h3 className="hot-deals__title">New Season</h3>
          <p className="hot-deals__subtitle">lookbook collection</p>
        </Link>
      </article>

      <article className="hot-deals__block hot-deals__block-sale">
        <Link to="/accessories" className="hot-deals__link">
          <h3 className="hot-deals__title">Sale</h3>
          <p className="hot-deals__subtitle">Get UP to <span className="hot-deals__subtitle_red">50% off</span></p>
        </Link>
      </article>
    </section>
  )
}

export default HotDeals;