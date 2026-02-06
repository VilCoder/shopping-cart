import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/filters/FiltersContext.js";
import { useSearchParams } from "react-router";

const RESULT_PER_PAGE = 4;

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(() => {
    const page = Number(searchParams.get("page"));

    const matchesPage = !Number.isNaN(page) && page > 0;

    return matchesPage ? page : 1;
  });

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

  useEffect(() => {
    setSearchParams(
      (params) => {
        if (filters.title) params.set("text", filters.title);
        if (filters.category) params.set("category", filters.category);

        if (currentPage > 1) {
          params.set("page", currentPage);
        } else {
          params.delete("page");
        }

        return params;
      },
      { replace: true },
    );
  }, [filters, currentPage, setSearchParams]);

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
