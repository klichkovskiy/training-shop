function Subscribe() {
  return (
    <section className="subscribe">
      <form className="subscribe__form">
        <fieldset className="subscribe__fieldset">
          <h3 className="subscribe__title">Special Offer</h3>
          <p className="subscribe__subtitle">Subscribe<br />And <span className="subscribe__subtitle subscribe__subtitle_red">Get 10% Off</span></p>
          <input type="text" placeholder="Enter your email" className="subscribe__input" required></input>
          <button type="submit" className="subscribe__button">Subscribe</button>
          <div className="subscribe__form-img-women"></div>
          <div className="subscribe__form-img-men"></div>
        </fieldset>
      </form>
    </section>
  )
}

export default Subscribe;