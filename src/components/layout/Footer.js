import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <img src="./images/logo2.png" alt="logo2" />
        <div className="texts-and-links">
          <div>
            <h5>Doormat Navigation</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu-page">Order Online</Link>
              </li>
              <li>
                <Link to="/booking-page">Reservation</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                <Link to="/contact">Address</Link>
              </li>
              <li>
                <Link to="/contact">Phone Number</Link>
              </li>
              <li>
                <Link to="/contact">Email</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Social Media Links</h5>
            <ul>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
