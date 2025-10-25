import styles from "./Modal.module.css";

export function Modal({ text, type, children, show }) {
  const className =
    type === "success" ? styles.success : type === "error" ? styles.error : "";

  return (
    <div
      data-testid="modal"
      className={`${styles.modal} ${className} ${show && styles.show}`}
    >
      {children}
      <p>{text}</p>
    </div>
  );
}
