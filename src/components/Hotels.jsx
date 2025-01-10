import React from "react";
import "./Hotels.css";

const Hotels = () => (
  <section id="hotels" className="section">
    <h2 class="title-section-hotel">Hotels</h2>
    <div class="hotel-grid">
      <div className="hotel">
        <div class="hotel-img">
          <img src="src\components\picture\hotel-1.jpeg" alt="Hotel A" />
        </div>
        <div>
          <h2>Angsana Teluk Bahang</h2>
        </div>
      </div>
      <div className="hotel">
        <div class="hotel-img">
          <img src="src\components\picture\hotel-2.jpeg" alt="Hotel B" />
        </div>
        <div>
        <h2>Hard Rock Hotel</h2>
        </div>
      </div>
      <div className="hotel">
        <div class="hotel-img">
          <img src="src\components\picture\hotel-3.jpg" alt="Hotel C" />
        </div>
        <div>
          <h2>PARKROYAL Penang</h2>
        </div>
      </div>
    </div>
  </section>
);

export default Hotels;
