import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router";
import { FiltersProvider } from "./context/filters/FiltersProvider.jsx";
import { AuthProvider } from "./context/auth/AuthProvider.jsx";

const HomePage = lazy(() => import("./pages/home/Home.jsx"));
const StorePage = lazy(() => import("./pages/store/Store.jsx"));
const CartPage = lazy(() => import("./pages/cart/Cart.jsx"));
const FavoritesPage = lazy(() => import("./pages/favorites/FavoritesPage.jsx"));
const ProductDetailPage = lazy(() => import("./pages/detail/Detail.jsx"));
const NotFoundPage = lazy(() => import("./pages/404/404.jsx"));

export function App() {
  const location = useLocation();
  const pathName = location.pathname?.split("/")[1];
  const currentPath = pathName ? pathName : "home";

  return (
    <AuthProvider>
        <FiltersProvider>
            <Suspense
              fallback={
                <div className="fallback">Loading {currentPath} page</div>
              }
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route
                  path="/products/:productId"
                  element={<ProductDetailPage />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
        </FiltersProvider>
    </AuthProvider>
  );
}
