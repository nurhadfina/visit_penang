import React from "react";
import "../styles/Hero.css";

const Hero = () => (
  <div className="hero">
    {/* Background Video */}
    <video autoPlay muted loop playsInline>
      <source src="sunrise.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Content */}
    <h1>Welcome to Penang</h1>
    <p>Explore the beauty, culture, and cuisine of Penang.</p>
    <button>Start Your Journey</button>
  </div>
);

export default Hero;
