import { useCart } from "../../../hooks/useCart.js";
import { Link } from "../../link/Link.jsx";
import { ProductsCart } from "../../products/ProductsCart.jsx";
import styles from "./Cart.module.css";

export function Cart() {
  const { cart, addToCart, removeToCart, removeQuantityToCart } = useCart();
  const total = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  return (
    <>
      <main>
        <ProductsCart
          products={cart}
          onAdd={addToCart}
          onRemove={removeToCart}
          onRemoveQuantity={removeQuantityToCart}
        />
      </main>
      <footer className={styles.footer}>
        <div>
          <span>Subtotal</span>
          <small>${total}</small>
        </div>
        <div>
          <span>Total</span>
          <small>${total}</small>
        </div>
        <Link className={styles.btn}>
          <span>Proceed to payment</span>
        </Link>
      </footer>
    </>
  );
}
