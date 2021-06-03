import "./index.css";
import React from "react"

return (
  <div>
    <div className="mini-container single-product">
      <row>
        <div className="col-2">
          <img className="product-det" src="../images/Product-3.jpg" width="100%" />
        </div>
        <div className="col-2">
          <p>Home/Products</p>
          <h1>RUFFLE-TRIMMED MIDI DRESS</h1>
          <h3>€ 610</h3>
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
            Reinvigorate your sundress rotation with this pink midi dress from
            noir kei ninomiya. Made from crisp cotton to a floaty trapeze
            silhouette, it's topped with slender shoulder straps for a graceful
            look. We think the eye-catching ruffle trim is the perfect way to
            commemorate the resumption of social gatherings.
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
    