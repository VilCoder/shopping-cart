import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./components/home/Home";
import { CartProvider } from "./context/cart";

export function App() {
  return (
    <CartProvider>
      <Navigation />
      <Home />
    </CartProvider>
  );
}
