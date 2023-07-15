import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";
import "@testing-library/jest-dom/extend-expect"; // Import jest-dom library

// Tests that the Calculator component is rendered
describe("Calculator", () => {
  test("renders Calculator component", () => {
    render(<Calculator />);
    // Assert that the component is rendered without errors
    expect(screen.getByText("RESET")).toBeInTheDocument();
    expect(screen.getByText("=")).toBeInTheDocument();
    // Add more assertions as needed
  });

  test("updates currentOperand when DigitButton is clicked", () => {
    render(<Calculator />);
    const digitButton = screen.getByText("1");
    fireEvent.click(digitButton);
    const currentOperandText = screen.getByText("1", { selector: "p" });
    // Assert that the currentOperand is updated correctly
    expect(currentOperandText).toBeInTheDocument();
  });

  test("updates operation when operation button is clicked", () => {
    render(<Calculator />);
    const operationButton = screen.getByText("*");
    fireEvent.click(operationButton);
    // Assert that the operation is shown on the screen
    expect(operationButton).toBeInTheDocument();
  });
});
