import styles from "./ProductCard.module.css"

export function ProductCard({ title, image, price }) {
  return (
    <div className={styles.product}>
      <img src={image} alt={title} />
      <div>
        <span>{title}</span>
        <span>${price}</span>
        <button type="button" className={styles.btn}>
          Add to Cart
          <div className={styles["code-rain"]}></div>
        </button>
      </div>
    </div>
  );
}
