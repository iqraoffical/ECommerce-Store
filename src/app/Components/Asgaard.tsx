import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Chair() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full sm:w-1/2 flex justify-center">
            <Image
              src="/images/Asgaard sofa.png"
              alt="Asgaard sofa"
              className="w-full max-w-xs sm:max-w-md rounded shadow-md"
              width={400}
              height={400}
            />
          </div>

          {/* Text and Button Section */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              New Arrivals
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Asgaard sofa
            </p>
            <div>
              <Link href="/Asgaardsofa">
                <button className="px-6 py-3 bg-yellow-300 text-black font-medium rounded hover:bg-yellow-400 transition duration-200 border border-black">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
