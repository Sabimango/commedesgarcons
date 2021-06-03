import "../index.css";

import { Link } from "@reach/router";
import React from "react";

export const Products = ({ items, addToCart }) => (
  <div>
    <div className="categories">
      <div className="mini-container">
        <div className="row row-2">
          <h2>ALL PRODUCTS</h2>
          <select>
            <option>Sort by new arrivals</option>
            <option>Sort by price</option>
            <option>Sort by popularity</option>
          </select>
        </div>

        {items.map(item => (
          <Link to={`/products/${item.id}`}>
            <div className="row">
              <div className="col-3">
                <img src={`images/Product-${item.id}.jpg`} alt="" />
                <h4>{item.name}</h4>
                <p>
                  {item.currency} {item.price}
                </p>
              </div>
            </div>
          </Link>
        ))}

        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div>
    </div>
  </div>
);
