import styles from "./Link.module.css";

export function Link({ to= "#", title, children }) {
  return (
    <a href={to} className={styles.link}>
      <i className={styles.icon}>{children}</i>
      <span>{title}</span>
    </a>
  );
}
