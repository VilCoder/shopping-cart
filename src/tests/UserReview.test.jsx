import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Score, UserReview } from "../components/reviews/UserReview.jsx";

vi.mock("../components/Icons", () => ({
  StarIcon: (props) => (
    <div data-testid="star-icon" className={props.className} />
  ),
}));

describe("Score component", () => {
  it("renders exactly 5 stars", () => {
    render(<Score score={3} />);

    const stars = screen.getAllByTestId("star-icon");
    expect(stars).toHaveLength(5);
  });

  it("fills to stars according to the score", () => {
    render(<Score score={2} />);

    const stars = screen.getAllByTestId("star-icon");
    const filledStars = stars.filter((star) =>
      star.className.includes("filled")
    );
    expect(filledStars).toHaveLength(2);
  });

  it("does not fill any stars when score = 0", () => {
    render(<Score score={0} />);

    const stars = screen.getAllByTestId("star-icon");
    const filledStars = stars.filter((star) =>
      star.className.includes("filled")
    );
    expect(filledStars).toHaveLength(0);
  });
});

describe("UseReview component", () => {
  const mockProps = {
    avatar: "/avatar.png",
    name: "John Doe",
    description: "Excellent service and product quality!",
    score: 4,
  };

  it("renders user data correctly", () => {
    render(<UserReview {...mockProps} />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockProps.avatar);
    expect(img).toHaveAttribute("alt", mockProps.name);

    expect(
      screen.getByRole("heading", { name: mockProps.name })
    ).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });

  it("defaults to score = 0 when not provided", () => {
    render(
      <UserReview
        avatar={mockProps.avatar}
        name={mockProps.name}
        description={mockProps.description}
      />
    );

    const stars = screen.getAllByTestId("star-icon");
    expect(stars).toHaveLength(5);

    const filledStars = stars.filter(star => star.className.includes("filled"));
    expect(filledStars).toHaveLength(0);
  });
});
