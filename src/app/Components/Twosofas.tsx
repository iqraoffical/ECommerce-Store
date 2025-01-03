import Image from "next/image";

import React from "react";

export default function TwoSofas() {
  return (
    <div className="bg-[#f9f3ef] py-12 w-">
      <div className="container mx-auto px-4">
        {/* Flex container for products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Item 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/Granite square side table.png"
              alt="Side Table"
              width={250}
              height={250}
              className="rounded-md shadow-lg"
            />
            <h3 className="text-xl font-semibold text-black mt-4">
              Side table
            </h3>
            <button className="text-sm text-black mt-2 underline hover:text-gray-700 transition">
              View More
            </button>
          </div>

          {/* Product Item 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/Mask group.png"
              alt="Side Table"
              width={250}
              height={250}
              className="rounded-md shadow-lg"
            />
            <h3 className="text-xl font-semibold text-black mt-4">
              Side table
            </h3>
            <button className="text-sm text-black mt-2 underline hover:text-gray-700 transition">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
