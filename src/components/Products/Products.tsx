import { useGetProductsQuery } from "../../API/products";
import Spinner from "../../UI/Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";
function Products() {
  const { data: products, isLoading, error } = useGetProductsQuery([]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className={styles.products}>
      <div className="conteiner">
        <div className={styles.row}>
          {products &&
            products
              .slice(0, 8)
              .map((el) => <ProductCard key={el.id} {...el} />)}
        </div>
      </div>
    </section>
  );
}

export default Products;
