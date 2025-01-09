import React from "react";
import "./TouristSpots.css";

const TouristSpots = () => (
  <section id="tourist-spots" className="section">
    <div>
      <h2 className="title-section-ts">Tourist Spots</h2>
    </div>
    <div className="tourist-spot-grid">
      <div className="spot">
        <div className="item-pic">
          <img
            className="ph"
            src="src/components/picture/penang-hill.jpeg"
            alt="Penang Hill"
          />
        </div>
        <div className="item-name">
          <h2>Penang Hill</h2>
        </div>
      </div>
      <div className="spot">
        <div className="item-pic">
          <img
            className="gt"
            src="src/components/picture/george-town.jpg"
            alt="George Town"
          />
        </div>
        <div className="item-name">
          <h2>George Town</h2>
        </div>
      </div>
      <div className="spot">
        <div className="item-pic">
          <img
            className="ep"
            src="src/components/picture/escape-penang.jpg"
            alt="ESCAPE Penang"
          />
        </div>
        <div className="item-name">
          <h2>ESCAPE Penang</h2>
        </div>
      </div>
    </div>
  </section>
);

export default TouristSpots;
