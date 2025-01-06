import React from "react";
import "./TouristSpots.css";

const TouristSpots = () => (
  <section id="tourist-spots" className="section">
    <h2 class="title-section">Tourist Spots</h2>
    <div class="tourist-spot-grid">
      <div className="spot-1">
        <img class="ph" src="src\components\picture\penang-hill.jpeg" alt="Penang Hill" />
        <p>Penang Hill: Breathtaking views and cool breezes.</p>
      </div>
      <div className="spot-2">
        <img class="gt" src="src\components\picture\george-town.jpg" alt="George Town" />
        <p>George Town: A UNESCO heritage site with murals and history.</p>
      </div>
      <div class="spot-3">
        <img class="ep" src="src\components\picture\escape-penang.jpg" />
        <p>ESCAPE Penang: Malaysia's Record Breaking Theme Park</p>
      </div>
    </div>
  </section>
);

export default TouristSpots;

