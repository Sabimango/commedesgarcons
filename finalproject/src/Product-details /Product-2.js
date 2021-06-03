import "./index.css";
import React from "react"

return (
  <div>
    <div className="mini-container single-product">
      <row>
        <div className="col-2">
          <img className="product-det" src="../images/Product-2.jpg" width="100%" />
        </div>
        <div className="col-2">
          <p>Home/Products</p>
          <h1>TULLE CROP TOP</h1>
          <h3>€ 450</h3>
          <br />
          <select>
            <option>Select Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
          </select>
          <input type="number" value="1" />
          <a href="" className="btn">Add to Cart</a>
          <h4>Product Details</h4>
          <br />
          <p>
            noir kei ninomiya reimagines a bondage-themed silhouette through a
            softer lens; creating this black harness-style crop top from black
            tulle complete with exaggerated bow detailing. An avant-garde
            layering piece, style it over a simple white T-shirt to keep its
            details in focus.
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