// test library
import React from "react";
import { expect } from "vitest";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

// components
import { HireButton, SendButton } from "../Buttons";

describe("Button tests", () => {
  it("should render HireButton component", () => {
    // it test case for HireButton
    const { getByText } = render(<HireButton name={"Hire"} />);
    const buttonElement = getByText(/Hire/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render SendButton component", () => {
    // it test case for SendButton
    const { getByText } = render(<SendButton name={"Send"} />);
    const buttonElement = getByText(/Send/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render SendButton component with icon", () => {
    // it test case for SendButton with icon and click event
    const { getByText } = render(<SendButton name={"Send"} />);
    const buttonElement = getByText(/Send/i);
    fireEvent.click(buttonElement);
    expect(buttonElement).toContainHTML("svg");
  });
});
