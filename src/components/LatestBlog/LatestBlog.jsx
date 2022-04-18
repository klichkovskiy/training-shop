import { Link } from 'react-router-dom';

import ArticlePromo from '../ArticlePromo/ArticlePromo';

import { ARTICLE_PROMO } from '../../constants/constants';

function LatestBlog() {
  return (
    <section className="latest-blog">
      <div className="latest-blog__block">
        <h3 className="latest-blog__title">LATEST FROM BLOG</h3>
        <Link to="/blog" className="latest-blog__link">SEE ALL</Link>
      </div>

      <div className="latest-blog__article-promo">
        {ARTICLE_PROMO.data.map((data) => (<ArticlePromo
          key={data.id}
          img={data.img}
          title={data.title}
          subtitle={data.subtitle}
          date={data.date}
        />))}
      </div>
    </section>
  )
}

export default LatestBlog;