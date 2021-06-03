import "./index.css";
import React from "react"

return (
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
        <div className="row">
          <div className="col-3">
            <a href="/Product-details/product-1.html"
              ><img src="images/Product-1.jpg" alt=""
            /></a>
            <h4>BELTED TULLE MIDI DRESS</h4>
            <p>€ 775</p>
          </div>
          <div className="col-3">
            <a href="/Product-details/product-2.html"
              ><img src="images/Product-2.jpg" alt=""
            /></a>
            <h4>TULLE CROP TOP</h4>
            <p>€ 450</p>
          </div>
          <div className="col-3">
            <a href="/Product-details/product-3.html"
              ><img src="images/Product-3.jpg" alt=""
            /></a>
            <h4>RUFFLE-TRIMMED MIDI DRESS</h4>
            <p>€ 610</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <a href="/Product-details/product-4.html"
              ><img src="images/Product-4.jpg" alt=""
            /></a>
            <h4>BOW-EMBELISHED MIDI DRESS</h4>
            <p>€ 1,160</p>
          </div>
          <div className="col-3">
            <a href="/Product-details/product-5.html"
              ><img src="images/Product-5.jpg" alt=""
            /></a>
            <h4>PINK TULLE-TRIMMED MIDI SKIRT</h4>
            <p>€ 650</p>
          </div>
          <div className="col-3">
            <a href="/Product-details/product-6.html"
              ><img src="images/Product-6.jpg" alt=""
            /></a>
            <h4>LEATHER PLATFORM ANKLE BOOTS</h4>
            <p>€ 1,480</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <a href="/Product-details/product-7.html"
              ><img src="images/Product-7.jpg" alt=""
            /></a>
            <h4>LASER-CUT LEATHER BROGUES</h4>
            <p>€ 830</p>
          </div>
          <div className="col-3">
            <a href="/Product-details/product-8.html"
              ><img src="images/product-8.jpg" alt=""
            /></a>
            <h4>BLACK TULLE-TRIMMED MIDI SKIRT</h4>
            <p>€ 650</p>
          </div>
          <div className="col-3">
            <a href="/Product-details/product-9.html"
              ><img src="images/product-9.jpg" alt=""
            /></a>
            <h4>DIAMOND-QUILTED COTTON TOP</h4>
            <p>€ 475</p>
          </div>
        </div>
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