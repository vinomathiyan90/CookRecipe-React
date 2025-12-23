import React from "react";
import "../style.css";
import Lottie from "lottie-react";
import burgerAnim from "../assets/Pizza Slices.json";

export default function StickyNavbar() {
  return (
    <nav className="navbar-container">
      
      <div className="nav-left">
        {/* LOGO */}
        <h1 className="nav-logo">Steakhouse</h1>

        {/* BLACK BG WRAPPER FOR BURGER */}
        <div className="burger-black-bg">
          <Lottie
            animationData={burgerAnim}
            loop
            autoplay
            style={{ width: 100, height: 100 }}
          />
        </div>
      </div>

      {/* MENU */}
      <ul className="nav-menu">
        <li className="active">Home</li>
        <li>About Us</li>
        <li>Menu</li>
        <li>Events</li>
        <li>Contact</li>
        <li>Reservations</li>
        <li>EN ▾</li>
      </ul>

    </nav>
  );
}