import "./styles.scss";

function TitleMoreInfo() {
  return (
    <div className="container__info">
      <p className="container__info-text">
        Вместе с
        <span className="container__info-higtText">
          {" "}
          бесплатной консультацией{" "}
        </span>
        мы дарим:
      </p>
      <ul className="container__info-list">
        <li className="container__info-link">
          <p className="container__info-title fs-2">Виджеты</p>
          <p className="container__info-subtext ">30 готовых решений</p>
        </li>
        <li className="container__info-link">
          <p className="container__info-title fs-2">Dashboard</p>
          <p className="container__info-subtext">
            с показателями вашего бизнеса
          </p>
        </li>
        <li className="container__info-link">
          <p className="container__info-title fs-2">Skype Аудит</p>
          <p className="container__info-subtext">отдела продаж и CRM системы</p>
        </li>
        <li className="container__info-link">
          <p className="container__info-title fs-2">35 дней</p>
          <p className="container__info-subtext">использования CRM</p>
        </li>
      </ul>
      <button className="container__info-btn">Получить консультацию</button>
    </div>
  );
}

export default TitleMoreInfo;
