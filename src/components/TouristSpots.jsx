import React from "react";
import "./TouristSpots.css";

const TouristSpots = () => (
  <section id="tourist-spots" className="section">
    <div>
      <h2 class="title-section-ts">Tourist Spots</h2>
    </div>
    <div class="tourist-spot-grid">
      <div className="spot">
        <div class="item-pic">        
          <img class="ph" src="src\components\picture\penang-hill.jpeg" alt="Penang Hill" />
        </div>
        <div class="item-name">
          <h2>Penang Hill</h2>
        </div>
      </div>
      <div className="spot">
        <div class="item-pic">
        <img class="gt" src="src\components\picture\george-town.jpg" alt="George Town" />
        </div>
        <div class="item-name">
          <h2>George Town</h2>
        </div>
      </div>
      <div class="spot">
        <div class="item-pic">
        <img class="ep" src="src\components\picture\escape-penang.jpg" />
        </div>
        <div class="item-name">
          <h2>ESCAPE Penang</h2>
        </div>
      </div>
    </div>
  </section>
);

export default TouristSpots;

