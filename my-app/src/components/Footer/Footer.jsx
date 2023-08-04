import "./styles.scss";
import telegram from "../../assets/telegram.svg";
import viber from "../../assets/viber.svg";
import whatsapp from "../../assets/whatsapp.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__block">
        <p className="footer__block-chapter fs-4">О компании</p>
        <ul className="footer__block-item">
          <li className="footer__block-link fs-3">Партнёрская программа</li>
          <li className="footer__block-link fs-3">Вакансии</li>
        </ul>
      </div>
      <div className="footer__block">
        <p className="footer__block-chapter fs-4">Меню</p>
        <ul className="footer__block-item fs-3">
          <li className="footer__block-link">Расчёт стоимостиа</li>
          <li className="footer__block-link">Услуги</li>
          <li className="footer__block-link">Виджеты</li>
          <li className="footer__block-link">Вакансии</li>
          <li className="footer__block-link">Интеграции</li>
          <li className="footer__block-link">Вакансии</li>
          <li className="footer__block-link">Наши клиенты</li>
          <li className="footer__block-link">Благодарность клиентов</li>
          <li className="footer__block-link">Кейсы </li>
          <li className="footer__block-link">Сертификаты</li>
          <li className="footer__block-link">Блог на Youtube </li>
          <li className="footer__block-link">Вопрос / Ответ</li>
        </ul>
      </div>
      <div className="footer__block">
        <p className="footer__block-chapter fs-4">Контакты</p>
        <p className="footer__block-phone fs-3">+7 555 555-55-55</p>
        <div className="footer__block-img">
          <img className="footer__element-img" src={telegram} />
          <img className="footer__element-img" src={viber} />
          <img className="footer__element-img" src={whatsapp} />
        </div>
        <p className="footer__block-location ">
          Москва, Путевой проезд 3с1, к 902
        </p>
        <p className="footer__block-copyright fs-4">
          ©WELBEX 2022. Все права защищены.
        </p>
        <p className="footer__block-copyright fs-4"> Политика конфиденциальности</p>
      </div>
    </div>
  );
}

export default Footer;
