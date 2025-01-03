import Image from "next/image";
import React from "react";

export default function Product() {
  return (
    <div className="container grid-cols-1 md:grid-cols-2 gap-4 w-full p-8">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <span className="text-2xl font-semibold text-black block mb-4">
          Top Picks For You
        </span>
        <h1 className="text-base sm:text-lg text-gray-600 mx-auto max-w-3xl">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </h1>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Product Card 1 */}
        <div className="relative w-full h-auto">
          <Image
            src="/product/Mask group (1).png"
            alt="Plain console with teak mirror"
            width={287}
            height={287}
            className="object-cover w-full rounded"
          />
          <div className="mt-4">
            <p className="text-sm text-black">Plain console with teak mirror</p>
            <span className="block mt-2 text-lg font-semibold">Rs. 25,000.00</span>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="relative w-full h-auto">
          <Image
            src="/product/Mask group (2).png"
            alt="Plain console with teak mirror"
            width={287}
            height={287}
            className="object-cover w-full rounded"
          />
          <div className="mt-4">
            <p className="text-sm text-black">Plain console with teak mirror</p>
            <span className="block mt-2 text-lg font-semibold">Rs. 25,000.00</span>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="relative w-full h-auto">
          <Image
            src="/product/Mask group (3).png"
            alt="Plain console with teak mirror"
            width={287}
            height={287}
            className="object-cover w-full rounded"
          />
          <div className="mt-4">
            <p className="text-sm text-black">Plain console with teak mirror</p>
            <span className="block mt-2 text-lg font-semibold">Rs. 25,000.00</span>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="relative w-full h-auto">
          <Image
            src="/product/Mask group (4).png"
            alt="Plain console with teak mirror"
            width={287}
            height={287}
            className="object-cover w-full rounded"
          />
          <div className="mt-4">
            <p className="text-sm text-black">Plain console with teak mirror</p>
            <span className="block mt-2 text-lg font-semibold">Rs. 25,000.00</span>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-8 text-center">
        <button className="text-black underline hover:text-gray-600">
          View More
        </button>
      </div>
    </div>
  );
}
