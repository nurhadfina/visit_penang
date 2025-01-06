import React from "react";
import "./Food.css";

const Food = () => (
  <section id="food" className="section">
    <h2>Food & Beverages</h2>
    <div class="food-grid">
      <div className="food-item">
        <img class="laksa" src="src\components\picture\laksa.jpeg" alt="Laksa" />
        <p>Laksa: A tangy, spicy noodle soup.</p>
      </div>
      <div className="food-item">
        <img class="ckt" src="src\components\picture\char-kuey-teow.jpeg" alt="Char Kway Teow" />
        <p>Char Kway Teow: Stir-fried noodles with prawns.</p>
      </div>
      <div className="food-item">
        <img class="pasembur" src="src\components\picture\pasembur.jpg" alt="Pasembur" />
        <p>Pasembur: Rojak consisting of shredded vegetables in a spiced sweet dressing.</p>
      </div>
    </div>
  </section>
);

export default Food;
