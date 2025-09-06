import styles from "./Header.module.css";
import arrowImage from "../../images/header/arrow-down.svg";
import whatsApp from "../../images/header/whatsapp.svg";
import telega from "../../images/header/telega.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="conteiner">
        <div className={styles.row}>
          <div className={styles.city}>
            Ваш город:
            <span className={styles.text}>
              Москва
              <img src={arrowImage} alt="" />
            </span>
          </div>
          <ul className={styles.social}>
            <li>
              <img src={whatsApp} alt="whatsapp" />
            </li>
            <li>
              <img src={telega} alt="telegram" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
