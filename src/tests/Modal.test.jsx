import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Modal } from "../components/modal/Modal";
import styles from "../components/modal/Modal.module.css";

describe("Modal component", () => {
  it("renders correctly with minimum props", () => {
    render(<Modal text="Product added to cart" />);

    const modal = screen.getByTestId("modal");

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass(styles.modal);
    expect(modal).not.toHaveClass(styles.success);
    expect(modal).not.toHaveClass(styles.error);
    expect(modal).not.toHaveClass(styles.show);
  });

  it("applies 'success' class when type is success", () => {
    render(<Modal text="Added" type="success" />);

    const modal = screen.getByTestId("modal");
    expect(modal).toHaveClass(styles.success);
    expect(modal).not.toHaveClass(styles.error);
  });

  it("applies 'error' class when type is error", () => {
    render(<Modal text="Product removed" type="error" />);

    const modal = screen.getByTestId("modal");
    expect(modal).toHaveClass(styles.error);
    expect(modal).not.toHaveClass(styles.success);
  });

  it("renders children elements inside the modal", () => {
    render(
      <Modal text="Product added to cart">
        <span data-testid="children">icon</span>
      </Modal>
    );

    const child = screen.getByTestId("children");
    expect(child).toBeInTheDocument();
    expect(child.textContent).toBe("icon");
  });
});
