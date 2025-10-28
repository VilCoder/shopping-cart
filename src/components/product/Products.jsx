import styles from "./Products.module.css";

export function ProductCard({ product, onClick }) {
  const { image, title, price } = product;

  return (
    title &&
    price ? (
      <>
        <img src={image} alt={title ? title : "No image"} />
        <span>{title}</span>
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
  const hasProducts = products?.length > 0;

  if (!hasProducts) {
    return <p>Products not found</p>;
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
