import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("../../hooks/useCarrousel", () => ({
  useCarrousel: vi.fn(),
}));

import * as useCarrouselHook from "../hooks/useCarrousel.js";
import { Carrousel } from "../components/carrousel/Carrousel.jsx";

describe("Carrousel component", () => {
  const mockMessages = [
    {
      id: 0,
      imageUrl: "/image1.png",
      title: "Up to 50% off electronics",
      text: "Limited-times offers",
    },
    {
      id: 1,
      imageUrl: "/image2.png",
      title: "Free shipping on your first purchase",
      text: "Applies to all products",
    },
    {
      id: 2,
      imageUrl: "/image3.jpg",
      title: "Summer Sale!",
      text: "Up to 50% off select collections. Don't miss out!",
    },
  ];

  it("renders all carousel items", () => {
    vi.spyOn(useCarrouselHook, "useCarrousel").mockReturnValue({
      activeElement: 0,
    });

    render(<Carrousel />);

    const items = screen.getAllByRole("heading");
    expect(items).toHaveLength(mockMessages.length);
    expect(screen.getByText(/up to 50% off electronics/i)).toBeInTheDocument();
    expect(screen.getByText(/free shipping/i)).toBeInTheDocument();
    expect(screen.getByText(/summer sale/i)).toBeInTheDocument();
  });

  it("adds the 'active' class to the active carousel item", () => {
    vi.spyOn(useCarrouselHook, "useCarrousel").mockReturnValue({
      activeElement: 1,
    });

    render(<Carrousel />);

    const carrouselItems = screen.getAllByRole("heading");
    const activeItem = carrouselItems[1];
    expect(activeItem).toHaveTextContent(/free shipping/i);
  });
});
