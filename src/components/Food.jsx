import React from "react";
import "./Food.css";

const Food = () => (
  <section id="food" className="section">
    <h2 className="title-section-food">Local Food</h2>
    <div className="food-grid">
      <div className="food-item">
        <div className="item-pic">
          <img src="src/components/picture/laksa.jpeg" alt="Laksa" />
        </div>
        <div>
          <h2>Laksa</h2>
        </div>
      </div>
      <div className="food-item">
        <div className="item-pic">
          <img src="src/components/picture/char-kuey-teow.jpeg" alt="Char Kway Teow" />
        </div>
        <div>
          <h2>Char Kway Teow</h2>
        </div>
      </div>
      <div className="food-item">
        <div className="item-pic">
          <img src="src/components/picture/pasembur.jpg" alt="Pasembur" />
        </div>
        <div>
          <h2>Pasembur</h2>
        </div>
      </div>
    </div>
  </section>
);

export default Food;
