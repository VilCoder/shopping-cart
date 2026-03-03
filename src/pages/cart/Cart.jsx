import styles from "./Cart.module.css";
import { ProductsCart } from "../../components/products/ProductsCart.jsx";
import { Link } from "../../components/link/Link.jsx";
import { Header } from "../../components/header/Header.jsx";
import { ArrowLeft, HeartIconOutline } from "../../components/icons/Icons.jsx";
import {
  NavContent,
  Navigation,
} from "../../components/navigation/Navigation.jsx";
import { useNavigate } from "react-router";
import { CustomButton } from "../../components/CustomButton.jsx";
import { useCartStore } from "../../store/cartStore.js";
import { FavoriteCounter } from "../../components/FavoriteCounter.jsx";

function CartPageFooter() {
  const cart = useCartStore((state) => state.cart);

  // Calculate the price of each product in the cart
  // and it stores it in an accumulator variable
  const total = cart.reduce(
    (accumulator, currentProduct) =>
      accumulator + currentProduct.price * currentProduct.quantity,
    0,
  );

  // Format numbers according to country/language rules
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency", // It indicates that it should be displayed as currency
    currency: "USD", // Define the currency to use
  }).format(total);

  return (
    <footer className={styles.footerContent}>
      <div>
        <span>Subtotal</span>
        <small>{formattedTotal}</small>
      </div>
      <div>
        <span>Total</span>
        <small>{formattedTotal}</small>
      </div>
      <Link to="#" title="Proceed to payment" className={styles.btn} />
    </footer>
  );
}

export default function CartPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <CustomButton
          aria-label="Return to previous page"
          className="prevPageButton"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
        </CustomButton>

        <h1 className="pageTitle">My Cart</h1>

        <Navigation>
          <NavContent
            to="/favorites"
            title="Favorite"
            items={<FavoriteCounter />}
          >
            <HeartIconOutline />
            <HeartIconOutline />
          </NavContent>
        </Navigation>
      </Header>

      <main>
        <ProductsCart />
      </main>

      <CartPageFooter />
    </>
  );
}
