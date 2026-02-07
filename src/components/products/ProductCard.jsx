import styles from "./ProductCard.module.css";
import { CustomButton } from "../CustomButton.jsx";
import {
  CartIconPlus,
  HeartIconFilled,
  HeartIconOutline,
} from "../icons/Icons.jsx";
import { Link } from "../link/Link.jsx";
import { useFavorites } from "../../hooks/useFavorites.js";

export function ProductCard({
  product,
  children,
  detailsTitle = "",
  hasFavorite = true,
}) {
  const { id, image, title, price, isFavorite } = product;
  const { toggleFavorites } = useFavorites();

  const handleOnFavorite = () => {
    toggleFavorites(product);
  };

  const favoriteContent = isFavorite ? (
    <HeartIconFilled />
  ) : (
    <HeartIconOutline />
  );

  return (
    <>
      {hasFavorite && (
        <CustomButton
          className={styles.productFavorite}
          onClick={handleOnFavorite}
        >
          {favoriteContent}
        </CustomButton>
      )}

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
