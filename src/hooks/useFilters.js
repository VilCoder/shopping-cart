import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/filters/FiltersContext.js";

export function useFilters() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const filteredProducts = products.filter(
    (product) =>
      (filters.title === "" ||
        product.title.toLowerCase().startsWith(filters.title.toLowerCase())) &&
      (filters.category === "all" || product.category === filters.category),
  );

  return { filteredProducts, loading };
}
