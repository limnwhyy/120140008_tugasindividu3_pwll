// testing library
import React from "react";
import { expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// components
import Beranda from "../Beranda";
import Proyek from "../Proyek";
import Kontak from "../Kontak";

describe("Pages", () => {
  test("renders Beranda page", () => {
    render(
      <BrowserRouter>
        <Beranda />
      </BrowserRouter>
    );
    expect(
      screen.getByText(/muhammad muslim nur wahyudi/i)
    ).toBeInTheDocument();
  });

  test("renders Proyek page", () => {
    render(
      <BrowserRouter>
        <Proyek />
      </BrowserRouter>
    );
    expect(screen.getByText(/state component/i)).toBeInTheDocument();
  });

  test("renders Kontak page", () => {
    render(
      <BrowserRouter>
        <Kontak />
      </BrowserRouter>
    );
    expect(screen.getByText(/contact me/i)).toBeInTheDocument();
  });
});
