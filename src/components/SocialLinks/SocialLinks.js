import iconFacebook from '../../images/icon_facebook.svg';
import iconTwitter from '../../images/icon_twitter.svg';
import iconInstagram from '../../images/icon_instagram.svg';
import iconPinterest from '../../images/icon_pinterest.svg';

function SocialLinks() {
  return (
    <article className="social-links">
      <a className="social-links__link" href='http://surl.li/bhvry' target="_blank" rel="noopener noreferrer">
        <img src={iconFacebook} alt="Иконка Facebook" className="social-links__icon" />
      </a>
      <a className="social-links__link" href='http://surl.li/bhvrv' target="_blank" rel="noopener noreferrer">
        <img src={iconTwitter} alt="Иконка Twitter" className="social-links__icon" />
      </a>
      <a className="social-links__link" href='http://surl.li/bhvrx' target="_blank" rel="noopener noreferrer">
        <img src={iconInstagram} alt="Иконка Instagram" className="social-links__icon" />
      </a>
      <a className="social-links__link" href='http://surl.li/bhvrs' target="_blank" rel="noopener noreferrer">
        <img src={iconPinterest} alt="Иконка Pinterest" className="social-links__icon" />
      </a>
    </article>
  )
}

export default SocialLinks;