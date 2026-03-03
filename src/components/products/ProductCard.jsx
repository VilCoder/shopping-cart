import styles from "./ProductCard.module.css";
import {
  CartIconPlus,
  HeartIconFilled,
  HeartIconOutline,
} from "../icons/Icons.jsx";
import { Link } from "../link/Link.jsx";
import { useFavoritesStore } from "../../store/favoritesStore.js";

function ProductCardFavoriteButton({ productId }) {
  console.log("render productcartButton");
  const isFavorite = useFavoritesStore((state) =>
    state.favorites.includes(productId),
  );
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return (
    <button
      className={styles.productFavorite}
      onClick={() => toggleFavorite(productId)}
    >
      {isFavorite ? <HeartIconFilled /> : <HeartIconOutline />}
    </button>
  );
}

export function ProductCard({
  product,
  children,
  detailsTitle = "",
  hasFavorite = true,
}) {
  console.log("render productCard");

  const { id, image, title, price } = product;

  return (
    <>
      {hasFavorite && <ProductCardFavoriteButton productId={id} />}

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
