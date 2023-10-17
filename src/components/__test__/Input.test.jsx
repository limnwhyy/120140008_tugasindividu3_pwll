// test library
import React from "react";
import { expect } from "vitest";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

// components
import { EmailInput, TextAreaInput, TextInput } from "../Input";

// Tests for TextInput
describe("TextInput", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <TextInput placeholder="Enter your name" />
    );
    expect(getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });
});

// Tests for EmailInput
describe("EmailInput", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <EmailInput placeholder="Enter your email" />
    );
    expect(getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });
});

// Tests for TextAreaInput here
describe("TextAreaInput", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <TextAreaInput placeholder="Enter your message" />
    );
    expect(getByPlaceholderText("Enter your message")).toBeInTheDocument();
  });
});
