// testing library
import React from "react";
import { expect } from "vitest";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

// components
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
  });

  it("renders children", () => {
    const { getByText } = render(
      <Navbar>
        <div>Child Component</div>
      </Navbar>
    );
    expect(getByText("Child Component")).toBeInTheDocument();
  });
});
