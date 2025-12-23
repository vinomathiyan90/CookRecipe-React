import React, { useEffect } from "react";
import Lottie from "lottie-react";
import leafAnim from "../assets/Growing leaves.json"; // your Lottie file
// import blueLeaves from "../assets/Blue leaves.json"; // your Lottie file
import '../style.css'


export default function MenuSection() {

  // ⭐ ROTATE EFFECT FOR PLATES
  useEffect(() => {
    const plates = document.querySelectorAll(".plate-effect");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      plates.forEach((plate) => {
        const rotation = scrollY * 0.1;
        plate.style.transform = `rotate(${rotation}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section className="mx-auto py-32 relative">

      {/* ---------------- MENU TOP ---------------- */}
      <div className="container mx-auto flex items-start justify-center gap-20 mb-32">
        <div className="max-w-md ml-60">
          <p className="text-[#c39a7a] italic font-serif text-3xl ml-24">Discover</p>
          <h2 className="text-white text-5xl font-bold mt-2">Our Menu</h2>
        </div>

        <div className="max-w-lg">
          <p className="text-gray-300 text-lg leading-relaxed">
            Few things come close to the joy of steak and chips — cooked simply with tender,
            loving care. Rest assured that our chefs treat our Irish beef with the respect it deserves.
          </p>
        </div>
      </div>


      {/* ---------------- FIRST TWO DISHES ---------------- */}
      <div className="container mx-auto relative">

        {/* FIRST PLATE */}
        <div className="absolute" style={{ width: 350, height: 350, top: -80, left: 120 }}>
          <img
            src="https://www2.clear.sale/hubfs/food-and-delivery/dish-1.png"
            className="w-full h-full object-cover rounded-full plate-effect"
          />

          {/* LEAF FOR FIRST PLATE */}
          <div className="absolute pointer-events-none leaf">
            <Lottie animationData={leafAnim} loop autoplay />
          </div>
        </div>

        {/* SECOND PLATE */}
        <div className="ml-[700px] relative">
          <p className="text-[#c39a7a] italic font-serif text-3xl mb-3 ml-1">Appetizer</p>

          <p className="text-gray-300 text-lg mb-10">
            Start with our fresh baked bread
          </p>

          <div className="absolute" style={{ width: 350, height: 350, top: 130, left: -20 }}>
            <img
              src="https://fuelgoodmy.com/cdn/shop/files/10.Shawarma_Chicken_with_Yellow_Rice.png?v=1763228930&width=1400"
              className="w-full h-full object-cover rounded-full plate-effect"
            />

            {/* LEAF FOR SECOND PLATE */}
            <div className="absolute  pointer-events-none leaf">
              <Lottie animationData={leafAnim} loop autoplay />
            </div>
          </div>
        </div>

      </div>


      {/* ---------------- SIDE DISH ---------------- */}
      <div className="container mx-auto flex items-start gap-24 py-80 relative sidedish ">

        {/* BIG SIDE DISH */}
        <div className="relative" style={{ width: 420, height: 420, marginLeft: 100, marginTop: -40 }}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/057/071/182/small/a-plate-with-chicken-broccoli-avocado-and-other-vegetables-png.png"
            className="w-full h-full object-cover rounded-full plate-effect"
          />

          {/* LEAF FOR SIDE DISH */}
          <div className="absolute  pointer-events-none leaf-overlay">
          <Lottie animationData={leafAnim} loop autoplay />
        </div>
        </div>

        {/* TEXT */}
        <div className="mt-24 py-40 ml-24">
          <p className="text-[#c39a7a] italic font-serif text-4xl mb-3 ">Side Dish</p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
            Have a healthy salad mixed with light sliced <br /> meat to complement your steak.
          </p>
        </div>
      </div>


      {/* ---------------- BOTTOM BIG PLATE ---------------- */}
      <div className="absolute" style={{ width: 420, height: 420, bottom: 120, right: 390 }}>
        <img
          src="https://freshmealplan.com/cdn/shop/products/LeanandMeanBlackenedGrilledChicken.png?v=1634326153"
          className="w-full h-full object-cover rounded-full plate-effect"
        />

        {/* LEAF FOR BOTTOM PLATE */}
        <div className="absolute pointer-events-none leaf">
          <Lottie animationData={leafAnim} loop autoplay />
        </div>
      </div>

    </section>
  );
}
