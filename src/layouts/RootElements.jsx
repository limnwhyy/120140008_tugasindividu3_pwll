// libraries
import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";

// components
import Navbar from "./Navbar";

const RootElements = () => {
  return (
    <>
      <Toaster />
      <Navbar>
        <div className="nav-title">
          <h1>
            LIMN<b>whyy</b>
          </h1>
        </div>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"projects"}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={"contact"}>Contact</NavLink>
          </li>
        </ul>
      </Navbar>
      <Outlet />
    </>
  );
};

export default RootElements;
