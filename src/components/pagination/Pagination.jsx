import styles from "./Pagination.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "../Icons.jsx";

export function Pagination({ onPageChange, currentPage = 1, totalPages = 5 }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const hasPages = pages.length > 0;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const stylePrevButton = isFirstPage
    ? { pointerEvents: "none", opacity: 0.4 }
    : {};
  const styleNextButton = isLastPage
    ? { pointerEvents: "none", opacity: 0.4 }
    : {};

  const handlePrevClick = (event) => {
    event.preventDefault();

    if (isFirstPage === false) {
      onPageChange(currentPage - 1);
    }
  };

  const handleChangePage = (event, page) => {
    event.preventDefault();

    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    if (isLastPage === false) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <>
      {hasPages && (
        <nav className={styles.pagination}>
          <a
            href="#"
            style={stylePrevButton}
            onClick={handlePrevClick}
            aria-label="Previous Page"
          >
            <ChevronLeftIcon />
          </a>

          {pages?.map((page) => (
            <a
              aria-label={`Page ${page}`}
              key={page}
              href="#"
              className={currentPage === page ? styles.isActive : ""}
              onClick={(event) => handleChangePage(event, page)}
            >
              {page}
            </a>
          ))}

          <a
            href="#"
            style={styleNextButton}
            onClick={handleNextClick}
            aria-label="Next Page"
          >
            <ChevronRightIcon />
          </a>
        </nav>
      )}
    </>
  );
}
