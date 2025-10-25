import styles from "./Main.module.css";
import productStyles from "../product/ProductCard.module.css";

import {
  CheckIcon,
  CloseIcon,
  DeviceIcon,
  FemaleIcon,
  MaleIcon,
  SofaIcon,
  SportIcon,
  ToyIcon,
} from "../Icons";
import { Link } from "../link/Link";
import { ProductCard } from "../product/ProductCard";
import { UserReview } from "../reviews/UseReview";
import { Carrousel } from "../carrousel/Carrousel";
import { Modal } from "../modal/Modal";
import { useModal } from "../../hooks/useModal";
import { useCart } from "../../hooks/useCart";

export function Main() {
  const { showModal, setShowModal } = useModal();
  const { addToCart } = useCart();

  const handleClick = (product) => {
    setShowModal(true);
    addToCart(product);
  };

  return (
    <main className={styles.content}>
      <Carrousel />

      <section className={styles.container}>
        <h2>Category</h2>

        <div className={styles.links}>
          <Link title="Electronics">
            <DeviceIcon />
          </Link>
          <Link title="Women's Fashion">
            <FemaleIcon />
          </Link>
          <Link title="Men's Fashion">
            <MaleIcon />
          </Link>
          <Link title="Home">
            <SofaIcon />
          </Link>
          <Link title="Toys">
            <ToyIcon />
          </Link>
          <Link title="Sports">
            <SportIcon />
          </Link>
        </div>
      </section>

      <section className={styles.container}>
        <div>
          <h2 className={styles.subtitle}>Featured Products</h2>
          <a href="#" className={styles.more}>
            See more
          </a>
        </div>
        <div>
          <ProductCard onClick={handleClick} />
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
        <Link title="Explore the store" className={productStyles.btn} />
      </section>

      {showModal && (
        <Modal text="Product added to cart" type="success" show={showModal}>
          <CheckIcon />
        </Modal>
      )}
    </main>
  );
}
