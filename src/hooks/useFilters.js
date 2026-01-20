import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/filters/FiltersContext.js";

const RESULT_PER_PAGE = 4;

export function useFilters() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const { filters } = useContext(FiltersContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesTitle =
      filters.title === "" ||
      product.title.toLowerCase().includes(filters.title.toLowerCase());

    const matchesCategory =
      filters.category === "all" || product.category === filters.category;

    return matchesTitle && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts?.length / RESULT_PER_PAGE);
  const pageResults = filteredProducts?.slice(
    (currentPage - 1) * RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return { loading, currentPage, totalPages, pageResults, handlePageChange };
}
