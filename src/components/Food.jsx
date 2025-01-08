import React from "react";
import "./Food.css";

const Food = () => (
  <section id="food" className="section">
    <h2 class="title-section-food">Local Food</h2>
    <div class="food-grid">
      <div className="food-item">
        <div>
          <img class="laksa" src="src\components\picture\laksa.jpeg" alt="Laksa"/> 
        </div>
        <h2>Laksa</h2>
      </div>
      <div className="food-item">
        <div>
          <img class="ckt" src="src\components\picture\char-kuey-teow.jpeg" alt="Char Kway Teow" />
        </div>
        <h2>Char Kway Teow</h2>
      </div>
      <div className="food-item">
        <div>
          <img class="pasembur" src="src\components\picture\pasembur.jpg" alt="Pasembur" />
        </div>
        <h2>Pasembur</h2>
      </div>
    </div>
  </section>
);

export default Food;
