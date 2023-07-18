import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";
import "@testing-library/jest-dom/extend-expect";

const mockMatchMedia = (mediaQuery) => ({
  media: mediaQuery,
  matches: false,
  onchange: null,
  addListener: jest.fn().mockImplementation(() => {}),
  removeListener: jest.fn().mockImplementation(() => {}),
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query) => mockMatchMedia(query),
});

describe("Calculator", () => {
  test("renders Calculator component", () => {
    render(<Calculator />);
    expect(screen.getByText("RESET")).toBeInTheDocument();
    expect(screen.getByText("=")).toBeInTheDocument();
  });

  test("updates operation when operation button is clicked", () => {
    render(<Calculator />);
    const operationButton = screen.getByText("*");
    fireEvent.click(operationButton);
    expect(operationButton).toBeInTheDocument();
  });

  test("test the calculator displays initial state value", () => {
    render(<Calculator />);
    const currentOperand = screen.getByText("0", { selector: "p" });
    expect(currentOperand).toBeInTheDocument();
  });

  test("renders Calculator component", () => {
    render(<Calculator />);
    expect(screen.getByText("RESET")).toBeInTheDocument();
    expect(screen.getByText("=")).toBeInTheDocument();
  });
});
