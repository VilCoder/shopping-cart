import styles from "./Detail.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ButtonCard,
  ProductCard,
} from "../../components/products/ProductCard.jsx";
import {
  ArrowLeft,
  HeartIconFilled,
  HeartIconOutline,
  LoaderIcon,
} from "../../components/icons/Icons.jsx";
import { Header } from "../../components/header/Header.jsx";

export function ProductDetail() {
  const { productId } = useParams();
  const productIdParse = Number(productId);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [sizeChosen, setSizeChosen] = useState("");
  const [colorChosen, setColorChosen] = useState("");
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

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

  let product;

  const handleClick = () => {
    setIsActive(!isActive);
  };

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
      <Header>
        <button
          className={styles.prevButtonDetail}
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
        </button>

        <span className={styles.detailText}>Product Details</span>

        <button className={styles.detailFavorite} onClick={handleClick}>
          {isActive ? <HeartIconFilled /> : <HeartIconOutline />}
        </button>
      </Header>

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
            <button
              className={`${styles.sizeBtn} ${sizeChosen === "s" ? styles.activeSize : ""}`}
              onClick={() => setSizeChosen("s")}
            >
              S
            </button>
            <button
              className={`${styles.sizeBtn} ${sizeChosen === "m" ? styles.activeSize : ""}`}
              onClick={() => setSizeChosen("m")}
            >
              M
            </button>
            <button
              className={`${styles.sizeBtn} ${sizeChosen === "l" ? styles.activeSize : ""}`}
              onClick={() => setSizeChosen("l")}
            >
              L
            </button>
            <button
              className={`${styles.sizeBtn} ${sizeChosen === "xl" ? styles.activeSize : ""}`}
              onClick={() => setSizeChosen("xl")}
            >
              XL
            </button>
          </div>
        </section>

        <section className={styles.colorSection}>
          <h4>Color</h4>
          <div className={styles.colors}>
            <button
              className={`${styles.color} ${styles.darkblue} ${colorChosen === "darkblue" ? styles.activeColor : ""}`}
              onClick={() => setColorChosen("darkblue")}
            ></button>
            <button
              className={`${styles.color} ${styles.darkgreen} ${colorChosen === "darkgreen" ? styles.activeColor : ""}`}
              onClick={() => setColorChosen("darkgreen")}
            ></button>
            <button
              className={`${styles.color} ${styles.blue} ${colorChosen === "blue" ? styles.activeColor : ""}`}
              onClick={() => setColorChosen("blue")}
            ></button>
          </div>
        </section>
      </main>

      <footer className={styles.footerContent}>
        <ButtonCard />
      </footer>
    </>
  );
}
