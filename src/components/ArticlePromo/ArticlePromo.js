import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ArticlePromo(props) {
  const [isArticleClassDate, setIsArticleClassDate] = useState('article-promo__date');
  const [isArticleClassLink, setIsArticleClassLink] = useState('article-promo__link');
  function mouseOverArticle() {
    setIsArticleClassDate('article-promo__date article-promo__date_active')
    setIsArticleClassLink('article-promo__link article-promo__link_active')
  }

  function mouseOutArticle() {
    setIsArticleClassDate('article-promo__date')
    setIsArticleClassLink('article-promo__link')
  }

  return (
    <article onMouseOver={mouseOverArticle} onMouseOut={mouseOutArticle} className="article-promo">
      <img src={props.img} alt="Иконка" className="article-promo__img" />

      <div className="article-promo__block">
        <h3 className="article-promo__title">{props.title}</h3>
        <p className="article-promo__subtitle">{props.subtitle}</p>
        <p className={isArticleClassDate}>{props.date}</p>
        <Link to="/blog" className={isArticleClassLink}>Read More</Link>
      </div>
    </article>
  )
}

export default ArticlePromo;