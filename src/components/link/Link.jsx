import styles from "./Link.module.css";

export function Link({ to= "#", title, children, className = "" }) {
  const selectedClassName = className ? className : styles.link;

  return (
    <a href={to} className={selectedClassName}>
      <i className={styles.icon}>{children}</i>
      <span>{title}</span>
    </a>
  );
}
