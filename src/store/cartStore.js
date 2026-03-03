import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const exists = get().isCart(product.id);

    set((state) => ({
      cart: exists
        ? state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...state.cart, { ...product, quantity: 1 }],
    }));
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    }));
  },

  removeQuantityFromCart: (product) => {
    const { removeFromCart, isCart } = get();

    if (product.quantity === 1) {
      removeFromCart(product.id);
      return;
    }

    const exists = isCart(product.id);

    set((state) => ({
      cart: exists
        ? state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
        : null,
    }));
  },

  clearCart: () => {
    set({ cart: [] });
  },

  isCart: (productId) => {
    return get().cart.some((item) => item.id === productId);
  },
}));
