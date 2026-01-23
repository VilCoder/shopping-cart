import styles from "./Products.module.css";
import { ButtonCard, ProductCard } from "./ProductCard.jsx";

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
            <ButtonCard product={product} onClick={onAdd} />
          </ProductCard>
        </li>
      ))}
    </ul>
  );
}
