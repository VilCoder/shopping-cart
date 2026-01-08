import styles from "./Navigation.module.css";

import { CartIcon, HomeIcon, LogoIcon, StoreIcon } from "../Icons";
import { useCart } from "../../hooks/useCart";
import { Link } from "../link/Link";

export function Navigation() {
  const { cart } = useCart();

  return (
    <header className={styles.navigation}>
      <h1>
        <Link to="/" className={styles.logo}>
          <LogoIcon />
          <span>ShopStore</span>
        </Link>
      </h1>

      <nav className={styles.navbar}>
        <Link to="/" aria-label="Home">
          <i className={styles.icon}>
            <HomeIcon />
            <HomeIcon />
          </i>
          <div className={styles.text}>
            <span data-text="Home">Home</span>
          </div>
        </Link>

        <Link to="/store" aria-label="Store">
          <i className={styles.icon}>
            <StoreIcon />
            <StoreIcon />
          </i>
          <div className={styles.text}>
            <span data-text="Store">Store</span>
          </div>
        </Link>

        <Link to="/cart" aria-label="Cart">
          <span className={styles.products}>{cart.length}</span>
          <i className={styles.icon}>
            <CartIcon />
            <CartIcon />
          </i>
          <div className={styles.text}>
            <span data-text="Cart">Cart</span>
          </div>
        </Link>
      </nav>
    </header>
  );
}
