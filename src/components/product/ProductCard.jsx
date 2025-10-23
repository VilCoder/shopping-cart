import styles from "./ProductCard.module.css";

import initialProducts from "../../mocks/products.json";

export function ProductCard() {
  const products = initialProducts;
  const hasProducts = products.length > 0;

  if (!hasProducts) {
    return <p>Products not found</p>;
  }

  const featuredProducts = [];

  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * 20);
    const product = products[index];
    featuredProducts.push(product);
  }

  return (
    <ul className={styles.products}>
      {featuredProducts?.map((product) => (
        <li key={product.id} className={styles.product}>
          <img src={product.image} alt={product.title} />
          <span>{product.title}</span>
          <span>${product.price}</span>
          <div>
            <button type="button" className={styles.btn}>
              Add to Cart
              <div className={styles["code-rain"]}></div>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
