import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div class="footer-section">
      <h1 class="about-us">About Us</h1>
      <div class="contact-us-desc">
        <p>
          Set up to promote, market and generate tourism for the Penang State 
          in Malaysia, Penang Global Tourism is a tourism bureau which serves 
          as a focal point for coordinating all tourism activities. PGT, as 
          it is affectionately known, works closely with various key tourism 
          industry players locally and abroad. PGT participates in overseas 
          sales missions at world-renowned trade shows, and the exposure has 
          contributed to Penang’s popularity as a destination, investment and 
          home of choice for many from around the world.
        </p>
      </div>
      <p>&copy; 2025 Visit Penang. All rights reserved.</p>
      <ul>
        <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
        <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
