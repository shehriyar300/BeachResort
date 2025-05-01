import React from "react";
import "../Components/HomeStyle.css";

function Featured() {
  return (
    <>
      <h1 className="services_h1">Featured Rooms</h1>

      <div className="featured">
        <div className="featured_cards im1">
          <div className="fature_text">
            <div>
              <p>Family Deluxe</p>
              <p>$500 per night</p>
            </div>
            <div>
              <h2>Features</h2>
            </div>
          </div>
        </div>
        <div className="featured_cards im2">
          <div className="fature_text">
            <div>
              <p>Family Deluxe</p>
              <p>$500 per night</p>
            </div>
            <div>
              <h2>Features</h2>
            </div>
          </div>
        </div>
        <div className="featured_cards im3">
          <div className="fature_text">
            <div>
              <p>Family Deluxe</p>
              <p>$500 per night</p>
            </div>
            <div>
              <h2>Features</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
