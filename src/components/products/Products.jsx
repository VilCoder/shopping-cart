import styles from "./Products.module.css";
import { ProductCard } from "./ProductCard.jsx";

export function Products({ products, onAdd }) {
  const hasProducts = products?.length > 0;

  if (!hasProducts) {
    return <p>No products were found that match the search criteria.</p>;
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
                <div className={styles.codeRain}></div>
              </button>
            </div>
          </ProductCard>
        </li>
      ))}
    </ul>
  );
}
