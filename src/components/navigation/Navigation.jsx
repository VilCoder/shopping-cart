import styles from "./Navigation.module.css";
import { NavLink, useLocation } from "react-router";

export function NavContent({ to, title, children, items = "" }) {
  const location = useLocation();
  
  return (
    <NavLink
      to={to}
      state={{ from: location.pathname }}
      aria-label={title}
      className={({ isActive }) => (isActive ? "nav-link-active" : "")}
    >
      <div>
        {items !== "" && <span className={styles.products}>{items}</span>}
        {children && <i className={styles.icon}>{children}</i>}
      </div>
      <div className={styles.text}>
        <span data-text={title}>{title}</span>
      </div>
    </NavLink>
  );
}

export function Navigation({ children, className = "" }) {
  const navigationClasses = className
    ? `${className} ${styles.navbar}`
    : styles.navbar;

  return <nav className={navigationClasses}>{children}</nav>;
}
