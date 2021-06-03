import "./index.css";
import React, { useState } from "react";

export const ProductDetails = ({
  name,
  price,
  currency,
  sizes,
  details,
  id,
  setCart
}) => {
  return (
    <div>
      <div className="mini-container single-product">
        <row>
          <div className="col-2">
            <img
              className="product-det"
              src="../images/Product-1.jpg"
              width="100%"
            />
          </div>
          <div className="col-2">
            <p>Home/Products</p>
            <h1>{name}</h1>
            <h3>
              {currency} {price}
            </h3>
            <br />
            <select>
              <option>Select Size</option>
              {sizes.map(size => (
                <option>{size}</option>
              ))}
            </select>
            <input type="number" value="1" />
            <a href="" className="btn">
              Add to Cart
            </a>
            <h4>Product Details</h4>
            <br />
            <p>
              The statement is yours to make with this sculptural tulle dress
              from noir kei ninomiya. The design stays true to the label's dark
              aesthetic in jet black, and it secures at the chest with a
              belt-style harness before cascading into panels of layered tulle
              of various lengths. We envision it creating a distinctive
              silhouette when worn over slim-fitting black separates.
            </p>
          </div>
        </row>
      </div>
      <div className="mini-container">
        <div className="row row-2">
          <h2>Related Products</h2>
        </div>
      </div>
      <div className="categories">
        <div className="mini-container">
          <div className="row">
            <div className="col-3">
              <img src="../images/Product-7.jpg" alt="" />
              <h4>LASER-CUT LEATHER BROGUES</h4>
              <p>€ 830</p>
            </div>
            <div className="col-3">
              <img src="../images/product-8.jpg" alt="" />
              <h4>BLACK TULLE-TRIMMED MIDI SKIRT</h4>
              <p>€ 650</p>
            </div>
            <div className="col-3">
              <img src="../images/product-9.jpg" alt="" />
              <h4>DIAMOND-QUILTED COTTON TOP</h4>
              <p>€ 475</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
