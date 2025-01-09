import React from "react";
import "./Food.css";

const Food = () => (
  <section id="food" className="section">
    <h2 class="title-section-food">Local Food</h2>
    <div class="food-grid">
      <div className="food-item">
        <div>
          <img class="item-pic" src="src\components\picture\laksa.jpeg" alt="Laksa"/> 
          <h2>Laksa</h2>
        </div>
      </div>
      <div className="food-item">
        <div>
          <img class="item-pic" src="src\components\picture\char-kuey-teow.jpeg" alt="Char Kway Teow" />
          <h2>Char Kway Teow</h2>

        </div>
      </div>
      <div className="food-item">
        <div>
          <img class="item-pic" src="src\components\picture\pasembur.jpg" alt="Pasembur" />
          <h2>Pasembur</h2>

        </div>
      </div>
    </div>
  </section>
);

export default Food;
