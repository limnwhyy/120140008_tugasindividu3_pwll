// testing library
import React from "react";
import { expect } from "vitest";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

// components
import Footer from "../Footer";

describe("Footer component", () => {
  test("renders footer text", () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText(/limnwhyy/i);
    expect(footerElement).toBeInTheDocument();
  });
});
