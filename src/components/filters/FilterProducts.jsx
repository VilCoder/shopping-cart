import styles from "./FilterProducts.module.css";
import { useContext, useId, useRef } from "react";
import { SearchIcon } from "../Icons.jsx";
import { FiltersContext } from "../../context/filters/FiltersContext.js";

export function FilterProducts({ onPageChange }) {
  const searchId = useId();
  const categoryId = useId();
  const { filters, setFilters } = useContext(FiltersContext);
  let timeoutId = useRef(null);

  const handleChange = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const searchToFilters = {
      category: formData.get(categoryId),
      title: formData.get(searchId),
    };

    onPageChange(1);

    if (event.target.name === categoryId) {
      setFilters(searchToFilters);
      return;
    }

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      setFilters(searchToFilters);
    }, 500);
  };

  return (
    <form
      id="search-form"
      className={styles.searchForm}
      role="search"
      onChange={handleChange}
    >
      <div className={styles.searchBar}>
        <SearchIcon />

        <input
          name={searchId}
          className={styles.searchInput}
          type="search"
          placeholder="Search for products"
          aria-label="Search for products"
        />
      </div>

      <div>
        <select
          className={styles.searchFilters}
          name={categoryId}
          defaultValue={filters.category}
          aria-label="Select category"
        >
          <option value="all">All</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
    </form>
  );
}
