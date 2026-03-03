import { FilterProducts } from "../../components/filters/FilterProducts.jsx";
import { Products } from "../../components/products/Products.jsx";
import { useModal } from "../../hooks/useModal.js";
import { Modal } from "../../components/modal/Modal.jsx";
import {
  ArrowLeft,
  CartIcon,
  CheckIcon,
  HeartIconOutline,
  LoaderIcon,
} from "../../components/icons/Icons.jsx";
import { useFilters } from "../../hooks/useFilters.js";
import { Pagination } from "../../components/pagination/Pagination.jsx";
import { Header } from "../../components/header/Header.jsx";
import {
  NavContent,
  Navigation,
} from "../../components/navigation/Navigation.jsx";
import { useNavigate } from "react-router";
import { CustomButton } from "../../components/CustomButton.jsx";
import { FavoriteCounter } from "../../components/FavoriteCounter.jsx";
import { useCartStore } from "../../store/cartStore.js";

export default function StorePage() {
  const navigate = useNavigate();
  const { showModal, setShowModal } = useModal();
  const { loading, currentPage, totalPages, pageResults, handlePageChange } =
  useFilters();
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItemsCount = useCartStore((state) => state.cart.length);

  const handleClick = (product) => {
    setShowModal(true);
    addToCart(product);
  };

  const stylesLoading = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    color: "var(--secondary)",
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

        <h1 className="pageTitle">Store</h1>

        <Navigation>
          <NavContent to="/cart" title="Cart" items={cartItemsCount}>
            <CartIcon />
            <CartIcon />
          </NavContent>

          <NavContent
            to="/favorites"
            title="Favorites"
            items={<FavoriteCounter />}
          >
            <HeartIconOutline />
            <HeartIconOutline />
          </NavContent>
        </Navigation>
      </Header>

      <main style={{ padding: "0.7rem" }}>
        <FilterProducts onPageChange={handlePageChange} />
        {loading ? (
          <p style={stylesLoading}>
            Loading Products...
            <LoaderIcon />
          </p>
        ) : (
          <Products products={pageResults} onAdd={handleClick} />
        )}
        {showModal && (
          <Modal text="Product added to cart" type="success">
            <CheckIcon />
          </Modal>
        )}
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </main>
    </>
  );
}
