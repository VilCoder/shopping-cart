import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { CartProvider } from "./context/cart";

export function App() {
  return (
    <CartProvider>
      <Header />
      <Main />
    </CartProvider>
  );
}
