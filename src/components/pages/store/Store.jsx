import { FilterProducts } from "../../filters/FilterProducts.jsx";
import { Products } from "../../products/Products.jsx";
import { useModal } from "../../../hooks/useModal.js";
import { useCart } from "../../../hooks/useCart.js";
import { Modal } from "../../modal/Modal.jsx";
import { CheckIcon } from "../../Icons.jsx";
import { useFilters } from "../../../hooks/useFilters.js";
import initialProducts from "../../../mocks/products.json";
import { Pagination } from "../../pagination/Pagination.jsx";
import { useState } from "react";

const RESULT_PER_PAGE = 4;

export function Store() {
  const { showModal, setShowModal } = useModal();
  const { addToCart } = useCart();
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  const handleClick = (product) => {
    setShowModal(true);
    addToCart(product);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredProducts?.length / RESULT_PER_PAGE);
  const pageResults = filteredProducts?.slice(
    (currentPage - 1) * RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main style={{ padding: "0.7rem" }}>
      <FilterProducts />
      <Products products={pageResults} onAdd={handleClick} />
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
  );
}
