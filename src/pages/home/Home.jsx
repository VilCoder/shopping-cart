import styles from "./Home.module.css";
import initialProducts from "../../mocks/products.json";
import {
  CheckIcon,
  DeviceIcon,
  FemaleIcon,
  MaleIcon,
  SofaIcon,
  SportIcon,
  ToyIcon,
} from "../../components/icons/Icons.jsx";
import { Link } from "../../components/link/Link.jsx";
import { Products } from "../../components/products/Products.jsx";
import { UserReview } from "../../components/reviews/UserReview.jsx";
import { Carrousel } from "../../components/carrousel/Carrousel.jsx";
import { Modal } from "../../components/modal/Modal.jsx";
import { useModal } from "../../hooks/useModal.js";
import { useCart } from "../../hooks/useCart.js";

export function Home() {
  const { showModal, setShowModal } = useModal();
  const { addToCart } = useCart();

  const featuredProducts = initialProducts?.filter(
    (product) => product.destacated,
  );

  const handleClick = (product) => {
    setShowModal(true);
    addToCart(product);
  };

  return (
    <main className={styles.mainContent}>
      <Carrousel />

      <section className={styles.container}>
        <h2>Category</h2>

        <div className={styles.links}>
          <Link to="/store" className={styles.link} linkCategory="electronics">
            <i className={styles.icon}>
              <DeviceIcon />
            </i>
            <span>Electronics</span>
          </Link>

          <Link
            to="/store"
            className={styles.link}
            linkCategory="women's clothing"
          >
            <i className={styles.icon}>
              <FemaleIcon />
            </i>
            <span>Women's Fashion</span>
          </Link>

          <Link
            to="/store"
            className={styles.link}
            linkCategory="men's clothing"
          >
            <i className={styles.icon}>
              <MaleIcon />
            </i>
            <span>Men's Fashion</span>
          </Link>

          <Link to="/store" className={styles.link}>
            <i className={styles.icon}>
              <SofaIcon />
            </i>
            <span>Home</span>
          </Link>

          <Link to="/store" className={styles.link}>
            <i className={styles.icon}>
              <ToyIcon />
            </i>
            <span>Toys</span>
          </Link>

          <Link to="/store" className={styles.link}>
            <i className={styles.icon}>
              <SportIcon />
            </i>
            <span>Sports</span>
          </Link>
        </div>
      </section>

      <section className={styles.container}>
        <div>
          <h2 className={styles.subtitle}>Featured Products</h2>
          <Link to="/store" href="#" className={styles.more}>
            See more
          </Link>
        </div>
        <div>
          <Products products={featuredProducts} onAdd={handleClick} />
        </div>
      </section>

      <section className={`${styles.container} ${styles.reviews}`}>
        <h2>What our customers say</h2>
        <UserReview
          score={5}
          name="Ana Pérez"
          description="I love this app! They have a great selection and shipping is super fast. Definitely my favorite store!"
        />

        <UserReview
          score={4}
          name="Carlos Gómez"
          description="The quality of the products is incredible. I've purchased several times and have never been disappointed. Highly recommended."
        />
      </section>

      <section className={`${styles.container} ${styles.explore}`}>
        <h2>Ready to renew your style?</h2>
        <p>Explore thousands of products and find your new favorites today</p>
        <Link to="/store" className={styles.btn}>
          <span>Explore the store</span>
        </Link>
      </section>

      {showModal && (
        <Modal text="Product added to cart" type="success">
          <CheckIcon />
        </Modal>
      )}
    </main>
  );
}
