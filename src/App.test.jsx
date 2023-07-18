import { render } from "@testing-library/react";
import App from "./App";

test("jest is working", () => {
  expect(true).toBe(true);
});

test("test renders calculator component", () => {
  render(<App />);
});
