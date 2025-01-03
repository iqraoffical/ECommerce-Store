import React from "react";

export default function InstagramSection() {
  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Rectangle 17.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FAF4F4] bg-opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">
          Our Instagram
        </h2>
        <p className="mt-2 text-base sm:text-lg text-black">
          Follow our store on Instagram
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded shadow hover:bg-gray-500">
          Follow Us
        </button>
      </div>
    </div>
  );
}
