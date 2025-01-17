import React from "react";
import "../styles/TouristSpots.css";

const TouristSpots = () => {
  // Function to handle picture interaction
  const handlePictureClick = (spotName) => {
    alert(`You clicked on ${spotName}`);
  };

  return (
    <section id="tourist-spots" className="section">
      <div>
        <h2 className="title-section-ts">Tourist Spots</h2>
      </div>
      <div className="tourist-spot-grid">
        <div className="spot">
          <div className="item-pic" onClick={() => handlePictureClick("Penang Hill")}>
            <img
              className="ph"
              src="/picture/penang-hill.jpeg"
              alt="Penang Hill"
            />
          </div>
          <div className="item-name">
            <h2>Penang Hill</h2>
          </div>
        </div>
        <div className="spot">
          <div className="item-pic" onClick={() => handlePictureClick("George Town")}>
            <img
              className="gt"
              src="/picture/george-town.jpg"
              alt="George Town"
            />
          </div>
          <div className="item-name">
            <h2>George Town</h2>
          </div>
        </div>
        <div className="spot">
          <div className="item-pic" onClick={() => handlePictureClick("ESCAPE Penang")}>
            <img
              className="ep"
              src="/picture/escape-penang.jpg"
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
};

export default TouristSpots;
