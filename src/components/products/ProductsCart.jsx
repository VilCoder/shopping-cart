import styles from "./ProductsCart.module.css";
import { MinusIcon, PlusIcon, RemoveIcon } from "../icons/Icons.jsx";
import { ProductCard } from "./ProductCard.jsx";
import { useCartStore } from "../../store/cartStore.js";

function ButtonCart({ children, ...restOfProps }) {
  return (
    <button type="button" {...restOfProps}>
      {children}
    </button>
  );
}

export function ProductsCart() {
  console.log("Render ProductsCart")
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const removeQuantityFromCart = useCartStore(
    (state) => state.removeQuantityFromCart,
  );
  const hasProducts = cart?.length > 0;

  if (!hasProducts) {
    return <p className="notFound">There are no products in the cart</p>;
  }

  return (
    <ul className={styles.products}>
      {cart?.map((product) => (
        <li className={styles.item} key={product.id}>
          <ProductCard product={product} hasFavorite={false} >
            <div>
              <ButtonCart
                className={styles.trashButton}
                onClick={() => removeFromCart(product.id)}
              >
                <RemoveIcon />
              </ButtonCart>

              <div>
                <ButtonCart
                  className={styles.minusButton}
                  onClick={() => removeQuantityFromCart(product)}
                >
                  <MinusIcon />
                </ButtonCart>

                <small>{product.quantity}</small>
                
                <ButtonCart
                  className={styles.plusButton}
                  onClick={() => addToCart(product)}
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
