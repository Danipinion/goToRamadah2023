import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <NavLink className="">Go to Ramadhan</NavLink>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink to="/" className="" href="#">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className="" href="#">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
