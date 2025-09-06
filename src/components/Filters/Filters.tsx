import DropdownButton from "../../UI/DropdownButton/DropdownButton";
import Search from "../../UI/Search/Search";
import styles from "./Filters.module.css";
import likeImage from "../../images/filters/like.svg";
import { useState } from "react";
import CartButton from "../../UI/CartButton/CartButton";
import Cart from "../Cart/Cart";

export default function Filters() {
  const [openCart, setOpenCard] = useState(false);
  return (
    <section className={styles.filters}>
      <Cart open={openCart} setOpen={setOpenCard} />
      <div className="conteiner">
        <div className={styles.row}>
          <DropdownButton />
          <Search />
          <img className={styles.like} src={likeImage} alt="" />
          <CartButton onClick={() => setOpenCard(true)} />
        </div>
      </div>
    </section>
  );
}
