// testing library
import React from "react";
import { expect } from "vitest";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

// components
import Header from "../Header";

describe("Header component", () => {
  it("renders title and description", () => {
    const title = "My Title";
    const desc = "My Description";
    const { getByText } = render(<Header title={title} desc={desc} />);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(desc)).toBeInTheDocument();
  });
});
