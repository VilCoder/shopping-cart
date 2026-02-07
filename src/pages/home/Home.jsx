import styles from "./Home.module.css";
import initialProducts from "../../mocks/products.json";
import {
  CartIcon,
  CheckIcon,
  DeviceIcon,
  FemaleIcon,
  HomeIcon,
  MaleIcon,
  SofaIcon,
  SportIcon,
  StoreIcon,
  ToyIcon,
  LogoIcon,
  UserIcon,
  HeartIconOutline,
} from "../../components/icons/Icons.jsx";
import { Link } from "../../components/link/Link.jsx";
import { Products } from "../../components/products/Products.jsx";
import { UserReview } from "../../components/reviews/UserReview.jsx";
import { Carrousel } from "../../components/carrousel/Carrousel.jsx";
import { Modal } from "../../components/modal/Modal.jsx";
import { Header } from "../../components/header/Header.jsx";
import {
  NavContent,
  Navigation,
} from "../../components/navigation/Navigation.jsx";
import { useModal } from "../../hooks/useModal.js";
import { useCart } from "../../hooks/useCart.js";
import { useFavorites } from "../../hooks/useFavorites.js";

export function Home() {
  const { showModal, setShowModal } = useModal();
  const { cart, addToCart } = useCart();
  const { favorites } = useFavorites();

  const featuredProducts = initialProducts?.filter(
    (product) => product.destacated,
  );

  const handleClick = (product) => {
    setShowModal(true);
    addToCart(product);
  };

  return (
    <>
      <Header>
        <h1 style={{ margin: "0" }}>
          <Link
            to="/"
            title="ShopStore"
            aria-label="Home"
            className={styles.logo}
          >
            <LogoIcon />
          </Link>
        </h1>

        <Navigation className={styles.navigation}>
          <NavContent to="/" title="Home">
            <HomeIcon />
            <HomeIcon />
          </NavContent>

          <NavContent to="/store" title="Store">
            <StoreIcon />
            <StoreIcon />
          </NavContent>

          <NavContent to="/cart" title="Cart" items={cart.length}>
            <CartIcon />
            <CartIcon />
          </NavContent>

          <NavContent to="/favorites" title="Favorites" items={favorites.length}>
            <HeartIconOutline />
            <HeartIconOutline />
          </NavContent>

          <NavContent to="/userAccount" title="Account">
            <UserIcon />
            <UserIcon />
          </NavContent>
        </Navigation>
      </Header>

      <main className={styles.mainContent}>
        <Carrousel />

        <section className={styles.container}>
          <h2>Category</h2>

          <div className={styles.links}>
            <Link
              to="/store"
              title="Electronics"
              linkCategory="electronics"
              className={styles.link}
            >
              <DeviceIcon />
            </Link>

            <Link
              to="/store"
              title="Women's Fashion"
              linkCategory="women's clothing"
              className={styles.link}
            >
              <FemaleIcon />
            </Link>

            <Link
              to="/store"
              title="Men's Fashion"
              linkCategory="men's clothing"
              className={styles.link}
            >
              <MaleIcon />
            </Link>

            <Link to="/store" title="Home" className={styles.link}>
              <SofaIcon />
            </Link>

            <Link to="/store" title="Toys" className={styles.link}>
              <ToyIcon />
            </Link>

            <Link to="/store" title="Sports" className={styles.link}>
              <SportIcon />
            </Link>
          </div>
        </section>

        <section className={styles.container}>
          <div>
            <h2 className={styles.subtitle}>Featured Products</h2>
            <Link to="/store" title="See more" className={styles.more} />
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
          <Link
            to="/store"
            title="Explore the store"
            className={styles.btn}
          ></Link>
        </section>

        {showModal && (
          <Modal text="Product added to cart" type="success">
            <CheckIcon />
          </Modal>
        )}
      </main>
      
      <Navigation className="navigation">
        <NavContent to="/" title="Home">
          <HomeIcon />
          <HomeIcon />
        </NavContent>

        <NavContent to="/store" title="Store">
          <StoreIcon />
          <StoreIcon />
        </NavContent>

        <NavContent to="/cart" title="Cart" items={cart.length}>
          <CartIcon />
          <CartIcon />
        </NavContent>

        <NavContent to="/favorites" title="Favorites" items={favorites.length}>
          <HeartIconOutline />
          <HeartIconOutline />
        </NavContent>

        <NavContent to="/userAccount" title="Account">
          <UserIcon />
          <UserIcon />
        </NavContent>
      </Navigation>
    </>
  );
}
