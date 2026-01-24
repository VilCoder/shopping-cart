import styles from "./Detail.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ButtonCard,
  ProductCard,
} from "../../components/products/ProductCard.jsx";
import { LoaderIcon } from "../../components/icons/Icons.jsx";

export function ProductDetail() {
  const navigate = useNavigate();

  const { productId } = useParams();
  const productIdParse = Number(productId);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  let product;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => {
        if (!response.ok) throw new Error("Product not found");
        return response.json();
      })
      .then((json) => {
        setLoading(true);
        setProducts(json);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (products.length > 0) {
    product = products.find((pro) => pro.id === productIdParse);
  }

  if (loading) {
    return (
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          color: "var(--secondary)",
        }}
      >
        Loading Product...
        <LoaderIcon />
      </p>
    );
  }

  if (error || !product) {
    return (
      <div
        style={{ maxInlineSize: "1280px", margin: "0 auto", padding: "0 1rem" }}
      >
        <div className={styles.error}>
          <h2 className={styles.errorTitle}>Product not found</h2>
          <button className={styles.errorButton} onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className={styles.mainContent}>
        <ProductCard product={product}>
          <p className={styles.productDescription}>
            Discover the perfect combination of style and comfort. Its versatile
            design makes it the ideal choice for any occasion.
          </p>
        </ProductCard>

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
