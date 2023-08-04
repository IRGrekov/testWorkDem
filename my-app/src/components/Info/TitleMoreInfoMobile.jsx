import "./styles.scss";

function TitleMoreInfoMobile() {
  return (
    <div className="container__info">
      <p className="container__info-text">
        Вместе с{" "}
        <span className="container__info-higtText">
          бесплатной консультацией
        </span>{" "}
        мы дарим:
      </p>
      <ul className="container__info-moList">
        <li className="container__info-moLink">Skype аудит</li>
        <li className="container__info-moLink">Dashboard</li>
        <li className="container__info-moLink">30 виджетов</li>
        <li className="container__info-moLink">Месяц аmoCRM</li>
      </ul>
    </div>
  );
}

export default TitleMoreInfoMobile;
