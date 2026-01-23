import styles from "./ProductsCart.module.css";
import { MinusIcon, PlusIcon, RemoveIcon } from "../icons/Icons.jsx";
import { ProductCard } from "./ProductCard.jsx";

export function ProductsCart({ products, onAdd, onRemove, onRemoveQuantity }) {
  const hasProducts = products?.length > 0;

  if (!hasProducts) {
    return <p>There are no products in the cart</p>;
  }

  return (
    <ul className={styles.products}>
      {products?.map((product) => (
        <li className={styles.item} key={product.id}>
          <ProductCard product={product}>
            <div>
              <button
                type="button"
                className={styles.trashButton}
                onClick={() => onRemove(product.id)}
              >
                <RemoveIcon />
              </button>
              <div>
                <button
                  type="button"
                  className={styles.minusButton}
                  onClick={() => onRemoveQuantity(product)}
                >
                  <MinusIcon />
                </button>
                <small>{product.quantity}</small>
                <button
                  type="button"
                  className={styles.plusButton}
                  onClick={() => onAdd(product)}
                >
                  <PlusIcon />
                </button>
              </div>
            </div>
          </ProductCard>
        </li>
      ))}
    </ul>
  );
}
