import "./index.css";
import React from "react"

export const MainContent =()=> (
    <div>
<div className="row">
        <div className="col-2">
          <h1>
            noir <br />
            kei ninomiya
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />雨が降っている。 ブラウンさんをお願いします。
          </p>
          <a href="" className="btn">Discover SS21 Now</a>
        </div>
        <div className="col-2">
          <img src="Images/front-image.jpg" />
        </div>
      </div>
      <div className="categories">
      <div className="mini-container">
        <h2 className="title">FEATURED ITEMS</h2>
        <div className="row">
          <div className="col-3">
            <img src="images/featured-1.jpg" alt="" />
            <h4>BELTED TULLE MIDI DRESS</h4>
            <p>€ 775</p>
          </div>
          <div className="col-3">
            <img src="images/featured-2.jpg" alt="" />
            <h4>LEATHER PLATFORM ANKLE BOOTS</h4>
            <p>€ 1,480</p>
          </div>
          <div className="col-3">
            <img src="images/featured-3.jpg" alt="" />
            <h4>TULLE-TRIMMED MIDI DRESS</h4>
            <p>€ 1,225</p>
          </div>
        </div>
      </div>
    </div>
    <div className="info">
      <div className="mini-container">
        <div className="row-1">
          <div className="col-4">
            <img src="images/info-picture.jpg" alt="" />
          </div>
          <div className="col-4">
            <p>enter noir kei ninomiya vision</p>
            <h1>runway since 1990</h1>
            <small
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              pariatur ratione quia eum quidem aperiam eius? 雨が降っている。
              ブラウンさんをお願いします。</small
            >
            <br />
            <a href="" className="btn">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
    </div>
);