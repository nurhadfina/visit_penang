import React from "react";
import "./Hotels.css";

const Hotels = () => (
  <section id="hotels" className="section">
    <h2>Hotels</h2>
    <div class="hotel-grid">
      <div className="hotel">
        <img src="src\components\picture\hotel-1.jpeg" alt="Hotel A" />
        <p>Hotel A: Luxury accommodation with ocean views.</p>
      </div>
      <div className="hotel">
        <img src="src\components\picture\hotel-2.jpeg" alt="Hotel B" />
        <p>Hotel B: Affordable and convenient in the heart of Penang.</p>
      </div>
    </div>
  </section>
);

export default Hotels;
