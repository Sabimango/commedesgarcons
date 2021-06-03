import "./index.css";
import React from "react"

return (
  <div>
    <div className="mini-container single-product">
      <row>
        <div className="col-2">
          <img className="product-det" src="../images/Product-4.jpg" width="100%" />
        </div>
        <div className="col-2">
          <p>Home/Products</p>
          <h1>BOW-EMBELISHED MIDI DRESS</h1>
          <h3>€ € 1,160</h3>
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
            When a special occasion calls for dressing up – or when you simply
            fancy feeling glamourous – don this frock from noir kei ninomiya.
            Made in Japan from bubblegum pink tulle, it has a pinafore
            silhouette, with bows running from the shoulder straps to the hem.
            Wear yours over a simple white T-shirt to keep it in focus.
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