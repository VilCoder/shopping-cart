import styles from "./FavoritesPage.module.css";
import { useFavorites } from "../../hooks/useFavorites.js";
import { Products } from "../../components/products/Products.jsx";
import { useModal } from "../../hooks/useModal.js";
import { useCart } from "../../hooks/useCart.js";
import { Modal } from "../../components/modal/Modal.jsx";
import { ArrowLeft, CartIcon, CheckIcon } from "../../components/icons/Icons.jsx";
import { Header } from "../../components/header/Header.jsx";
import { useNavigate } from "react-router";
import { NavContent, Navigation } from "../../components/navigation/Navigation.jsx";

export function FavoritesPage() {
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
        <button className="prevPageButton" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>

        <h1 className="pageTitle">Favorites</h1>

        <Navigation>
          <NavContent to="/cart" title="Cart" items={cart.length}>
            <CartIcon />
            <CartIcon />
          </NavContent>
        </Navigation>
      </Header>

      <main>
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
