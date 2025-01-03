import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function Blogs() {
  return (
    <div className="w-full h-auto flex flex-col items-center py-8">
      {/* Title Section */}
      <div className="text-center py-8 w-full max-w-[600px]">
        <span className="block text-2xl font-semibold text-black mb-4">
          Our Blogs
        </span>
        <h1 className="text-gray-500 text-base">
          Find a bright idea to suit your taste with our great selection
        </h1>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-[1240px] flex justify-between items-start gap-4">
        {/* Card 1 */}
        <div className="w-[393px]">
          <div className="bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/Rectangle 13.png"
              alt="Plain console with teak mirror"
              width={393}
              height={393}
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm mt-2">
              A brief description of the product goes here.
            </p>
            <button className="underline text-black text-sm font-medium mt-4">
              Read More
            </button>
            <div className="flex justify-center items-center mt-4 text-gray-500 text-sm gap-2">
              <Image
                src="/images/Group.png"
                alt="Clock icon"
                width={18}
                height={18}
              />
              <p>5 min</p>
              <Image
                src="/images/uil_calender.png"
                alt="Calendar icon"
                width={18}
                height={18}
              />
              <p>12th Oct 2022</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[393px]">
          <div className="bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/Rectangle 14.png"
              alt="Plain console with teak mirror"
              width={393}
              height={393}
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm mt-2">
              A brief description of the product goes here.
            </p>
            <button className="underline text-black text-sm font-medium mt-4">
              Read More
            </button>
            <div className="flex justify-center items-center mt-4 text-gray-500 text-sm gap-2">
              <Image
                src="/images/Group.png"
                alt="Clock icon"
                width={18}
                height={18}
              />
              <p>5 min</p>
              <Image
                src="/images/uil_calender.png"
                alt="Calendar icon"
                width={18}
                height={18}
              />
              <p>12th Oct 2022</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[393px]">
          <div className="bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/Rectangle 13.png"
              alt="Plain console with teak mirror"
              width={393}
              height={393}
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm mt-2">
              A brief description of the product goes here.
            </p>
            <button className="underline text-black text-sm font-medium mt-4">
              Read More
            </button>
            <div className="flex justify-center items-center mt-4 text-gray-500 text-sm gap-2">
              <Image
                src="/images/Group.png"
                alt="Clock icon"
                width={18}
                height={18}
              />
              <p>5 min</p>
              <Image
                src="/images/uil_calender.png"
                alt="Calendar icon"
                width={18}
                height={18}
              />
              <p>12th Oct 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
            <button>
              <Link
                href="/Blog-link"
                className="underline text-black text-sm font-medium px-6 py-2  hover:bg-gray-800"
              >
                Read More
              </Link>
            </button>
          </div>
    </div>
  );
}
