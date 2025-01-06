import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <input class="search-bar" type="text" placeholder="Search"></input>
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#tourist-spots">Tourist Spots</a></li>
      <li><a href="#food">Food & Beverages</a></li>
      <li><a href="#hotels">Hotels</a></li>
    </ul>
  </nav>
);

export default Navbar;
