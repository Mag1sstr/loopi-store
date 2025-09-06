import styles from "./DropdownButton.module.css";
import dotsImage from "../../images/filters/dots.svg";
import { useState } from "react";
import { useAppSelector } from "../../store/store";
// import { getCategories } from "../../store/categoriesSlice";

export default function DropdownButton() {
  const { categories } = useAppSelector((state) => state.categories);

  const [drop, setDrop] = useState(false);

  console.log(categories);

  return (
    <div
      onClick={() => setDrop(!drop)}
      className={`${styles.btn} ${drop && styles.drop}`}
    >
      <div className={styles.main}>
        <img src={dotsImage} alt="" />
        Каталог товаров
      </div>
      <div className={styles.btn__items}>
        {categories.map(({ name }) => (
          <div className={styles.item}>{name}</div>
        ))}
        {/* <div className={styles.item}>Планшеты</div>
        <div className={styles.item}>Компьютеры</div>
        <div className={styles.item}>Аксессуары</div> */}
      </div>
    </div>
  );
}
