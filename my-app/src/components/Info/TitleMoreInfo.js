//import logo from "./logo.svg";
// import "../components/Info/styles.css";
import "./styles.css";

function TitleMoreInfo() {
  return (
    <div className="container__info">
      <p className="container__info-text">
        Вместе с
        <span className="container__info-textt">бесплатной консультацией</span>
        мыдарим:
      </p>
      <ul className="container__info-list">
        <li className="container__info-link">
          <p className="container__info-title">Виджеты</p>
          <p className="container__info-subtext">30 готовых решений</p>
        </li>
        <li className="container__info-link">
          <p className="container__info-title">Dashboard</p>
          <p className="container__info-subtext">
            с показателями вашего бизнеса
          </p>
        </li>
        <li className="container__info-link">
          <p className="container__info-title">Skype Аудит</p>
          <p className="container__info-subtext">отдела продаж CRM системы</p>
        </li>
        <li className="container__info-link">
          <p className="container__info-title">35 дней</p>
          <p className="container__info-subtext">использования CRM</p>
        </li>
      </ul>
      <button className="container__info-btn">Получить консультацию</button>
    </div>
  );
}

export default TitleMoreInfo;
