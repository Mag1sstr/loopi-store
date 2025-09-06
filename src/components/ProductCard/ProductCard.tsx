import { IProducts } from "../../interfaces";
import styles from "./ProductCard.module.css";
import likeImage from "../../images/filters/like.svg";
import plusCart from "../../images/productCard/plus-cart.svg";

export default function ProductCard({
  id,
  title,
  description,
  images,
  price,
}: IProducts) {
  return (
    <div className={styles.card}>
      <div className={styles.end}>
        <img className={styles.like} src={likeImage} alt="" />
      </div>
      <p className={styles.title}>{title}</p>

      <img className={styles.img} src={images[0]} alt="" />
      <div className={styles.info}>
        <div className={styles.available}>
          <div className={styles.green}></div>
          <p>Есть в наличии</p>
        </div>
        <p>Гарантия 1 год</p>
      </div>
      <div className={styles.end}>
        <p className={styles.price}>{price} $</p>
      </div>
      <button className={styles.btn}>
        <img src={plusCart} alt="" />в корзину
      </button>
    </div>
  );
}
