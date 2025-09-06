import styles from "./Menu.module.css";
import logo from "../../images/menu/logo.svg";
import fireImage from "../../images/menu/fire.svg";
import callImage from "../../images/menu/call.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const tabs = [
  "Гарантия",
  "Политика возврата",
  "Кредит",
  "Доставка и оплата",
  "Контакты",
];

export default function Menu() {
  const [selected, setSelected] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section className={styles.menu}>
      <div className="conteiner">
        <div className={styles.row}>
          <img onClick={() => navigate("/")} src={logo} alt="" />
          <nav>
            <ul className={styles.items}>
              <li className={styles.item}>Весь каталог</li>
              <li className={styles.promotion}>
                <img src={fireImage} alt="" /> Акции
              </li>
              {tabs.map((tab, i) => (
                <li
                  key={tab}
                  onClick={() => setSelected(i)}
                  className={`${styles.tab} ${selected === i && styles.active}`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.phone}>
            <img src={callImage} alt="call" /> +7 777 777 77 77
          </div>
        </div>
      </div>
    </section>
  );
}
