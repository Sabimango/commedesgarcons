import "../index.css";

import React from "react";

export const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="footer-col1">
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="footer-col2">
          <img src="Images/comme-des-garcons-logo.png" alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="footer-col3">
          <h3>Useful links</h3>
          <ul>
            <li>History</li>
            <li>Blog post</li>
            <li>Return policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-col4">
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
