import { useContext } from "react";
import styles from "./Products.module.css";
import { FiltersContext } from "../../context/filters/FiltersContext.js";
import { ProductCard } from "./ProductCard.jsx";

export function Products({ products, onAdd }) {
  const { filters } = useContext(FiltersContext);
  const hasProducts = products?.length > 0;

  if (!hasProducts) {
    return <p>No results were found related to: {filters.title}</p>;
  }

  return (
    <ul className={styles.products}>
      {products?.map((product) => (
        <li key={product.id} className={styles.product}>
          <ProductCard product={product}>
            <div>
              <button
                type="button"
                className={styles.btn}
                onClick={() => onAdd(product)}
              >
                Add to Cart
                <div className={styles["code-rain"]}></div>
              </button>
            </div>
          </ProductCard>
        </li>
      ))}
    </ul>
  );
}
