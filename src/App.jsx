import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TouristSpots from "./components/TouristSpots";
import Food from "./components/Food";
import Hotels from "./components/Hotels";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <TouristSpots />
    <Food />
    <Hotels />
    <Footer />
  </div>
);

export default App;
