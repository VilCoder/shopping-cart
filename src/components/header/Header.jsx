import styles from "./Header.module.css";

import { CartIcon, HomeIcon, LogoIcon, StoreIcon } from "../Icons";

export function Header() {
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
          <HomeIcon />
          Home
        </a>
        <a href="#">
          <StoreIcon />
          Store
        </a>
        <a href="#">
          <CartIcon />
          Cart
        </a>
      </nav>
    </header>
  );
}
