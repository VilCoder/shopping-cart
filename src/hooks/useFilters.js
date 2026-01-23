import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/filters/FiltersContext.js";
import { useLocation, useNavigate } from "react-router";

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
  const navigate = useNavigate();
  const location = useLocation();

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

    navigate(
      {
        pathname: location.pathname,
        search: params.toString(),
      },
      { replace: true },
    );
  }, [filters, currentPage, navigate, location.pathname]);

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
