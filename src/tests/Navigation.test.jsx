import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Navigation } from "../components/navigation/Navigation.jsx";

// We mock the hook that the Navigation uses
vi.mock("../hooks/useCart", () => ({
  useCart: () => ({
    cart: [{ id: 1, title: "Test product" }],
    addToCart: vi.fn(),
    clearCart: vi.fn(),
  }),
}));

describe("Navigation component", () => {
  it("renders correct heading", () => {
    render(<Navigation />);

    expect(screen.getByRole("heading").textContent).not.toBeNull();
  });

  it("shows number of items in the cart", () => {
    render(<Navigation />);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("renders all links", () => {
    render(<Navigation />);

    const links = screen.getAllByRole("link");
    expect(links.length).toBe(4);
    expect(links[0].textContent).not.toBeNull();
    expect(links[1].textContent).toMatch(/home/i);
    expect(links[2].textContent).toMatch(/store/i);
    expect(links[3].textContent).toMatch(/cart/i);
  });
});
