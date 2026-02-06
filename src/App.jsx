import { Routes, Route } from "react-router";
import { CartProvider } from "./context/cart/CartProvider.jsx";
import { FiltersProvider } from "./context/filters/FiltersProvider.jsx";
import { Home } from "./pages/home/Home.jsx";
import { Store } from "./pages/store/Store.jsx";
import { Cart } from "./pages/cart/Cart.jsx";
import { NotFoundPage } from "./pages/404/404.jsx";
import { ProductDetail } from "./pages/detail/Detail.jsx";

export function App() {
  return (
    <CartProvider>
      <FiltersProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </FiltersProvider>
    </CartProvider>
  );
}
