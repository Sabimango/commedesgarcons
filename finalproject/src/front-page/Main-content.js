import "../index.css";

import React from "react";

export const MainContent = () => {
  const itemsToFeature = [
    { name: "BELTED TULLE MIDI DRESS", price: "775", currency: "€" },
    { name: "LEATHER PLATFORM ANKLE BOOTS", price: "1,480", currency: "€" },
    { name: "TULLE-TRIMMED MIDI DRESS", price: "1,225", currency: "€" },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <h1>
            noir <br />
            kei ninomiya
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            雨が降っている。 ブラウンさんをお願いします。
          </p>

          <a href="" className="btn">
            Discover SS21 Now
          </a>
        </div>

        <div className="col-2">
          <img alt="front" src="Images/front-image.jpg" />
        </div>
      </div>

      <div className="categories">
        <div className="mini-container">
          <h2 className="title">FEATURED ITEMS</h2>
          <div className="row">
            <div className="col-3">
              {itemsToFeature.map((item, index) => (
                <div style={{ marginBottom: 16 }}>
                  <img
                    src={`images/featured-${index + 1}.jpg`}
                    alt={`${item.name}`}
                  />
                  <h4>{item.name}</h4>
                  <p>
                    {item.currency} {item.price}
                  </p>
                </div>
              ))}
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
              <small>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                pariatur ratione quia eum quidem aperiam eius? 雨が降っている。
                ブラウンさんをお願いします。
              </small>

              <br />

              <a href="" className="btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
