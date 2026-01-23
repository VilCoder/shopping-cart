import styles from "./Detail.module.css";
import { ButtonCard } from "../../components/products/ProductCard";

export function ProductDetail() {
  return (
    <>
      <main className={styles.mainContent}>
        <img
          // src={image ? image : ""}
          // alt={title ? title : ""}
          className={styles.productImage}
        />
        <section className={styles.detailSection}>
          <h2>Product Detail</h2>
          <span>$23.1</span>
          <p>
            Discover the perfect combination of style and comfort. Its versatile
            design makes it the ideal choice for any occasion.
          </p>
        </section>

        <section className={styles.sizeSection}>
          <h4>Talla</h4>
          <div className={styles.sizeButtons}>
            <button className={styles.sizeBtn}>S</button>
            <button className={styles.sizeBtn}>M</button>
            <button className={styles.sizeBtn}>L</button>
            <button className={styles.sizeBtn}>XL</button>
          </div>
        </section>

        <section className={styles.colorSection}>
          <h4>Color</h4>
          <div className={styles.colors}>
            <button className={`${styles.color} ${styles.darkblue}`}></button>
            <button className={`${styles.color} ${styles.darkgreen}`}></button>
            <button className={`${styles.color} ${styles.blue}`}></button>
          </div>
        </section>
      </main>

      <footer className={styles.footerContent}>
        <ButtonCard />
      </footer>
    </>
  );
}
