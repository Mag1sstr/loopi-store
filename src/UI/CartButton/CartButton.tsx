import styles from "./CartButton.module.css";
import cartImage from "../../images/filters/cart.svg";
import { MouseEventHandler } from "react";

interface IProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export default function CartButton({ onClick }: IProps) {
  return (
    <button onClick={onClick} className={styles.cart}>
      <img src={cartImage} alt="cart" />в корзине
      <span className={styles.amount}>0</span>
    </button>
  );
}
