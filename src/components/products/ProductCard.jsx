import styles from "./ProductCard.module.css";

export function ProductCard({ product, children }) {
  const { image, title, price } = product;

  return title && price ? (
    <>
      <img src={image} alt={title ? title : "No image"} />
      <article>
        <h3>{title}</h3>
        <small>${price}</small>
      </article>
      {children}
    </>
  ) : (
    <p>Product not available.</p>
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
        Add to Cart
        <div className={styles.codeRain}></div>
      </button>
    </div>
  );
}
