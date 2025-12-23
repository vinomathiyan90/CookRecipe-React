import React, { useEffect, useState } from "react";
import ingredientsImg from "../assets/veg4.png";

export default function IngredientsSection() {
  const [reveal, setReveal] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sec = document.querySelector(".ingredients-wrapper");
      if (!sec) return;

      const rect = sec.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // smooth reveal 0 → 1
      const progress = Math.min(Math.max((windowHeight - rect.top) / 350, 0), 1);
      setReveal(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-32 ingredients-wrapper overflow-hidden">

      {/* TEXT BLOCK */}
      <div className="text-center mb-16 px-6">

        {/* ⭐ 1. Discover – Slide Down + Delay */}
        <p
          className="text-[#c49a7a] italic font-serif text-3xl transition-all duration-[900ms]"
          style={{
            opacity: reveal,
            transitionDelay: "200ms",
            transform: `translateY(${(-50 + reveal * 50)}px)`
          }}
        >
          Discover
        </p>

        {/* ⭐ 2. Heading – Slide Up + More Delay */}
        <h2
          className="text-white text-5xl font-bold mt-2 transition-all duration-[900ms]"
          style={{
            opacity: reveal,
            transitionDelay: "450ms",
            transform: `translateY(${(50 - reveal * 50)}px)`
          }}
        >
          The Best Ingredients
        </h2>

        {/* ⭐ 3. Paragraph – Only Fade In + Biggest Delay */}
        <p
          className="text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed text-lg transition-opacity duration-[900ms]"
          style={{
            opacity: reveal,
            transitionDelay: "700ms"
          }}
        >
          We take an enormous amount of pride in sourcing our ingredients
          carefully to ensure that the flavors of our food are as delicious
          and authentic as possible. We’re only able to achieve this level
          of excellence by putting an extra level of care into our menu items
          that is difficult to find at other restaurants.
        </p>

      </div>

      {/* ⭐ 4. IMAGE — PREMIUM 3D CARD FLIP */}
      <div className="flex items-center justify-center mt-10">
        <img
          src={ingredientsImg}
          alt="Best ingredients"
          className="w-[700px] h-auto object-contain transition-all duration-[1200ms] ease-out"
          style={{
            transform: `perspective(1200px) rotateY(${(1 - reveal) * 90}deg)`,
            opacity: reveal,
            transitionDelay: "950ms"
          }}
        />
      </div>

    </section>
  );
}
