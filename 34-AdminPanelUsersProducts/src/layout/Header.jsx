import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div>
      <header>
        <h1>Logo</h1>
        <nav>
          <ul>
          <li>
              <NavLink
                to={"/"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/users"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/post"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Post
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
