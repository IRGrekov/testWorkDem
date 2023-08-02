//import logo from "./logo.svg";
//import "./App.css";
import telegram from "../../assets/telegram.svg";
import viber from "../../assets/viber.svg";
import whatsapp from "../../assets/whatsapp.svg";
import logo_welbex from "../../assets/logo_welbex.png";
import "./styles.css";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img className="header__logo-img" src={logo_welbex} />
        <p className="header__logo_text">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
      <ul className="header__item">
        <li className="header__link">Услуги</li>
        <li className="header__link">Виджеты</li>
        <li className="header__link">Интеграции</li>
        <li className="header__link">Кейсы</li>
        <li className="header__link">Сертификаты</li>
      </ul>
      <div className="header__contacts">
        <p className="header__phone">+7 555 555-55-55</p>
        <img className="header__img" src={telegram} />
        <img className="header__img" src={viber} />
        <img className="header__img" src={whatsapp} />
      </div>
    </div>
  );
}

export default Header;
