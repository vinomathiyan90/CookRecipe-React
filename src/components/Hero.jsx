import React, { useEffect, useState } from "react";
import "../style.css";
import Lottie from "lottie-react";

import chefAnim from "../assets/Delivery.json";
import Cooking from "../assets/Cooking.json";

export default function Hero() {
  return (
    <section className="hero-container">

      {/* LEFT TEXT */}
      <div className="hero-left">
        <h1 className="hero-title hero-drop">

          {/* Line 1 */}
          <div className="drop-line" style={{ animationDelay: "0s" }}>
            A Premium
          </div>

          {/* Line 2 — JOINED PROPERLY */}
          <div className="drop-line" style={{ animationDelay: "0.25s" }}>
            And Authentic
          </div>

          {/* Line 3 */}
          <div className="drop-line highlight" style={{ animationDelay: "0.45s" }}>
            Steakhouse
          </div>

        </h1>


        <button className="hero-btn">Book A Table</button>
      </div>

      {/* MAIN CIRCLE — FIXED */}
      <div className="hero-right">
        <div className="hero-image-circle">
          <img
            src="https://img.freepik.com/premium-photo/grilled-veal-fillet-meat-steak-pan-with-herbs-wooden-background-top-view_89816-27861.jpg"
            className="hero-image"
          />
        </div>
      </div>

      {/* CHEF ANIMATION — LEFT BOTTOM SIDE OF CIRCLE */}
      <div
        className="hero-anim-left hover-boost"
        style={{
        }}
      >
        <Lottie
          animationData={Cooking}
          loop
          autoplay
          className="hover-animation"
          style={{ width: 250, height: 250 }}
        />
      </div>

      {/* PIZZA ANIMATION */}
      <div
        className="hero-anim-right hover-boost"
        style={{
        }}
      >
        <Lottie
          animationData={chefAnim}
          loop
          autoplay
          className="hover-animation"
          style={{ width: 200, height: 200 }}
        />
      </div>

    </section>
  );
}
