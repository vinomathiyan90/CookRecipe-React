import React, { useEffect, useState } from "react";
import eventImage from "../assets/party.png";

export default function UpcomingEventsSection() {
  const [reveal, setReveal] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".events-wrapper");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(Math.max((windowHeight - rect.top) / 350, 0), 1);

      setReveal(progress); // 0 → hidden, 1 → fully revealed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <><div>
      <h1 className="main-title">Upcoming Events</h1>

    </div><section className="events-section bg-zinc-900 py-20 relative overflow-hidden">

        <div className="events-wrapper container mx-auto flex items-center justify-center gap-0 relative z-10 w-[1100px] h-[400px]">

          {/* ⭐ IMAGE REVEAL FROM TOP */}
          <div
            className="relative w-[550px] h-[400px] overflow-hidden shadow-xl transition-all duration-700 ease-out"
            style={{
              transform: `translateY(${(-150 + reveal * 150)}px)`,
              opacity: reveal
            }}
          >
            <img
              src={eventImage}
              className="w-full h-full object-cover" />
          </div>

          {/* ⭐ CARD REVEAL FROM BOTTOM */}
          <div
            className="bg-white p-10 w-[550px] h-[400px] flex flex-col justify-center shadow-xl transition-all duration-700 ease-out"
            style={{
              transform: `translateY(${(150 - reveal * 150)}px)`,
              opacity: reveal
            }}
          >
            <p className="font-serif text-[#c39a7a] text-xl mb-1">Discover</p>

            <h2 className="font-serif font-bold text-4xl text-gray-800 mb-6">
              Upcoming Events
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
              Not only can you get the best steak in town, you can gather up with
              your old friends while enjoying the food we provide.
            </p>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 text-lg">Barbecue Party</h3>
              <p className="text-gray-500 text-sm">
                December 26 | Lunch Time | Casual
              </p>
            </div>

            <button className="text-[#c39a7a] font-semibold flex items-center gap-2 group self-start">
              More Events
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

        </div>
      </section></>
  );
}
