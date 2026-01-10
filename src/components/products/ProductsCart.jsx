import { MinusIcon, PlusIcon, RemoveIcon } from "../Icons.jsx";
import { ProductCard } from "./ProductCard.jsx";
import styles from "./ProductsCart.module.css";

export function ProductsCart({ products, onAdd, onRemove, onRemoveQuantity }) {
  const hasProducts = products?.length > 0;

  if (!hasProducts) {
    return <p>There are no products in the cart</p>;
  }

  console.log(products);

  return (
    <ul className={styles.products}>
      {products?.map((product) => (
        <li className={styles.item} key={product.id}>
          <ProductCard product={product}>
            <div>
              <button
                type="button"
                className={styles["trash-button"]}
                onClick={() => onRemove(product.id)}
              >
                <RemoveIcon />
              </button>
              <div>
                <button
                  type="button"
                  className={styles["minus-button"]}
                  onClick={() => onRemoveQuantity(product)}
                >
                  <MinusIcon />
                </button>
                <small>{product.quantity}</small>
                <button
                  type="button"
                  className={styles["plus-button"]}
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
