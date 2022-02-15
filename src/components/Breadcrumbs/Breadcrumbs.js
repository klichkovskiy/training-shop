import { Link } from 'react-router-dom';

import iconShare from '../../images/icon_share.svg';

function Breadcrumbs(props) {
  return (
    <div className="breadcrumbs">
      <ul className={props.stepThree ? "breadcrumbs__list breadcrumbs__list_step-three" : "breadcrumbs__list"}>
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">Home</Link>
        </li>
        <p className={props.stepThree ? "breadcrumbs__pointer" : "breadcrumbs__pointer breadcrumbs__pointer_active"}>&#9658;</p>
        <li className="breadcrumbs__item">
          <Link to="/women" className={props.stepThree ? "breadcrumbs__link" : "breadcrumbs__link breadcrumbs__link_active"}>{props.stepTwo}</Link>
        </li>
        <p className={props.stepThree ? "breadcrumbs__pointer breadcrumbs__pointer_active" : "breadcrumbs__pointer_hide"}>&#9658;</p>
        <li className={props.stepThree ? "breadcrumbs__item" : "breadcrumbs__hide"}>
          <Link to="/women" className="breadcrumbs__link breadcrumbs__link_active">{props.stepThree}</Link>
        </li>
      </ul>
      <div className="breadcrumbs__block-share">
        <button type="button" className="breadcrumbs__share">
          <img src={iconShare} alt="Иконка машины" className="breadcrumbs__share-icon" />
          <p className="breadcrumbs__share-text">Share</p>
        </button>
      </div>
    </div>
  )
}

export default Breadcrumbs;