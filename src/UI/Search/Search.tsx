import styles from "./Search.module.css";
import searchImage from "../../images/filters/search.svg";
export default function Search() {
  return (
    <div className={styles.search}>
      <img src={searchImage} alt="search" />
      <input
        className={styles.input}
        type="text"
        placeholder="Поиск по каталогу товаров"
      />
    </div>
  );
}
