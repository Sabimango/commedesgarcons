import "../index.css";

import React from "react";
import { useMatch } from "@reach/router";

export const ProductDetails = ({ items, addToCart }) => {
  const match = useMatch("/products/:id");
  const product = items.find(item => item.id === Number(match.id));

  return (
    <div>
      <div className="mini-container single-product">
        <row>
          <div className="col-2">
            <img
              className="product-det"
              src={`../images/Product-${product.id}.jpg`}
              width="100%"
            />
          </div>
          <div className="col-2">
            <p>Home/Products</p>
            <h1>{product.name}</h1>
            <h3>
              {product.currency} {product.price}
            </h3>
            <br />
            <select>
              <option>Select Size</option>
              {product.sizes.map(size => (
                <option>{size}</option>
              ))}
            </select>
            <input type="number" value="1" />
            <button onClick={() => addToCart(product)} className="btn">
              Add to Cart
            </button>

            <h4>Product Details</h4>
            <br />
            <p>{product.details}</p>
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
