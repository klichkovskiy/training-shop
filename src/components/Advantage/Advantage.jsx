import iconCar from '../../images/icon_car.svg';
import iconReturn from '../../images/icon_return.svg';
import iconSupport from '../../images/icon_support.svg';

function Advantage() {
  return (
    <section className="advantage">
      <div className="advantage__block">
        <img src={iconCar} alt="Иконка машины" className="advantage__icon" />
        <h3 className="advantage__title">Free shiping</h3>
        <p className="advantage__subtitle">On all UA order or order above $100</p>
      </div>

      <div className="advantage__block">
        <img src={iconReturn} alt="Иконка обновления" className="advantage__icon" />
        <h3 className="advantage__title">30 days return</h3>
        <p className="advantage__subtitle">Simply return it within 30 days for an exchange</p>
      </div>

      <div className="advantage__block">
        <img src={iconSupport} alt="Иконка сапорт" className="advantage__icon" />
        <h3 className="advantage__title">Support 24/7</h3>
        <p className="advantage__subtitle">Contact us 24 hours a day, 7 days a week</p>
      </div>
    </section>
  )
}

export default Advantage;