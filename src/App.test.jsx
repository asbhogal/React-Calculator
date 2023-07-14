import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// Tests to see if Jest is working correctly
test("jest is working", () => {
  expect(true).toBe(true);
});

// Tests that the Calculator component renders without crashing
it("test_renders_calculator_component", () => {
  render(<App />);
  expect(screen.getByText(/RESET/i)).toBeInTheDocument();
});
