import React, { useEffect, useState, useRef } from "react";
import reservationBg from "../assets/reservation.jpg";

export default function ReservationSection() {
  const [reveal, setReveal] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;

      const rect = sec.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // smoother + slower reveal
      const progress = Math.min(Math.max((windowHeight - rect.top) / 400, 0), 1);
      setReveal(progress);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-[70%] mx-auto overflow-hidden">

      {/* ⭐ TOP IMAGE BLOCK WITH PARALLAX */}
      <div
        className="relative w-full h-[300px] bg-cover bg-center transition-all duration-[1100ms] ease-out"
        style={{
          backgroundImage: `url(${reservationBg})`,
          transform: `translateY(${(-120 + reveal * 120)}px)`,
          opacity: reveal
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

          {/* Discover */}
          <p
            className="text-[#c49a7a] italic font-serif text-4xl mb-2 transition-all duration-[900ms]"
            style={{
              transitionDelay: "200ms",
              transform: `translateY(${(40 - reveal * 40)}px)`,
              opacity: reveal
            }}
          >
            Reservation
          </p>

          {/* Book Your Table */}
          <h2
            className="text-5xl font-bold tracking-wide mb-8 transition-all duration-[900ms]"
            style={{
              transitionDelay: "450ms",
              transform: `translateY(${(40 - reveal * 40)}px)`,
              opacity: reveal
            }}
          >
            Book Your Table
          </h2>

          {/* Button */}
          <button
            className="reservation-btn px-10 py-3 border border-white text-white text-lg font-semibold 
             transition-all duration-300 hover:bg-[#ff884d] hover:text-black hover:border-[#ff884d]"
            style={{
              opacity: reveal,
              transform: `translateY(${(40 - reveal * 40)}px)`,
              transitionDelay: "700ms"
            }}
          >
            Online Booking
          </button>

        </div>
      </div>

      {/* ⭐ BOTTOM INFO w/ fade + rise */}
      <div
        className="bg-[#1b1b1b] w-full h-60 py-5 flex justify-center transition-all duration-[1200ms]"
        style={{
          transitionDelay: "600ms",
          opacity: reveal,
          transform: `translateY(${(60 - reveal * 60)}px)`
        }}
      >
        <div className="bg-[#1b1b1b] w-full py-5 flex justify-center" >
          <div className="w-[70%] max-w-6xl grid grid-cols-3 gap-10 text-gray-300">

            {/* Location */}
            <div>
              <h3 className="text-[#c49a7a] font-semibold text-lg mb-4">Location</h3>
              <p className="table">Start with our fresh sliced shrimps and</p>
              <p className="table">Coimbatore, TN-641007</p>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-[#c49a7a] font-semibold text-lg mb-4">Working Hours</h3>

              <div className="working-row hover-effect">
                <span>Monday - Thursday</span>
                <span>10 am - 9 pm</span>
              </div>

              <div className="working-row hover-effect">
                <span>Friday</span>
                <span>4 pm - 11 pm</span>
              </div>

              <div className="working-row hover-effect">
                <span>Saturday - Sunday</span>
                <span>10 am - 11 pm</span>
              </div>
            </div>

            {/* Steakhouse */}
            <div className="text-right">
              <h3 className="text-[#c49a7a] italic font-serif text-3xl mb-3">
                Steakhouse
              </h3>
              <p className="table"style={{marginLeft:'85px'}}>info@kitchen.com</p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
