import { useFavorites } from "../../hooks/useFavorites.js";
import { Products } from "../../components/products/Products.jsx";
import { useModal } from "../../hooks/useModal.js";
import { useCart } from "../../hooks/useCart.js";
import { Modal } from "../../components/modal/Modal.jsx";
import {
  ArrowLeft,
  CartIcon,
  CheckIcon,
} from "../../components/icons/Icons.jsx";
import { Header } from "../../components/header/Header.jsx";
import { useNavigate } from "react-router";
import {
  NavContent,
  Navigation,
} from "../../components/navigation/Navigation.jsx";
import { CustomButton } from "../../components/CustomButton.jsx";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const { showModal, setShowModal } = useModal();
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();

  const handleClick = (product) => {
    setShowModal(true);
    addToCart(product);
  };

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

        <h1 className="pageTitle">My Favorites</h1>

        <Navigation>
          <NavContent to="/cart" title="Cart" items={cart.length}>
            <CartIcon />
            <CartIcon />
          </NavContent>
        </Navigation>
      </Header>

      <main style={{ padding: "0.7rem" }}>
        <Products products={favorites} onAdd={handleClick} />
        {showModal && (
          <Modal text="Product added to cart" type="success">
            <CheckIcon />
          </Modal>
        )}
      </main>
    </>
  );
}
