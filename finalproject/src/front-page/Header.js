import "./index.css";
import React from "react"

export const Header =()=> (
    <header>
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src="images/comme-des-garcons-logo.png" width="175px" />
        </div>
        <nav>
          <ul id="MenuItems">
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Gallery</a></li>
          </ul>
        </nav>
        <i className="fas fa-shopping-cart"></i>
        <img src="images/menu.png" className="menu-icon" />
      </div>
    </div>
  </header>
);