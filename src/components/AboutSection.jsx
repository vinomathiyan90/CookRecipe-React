import React, { useEffect, useRef, useState } from "react";
import "../style.css";
import cookImage from "../assets/grilled-fish.png";
import Lottie from "lottie-react";
import Tomatoes from '../assets/Tomatoes.json'

export default function AboutSection() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // smoother, slower animation
      let p = Math.min(Math.max((windowHeight - rect.top) / 650, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <><div>
      <h1 className="main-title">Our Story</h1>
     

    </div>

      <section ref={containerRef} className="about-join-section">

        {/* LEFT IMAGE PANEL */}
        <div
          className="about-left-join"
          style={{
            transform: `translateX(${-(300 - progress * 300)}px)`
          }}
        >
          <img src={cookImage} className="about-left-img" />
        </div>

        {/* RIGHT CONTENT PANEL */}
        <div
          className="about-right-join bg-white p-10 flex-shrink-0 w-[550px] h-[400px] flex flex-col justify-center shadow-xl"
          style={{
            transform: `translateX(${300 - progress * 300}px)`
          }}
        >
          <p className="discover">Discover</p>
          <h2 className="story-title">Our Story</h2>

          <p className="story-text">
            Get the best steakhouse experience at the Steakhouse. Whether you're
            joining us for a romantic dinner, business meeting or private party...
          </p>

          <button className="text-[#c39a7a] font-semibold flex items-center gap-2 group self-start py-6">
            More Events
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>      </div>

      </section></>
  );
}
