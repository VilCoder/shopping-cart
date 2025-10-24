import styles from "./Header.module.css";

import { CartIcon, HomeIcon, LogoIcon, StoreIcon } from "../Icons";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart } = useCart();

  return (
    <header className={styles.navigation}>
      <h1>
        <a href="#" className={styles.logo}>
          <LogoIcon />
          Shopify
        </a>
      </h1>

      <nav className={styles.navbar}>
        <a href="#">
          <i className={styles.icon}>
            <HomeIcon />
            <HomeIcon />
          </i>
          <div className={styles.text}>
            <span data-text="Home">Home</span>
          </div>
        </a>
        <a href="#">
          <i className={styles.icon}>
            <StoreIcon />
            <StoreIcon />
          </i>
          <div className={styles.text}>
            <span data-text="Store">Store</span>
          </div>
        </a>
        <a href="#">
          <span className={styles.products}>{cart.length}</span>
          <i className={styles.icon}>
            <CartIcon />
            <CartIcon />
          </i>
          <div className={styles.text}>
            <span data-text="Cart">Cart</span>
          </div>
        </a>
      </nav>
    </header>
  );
}
