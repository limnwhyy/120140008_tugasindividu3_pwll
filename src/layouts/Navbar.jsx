import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = ({ children }) => {
  return <nav>{children}</nav>;
};

export default Navbar;
