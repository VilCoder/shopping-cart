import { FilterProducts } from "../filters/FilterProducts";
import { Products } from "../products/Products";
import { useModal } from "../../hooks/useModal";
import { useCart } from "../../hooks/useCart";
import { Modal } from "../modal/Modal";
import { CheckIcon } from "../Icons";
import { useFilters } from "../../hooks/useFilters";
import initialProducts from "../../mocks/products.json";

export function Store() {
  const { showModal, setShowModal } = useModal();
  const { addToCart } = useCart();
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  const handleClick = (product) => {
    setShowModal(true);
    addToCart(product);
  };

  return (
    <main style={{ padding: "0.7rem" }}>
      <FilterProducts />
      <Products products={filteredProducts} onAdd={handleClick} />
      {showModal && (
        <Modal text="Product added to cart" type="success">
          <CheckIcon />
        </Modal>
      )}
    </main>
  );
}
