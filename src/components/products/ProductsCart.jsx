import styles from "./ProductsCart.module.css";
import { MinusIcon, PlusIcon, RemoveIcon } from "../icons/Icons.jsx";
import { ProductCard } from "./ProductCard.jsx";

function ButtonCart({ children, ...restOfProps }) {
  return (
    <button type="button" {...restOfProps}>
      {children}
    </button>
  );
}

export function ProductsCart({ products, onAdd, onRemove, onRemoveQuantity }) {
  const hasProducts = products?.length > 0;

  if (!hasProducts) {
    return <p>There are no products in the cart</p>;
  }

  return (
    <ul className={styles.products}>
      {products?.map((product) => (
        <li className={styles.item} key={product.id}>
          <ProductCard product={product} hasFavorite={false} >
            <div>
              <ButtonCart
                className={styles.trashButton}
                onClick={() => onRemove(product.id)}
              >
                <RemoveIcon />
              </ButtonCart>

              <div>
                <ButtonCart
                  className={styles.minusButton}
                  onClick={() => onRemoveQuantity(product)}
                >
                  <MinusIcon />
                </ButtonCart>

                <small>{product.quantity}</small>
                
                <ButtonCart
                  className={styles.plusButton}
                  onClick={() => onAdd(product)}
                >
                  <PlusIcon />
                </ButtonCart>
              </div>
            </div>
          </ProductCard>
        </li>
      ))}
    </ul>
  );
}
