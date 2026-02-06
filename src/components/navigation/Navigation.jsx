import styles from "./Navigation.module.css";
import { NavLink } from "react-router";

export function NavContent({ to, title, children, items = "" }) {

  return (
    <NavLink
      to={to}
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

export function Navigation({ className, children }) {
  const classesNavigation = `${styles.navbar} ${className}`;

  return <nav className={classesNavigation}>{children}</nav>;
}
