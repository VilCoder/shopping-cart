import { useEffect, useState } from "react";

export function useFetchingProducts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return {
    loading,
    error,
    products,
  }
}
