import { render, screen } from "@testing-library/react";
import App from "./App";

test("Check title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Foodie/i);
  expect(linkElement).toBeInTheDocument();
});
