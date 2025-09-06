import styles from "./Cart.module.css";
import boxImg from "../../images/cart/box.png";

interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
}

export default function Cart({ open, setOpen }: IProps) {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`${styles.wrapper} ${open && styles.open}`}
    >
      <div className={styles.modal}>
        <div className={styles.box}>
          <img src={boxImg} alt="" />
        </div>
        <p className={styles.none}>В корзине пока ничего нет</p>
        <p className={styles.text}>Но вы можете легко это исправить</p>
        <button></button>
      </div>
    </div>
  );
}
