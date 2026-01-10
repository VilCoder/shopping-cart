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
    <p>Product not available</p>
  );
}
