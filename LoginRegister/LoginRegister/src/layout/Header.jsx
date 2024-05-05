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
                to={"/register"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
