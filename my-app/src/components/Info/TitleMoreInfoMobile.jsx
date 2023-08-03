//import logo from "./logo.svg";
import "./styles.scss";

function TitleMoreInfoMobile() {
  return (
    <div className="container__info">
      <p className="container__info-text">
        Вместе с{" "}
        <span className="container__info-HigtText">
          бесплатной консультацией
        </span>{" "}
        мы дарим:
      </p>
      <ul className="container__info-list">
        <li className="container__info-link">Skype аудит</li>
        <li className="container__info-link">Dashboard</li>
        <li className="container__info-link">30 виджетов</li>
        <li className="container__info-link">Месяц аmoCRM</li>
      </ul>
    </div>
  );
}

export default TitleMoreInfoMobile;
