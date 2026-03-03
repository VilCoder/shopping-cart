import { Products } from "../../components/products/Products.jsx";
import { useModal } from "../../hooks/useModal.js";
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
import { useFetchingProducts } from "../../hooks/useFetchingProducts.js";
import { useFavoritesStore } from "../../store/favoritesStore.js";
import { useCartStore } from "../../store/cartStore.js";

export default function FavoritesPage() {
  const { showModal, setShowModal } = useModal();
  const { products } = useFetchingProducts();
  const navigate = useNavigate();
  
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItemsCount = useCartStore((state) => state.cart.length);
  
  const favorites = useFavoritesStore((state) => state.favorites);
  const favoritesProducts = products.filter((pro) => favorites.includes(pro.id));

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
          <NavContent to="/cart" title="Cart" items={cartItemsCount}>
            <CartIcon />
            <CartIcon />
          </NavContent>
        </Navigation>
      </Header>

      <main style={{ padding: "0.7rem" }}>
        <Products products={favoritesProducts} onAdd={handleClick} />
        {showModal && (
          <Modal text="Product added to cart" type="success">
            <CheckIcon />
          </Modal>
        )}
      </main>
    </>
  );
}
