import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/filters/FiltersContext.js";
import { useRouter } from "./useRouter.js";

const RESULT_PER_PAGE = 4;

export function useFilters() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const page = Number(params.get("page"));

    return Number.isNaN(page) ? page : 1;
  });

  const [products, setProducts] = useState([]);
  const { filters } = useContext(FiltersContext);
  const { navigateTo } = useRouter();

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

  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.title) params.append("text", filters.title);
    if (filters.category) params.append("category", filters.category);
    if (currentPage > 1) params.append("page", currentPage);

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    navigateTo(newUrl);
  }, [filters, currentPage, navigateTo]);

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
