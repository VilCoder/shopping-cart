import styles from "./FilterProducts.module.css";
import { useContext, useRef, useState } from "react";
import { SearchIcon } from "../Icons.jsx";
import { FiltersContext } from "../../context/filters/FiltersContext.js";

export function FilterProducts() {
  const { filters, setFilters } = useContext(FiltersContext);
  const [searchText, setSearchText] = useState('');
  let timeout = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "category") {
      setFilters({ ...filters, [name]: value });

      return;
    }

    setSearchText(value);

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      setFilters({ ...filters, [name]: value });
    }, 500);
  };

  return (
    <form id="search-form" className={styles.searchForm} role="search">
      <div className={styles.searchBar}>
        <SearchIcon />

        <input
          name="title"
          className={styles.searchInput}
          type="search"
          placeholder="Search for products"
          value={searchText.title}
          aria-label="Search for products"
          onChange={handleChange}
        />
      </div>

      <div>
        <select
          className={styles.searchFilters}
          name="category"
          aria-label="Select category"
          onChange={handleChange}
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
