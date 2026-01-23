import styles from "./Cart.module.css";
import { useCart } from "../../hooks/useCart";
import { ProductsCart } from "../../components/products/ProductsCart.jsx";
import { Link } from "../../components/link/Link.jsx";

export function Cart() {
  const { cart, addToCart, removeToCart, removeQuantityToCart } = useCart();

  // Calculate the price of each product in the cart
  // and it stores it in an accumulator variable
  const total = cart.reduce(
    (accumulator, currentProduct) =>
      accumulator + currentProduct.price * currentProduct.quantity,
    0
  );

  // Format numbers according to country/language rules
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency", // It indicates that it should be displayed as currency
    currency: "USD", // Define the currency to use
  }).format(total);

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
      <footer className={styles.footerContent}>
        <div>
          <span>Subtotal</span>
          <small>{formattedTotal}</small>
        </div>
        <div>
          <span>Total</span>
          <small>{formattedTotal}</small>
        </div>
        <Link to="#" className={styles.btn}>
          <span>Proceed to payment</span>
        </Link>
      </footer>
    </>
  );
}
