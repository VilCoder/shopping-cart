import styles from "./ProductCard.module.css";

import initialProducts from "../../mocks/products.json";

export function ProductCard({ onClick }) {
  const products = initialProducts;
  const hasProducts = products.length > 0;

  if (!hasProducts) {
    return <p>Products not found</p>;
  }

  const featuredProducts = products.filter(product => product.destacated);

  return (
    <ul className={styles.products}>
      {featuredProducts?.map((product) => (
        <li key={product.id} className={styles.product}>
          <img src={product.image} alt={product.title} />
          <span>{product.title}</span>
          <span>${product.price}</span>
          <div>
            <button type="button" className={styles.btn} onClick={() => onClick(product)}>
              Add to Cart
              <div className={styles["code-rain"]}></div>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
