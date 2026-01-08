import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useCart } from "../hooks/useCart.js";
import { CartContext } from "../context/cart";
import React from "react";

describe("useCart hook", () => {
  it("it throws an error if used outside of the cartProvider", () => {
    expect(() => renderHook(() => useCart())).toThrow();
  });

  it("renders the cart context if used within the provider", () => {
    const mockContextValue = {
      cart: [{ id: 1, name: "Laptop" }],
      addToCart: vi.fn(),
      clearCart: vi.fn(),
    };

    const wrapper = ({ children }) =>
      React.createElement(CartContext.Provider, { value: mockContextValue }, children);

    const { result } = renderHook(() => useCart(), { wrapper });

    expect(result.current).toBe(mockContextValue);
    expect(result.current.cart).toHaveLength(1);
  })
})