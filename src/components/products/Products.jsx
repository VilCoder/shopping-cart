import styles from "./Products.module.css";
import { ButtonCard, ProductCard } from "./ProductCard.jsx";

export function Products({ products, onAdd }) {
  const hasProducts = products?.length > 0;

  if (!hasProducts) {
    return <p className={styles.notFound}>No products were found.</p>;
  }

  return (
    <ul className={styles.products}>
      {products?.map((product) => (
        <li key={product.id} className={styles.product}>
          <ProductCard product={product} detailsTitle="See Details">
            <ButtonCard product={product} onClick={onAdd} />
          </ProductCard>
        </li>
      ))}
    </ul>
  );
}
