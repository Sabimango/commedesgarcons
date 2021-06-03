import "./index.css";

import { Link } from "@reach/router";
import React from "react";

export const Header = ({setIsOpen}) => (
  <header>
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img
            src="images/comme-des-garcons-logo.png"
            alt="logo"
            width="175px"
          />
        </div>
        <nav>
          <ul id="MenuItems">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
          </ul>
        </nav>

        <i onClick={() => setIsOpen(true)} className="fas fa-shopping-cart"></i>

        <img src="images/menu.png" className="menu-icon" />
      </div>
    </div>
  </header>
);
