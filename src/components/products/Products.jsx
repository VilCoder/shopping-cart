import { useContext } from "react";
import styles from "./Products.module.css";
import { FiltersContext } from "../../context/filters/FiltersContext.js";

export function ProductCard({ product, onClick }) {
  const { image, title, price } = product;

  return (
    title &&
    price ? (
      <>
        <span>{title}</span>
        <img src={image} alt={title ? title : "No image"} />
        <small>${price}</small>
        <div>
          <button
            type="button"
            className={styles.btn}
            onClick={() => onClick(product)}
          >
            Add to Cart
            <div className={styles["code-rain"]}></div>
          </button>
        </div>
      </>
    ) : (
      <p>Product not available</p>
    )
  );
}

export function Products({ products, onAdd }) {
  const { filters } = useContext(FiltersContext)
  const hasProducts = products?.length > 0;

  if (!hasProducts) {
    return <p>No results were found related to: {filters.title}</p>;
  }

  return (
    <ul className={styles.products}>
      {products?.map((product) => (
        <li key={product.id} className={styles.product}>
          <ProductCard product={product} onClick={onAdd} />
        </li>
      ))}
    </ul>
  );
}
