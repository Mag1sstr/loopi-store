import styles from "./Advantages.module.css";
import cardImg1 from "../../images/advantages/01.png";
import cardImg2 from "../../images/advantages/02.png";
import cardImg3 from "../../images/advantages/03.png";
import cardImg4 from "../../images/advantages/04.png";
import cardImg5 from "../../images/advantages/05.png";

function Advantages() {
  return (
    <section className={styles.wrapper}>
      <div className="conteiner">
        <h2 className={styles.title}>Наши преимущества</h2>
        <div className={styles.row}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={cardImg1} alt="icon" />
            </div>
            <h3>Акции и подарки</h3>
            <p>
              Постоянные акции, бонусы и скидки. Покупайте технику Apple по
              самым выгодным ценам
            </p>
            <button>подробнее</button>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={cardImg2} alt="icon" />
            </div>
            <h3>Акции и подарки</h3>
            <p>
              Постоянные акции, бонусы и скидки. Покупайте технику Apple по
              самым выгодным ценам
            </p>
            <button>подробнее</button>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={cardImg3} alt="icon" />
            </div>
            <h3>Акции и подарки</h3>
            <p>
              Постоянные акции, бонусы и скидки. Покупайте технику Apple по
              самым выгодным ценам
            </p>
            <button>подробнее</button>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={cardImg4} alt="icon" />
            </div>
            <h3>Акции и подарки</h3>
            <p>
              Постоянные акции, бонусы и скидки. Покупайте технику Apple по
              самым выгодным ценам
            </p>
            <button>подробнее</button>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={cardImg5} alt="icon" />
            </div>
            <h3>Акции и подарки</h3>
            <p>
              Постоянные акции, бонусы и скидки. Покупайте технику Apple по
              самым выгодным ценам
            </p>
            <button>подробнее</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
