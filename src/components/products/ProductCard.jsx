import { CartIconPlus } from "../icons/Icons";
import { Link } from "../link/Link";
import styles from "./ProductCard.module.css";

export function ProductCard({ product, children, detailsTitle = "" }) {
  const { id, image, title, price } = product;

  return (
    <>
      <img src={image} alt={title} className={styles.image} />
      <article className={styles.info}>
        {detailsTitle && (
          <Link
            to={`/products/${id}`}
            title={detailsTitle}
            className={styles.detailsButton}
          />
        )}
        <h3>{title}</h3>
        <small>${price}</small>
      </article>
      {children}
    </>
  );
}

export function ButtonCard({ product, onClick }) {
  return (
    <div>
      <button
        type="button"
        className={styles.btn}
        onClick={() => onClick(product)}
      >
        <CartIconPlus />
        Add to Cart
        <div className={styles.codeRain}></div>
      </button>
    </div>
  );
}
