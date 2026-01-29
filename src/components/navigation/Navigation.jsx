import styles from "./Navigation.module.css";
import { NavLink } from "react-router";
import { CartIcon, HomeIcon, LogoIcon, StoreIcon } from "../icons/Icons.jsx";
import { useCart } from "../../hooks/useCart.js";
import { Link } from "../link/Link.jsx";

export function Navigation() {
  const { cart } = useCart();

  return (
    <header className={styles.navigation}>
      <h1>
        <Link to="/" aria-label="Home" className={styles.logo}>
          <LogoIcon />
          <span>ShopStore</span>
        </Link>
      </h1>

      <nav className={styles.navbar}>
        <NavLink
          to="/"
          aria-label="Home"
          className={({ isActive }) => (isActive ? "nav-link-active" : "")}
        >
          <i className={styles.icon}>
            <HomeIcon />
            <HomeIcon />
          </i>
          <div className={styles.text}>
            <span data-text="Home">Home</span>
          </div>
        </NavLink>

        <NavLink
          to="/store"
          aria-label="Store"
          className={({ isActive }) => (isActive ? "nav-link-active" : "")}
        >
          <i className={styles.icon}>
            <StoreIcon />
            <StoreIcon />
          </i>
          <div className={styles.text}>
            <span data-text="Store">Store</span>
          </div>
        </NavLink>

        <NavLink
          to="/cart"
          aria-label="Cart"
          className={({ isActive }) => (isActive ? "nav-link-active" : "")}
        >
          <span className={styles.products}>{cart.length}</span>
          <i className={styles.icon}>
            <CartIcon />
            <CartIcon />
          </i>
          <div className={styles.text}>
            <span data-text="Cart">Cart</span>
          </div>
        </NavLink>
      </nav>
    </header>
  );
}
