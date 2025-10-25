import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Modal } from "../components/modal/Modal";
import styles from "../components/modal/Modal.module.css";

describe("Modal component", () => {
  it("enders correctly with minimum props", () => {
    render(<Modal text="Product added to cart" />);

    const modalElement = screen.getByTestId("modal");

    expect(modalElement).toBeInTheDocument();
    expect(modalElement).toHaveClass(styles.modal);
    expect(modalElement).not.toHaveClass(styles.success);
    expect(modalElement).not.toHaveClass(styles.error);
    expect(modalElement).not.toHaveClass(styles.show);
  });

  it("applies 'success' class when type is success", () => {
    render(<Modal text="Added" type="success" />);

    const modalElement = screen.getByTestId("modal");

    expect(modalElement).toHaveClass(styles.success);
    expect(modalElement).not.toHaveClass(styles.error);
  });

  it("applies 'error' class when type is error", () => {
    render(<Modal text="Product removed" type="error" />);

    const modalElement = screen.getByTestId("modal");

    expect(modalElement).toHaveClass(styles.error);
    expect(modalElement).not.toHaveClass(styles.success);
  });

  it("applies 'show' class when show prop is true", () => {
    render(<Modal text="Product added to cart" show />);

    const modalElement = screen.getByTestId("modal");

    expect(modalElement).toHaveClass(styles.show);
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
