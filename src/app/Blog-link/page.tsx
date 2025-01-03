import React from "react";
import Image from "next/image";
import Link from "next/link";
import Features from "../Components/Features";
export default function Bloglink() {
  return (
<div className=" max-with-1440px mx-auto  h-2710px">
      {" "}
      {/* <!-- Header Section --> */}
      <div className="w-70px h-2490px top-522px left-97px border-1px"> 
      <div className="bg-gray-300 rounded-lg overflow-hidden mb-6 w-full h-2710">
        <Image
          src="/images/blog.png"
          alt="blog section"
          width={1440}
          height={316}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className=" px-4 py-8 flex  flex-row justify-center">
        <div className="p-4 md:p-8 ">
          {/* Hero Section */}
           
           <div className="f">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Recent Posts
            </h1>
          </div>
          <div className="w-full h-2710">
            {/* <!-- Blog Posts Section --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* <!-- Blog Post 1 --> */}
              <div className="bg-white shadow-lg rounded-lg p-6">
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
                  <div className="flex  items-center mt-4  text-gray-500 text-sm gap-2">
                    <Image
                      src="/images/dashicons_admin-users.png"
                      alt="user-icon"
                      width={20}
                      height={20}
                    />
                    <p>5 min</p>
                    <Image
                      src="/images/uis_calender.png"
                      alt="Calendar-icon"
                      width={20}
                      height={20}
                    />
                    <p>12th Oct 2022</p>
                    <Image
                      src="/images/ci_tag.png"
                      alt="Calendar-icon"
                      width={20}
                      height={20}
                    />
                    <p>wood</p>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Going all-in with millennial design
                  </h2>
                  <p className="text-sm text-gray-700 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua...
                  </p>
                  <Link href="/" className="text-black mt-4 inline-block">
                    Read more
                  </Link>
                </div>

                {/* <!-- Blog Post 2 --> */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="w-[393px]">
                    <div className="bg-gray-300 rounded-lg overflow-hidden">
                      <Image
                        src="/images/Rectangle 68.png"
                        alt="Plain console with teak mirror"
                        width={393}
                        height={393}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex  items-center mt-4  text-gray-500 text-sm gap-2">
                      <Image
                        src="/images/dashicons_admin-users.png"
                        alt="user-icon"
                        width={20}
                        height={20}
                      />
                      <p>5 min</p>
                      <Image
                        src="/images/uis_calender.png"
                        alt="Calendar-icon"
                        width={20}
                        height={20}
                      />
                      <p>12th Oct 2022</p>
                      <Image
                        src="/images/ci_tag.png"
                        alt="Calendar-icon"
                        width={20}
                        height={20}
                      />
                      <p>wood</p>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Exploring new ways of decorating
                    </h2>

                    <p className="text-sm text-gray-700 mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua...
                    </p>
                    <Link href="/" className="text-black mt-4 inline-block">
                      Read more
                    </Link>
                  </div>
                </div>
                {/* <!-- Blog Post 3 --> */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="w-[393px]">
                    <div className="bg-gray-300 rounded-lg overflow-hidden">
                      <Image
                        src="/images/Rectangle 69.png"
                        alt="Plain console with teak mirror"
                        width={393}
                        height={393}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex  items-center mt-4  text-gray-500 text-sm gap-2">
                      <Image
                        src="/images/dashicons_admin-users.png"
                        alt="user-icon"
                        width={20}
                        height={20}
                      />
                      <p>5 min</p>
                      <Image
                        src="/images/uis_calender.png"
                        alt="Calendar-icon"
                        width={20}
                        height={20}
                      />
                      <p>12th Oct 2022</p>
                      <Image
                        src="/images/ci_tag.png"
                        alt="Calendar-icon"
                        width={20}
                        height={20}
                      />
                      <p>wood</p>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Handmade pieces that took time to make
                    </h2>

                    <p className="text-sm text-gray-700 mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua...
                    </p>
                    <Link href="/" className="tdext-black mt-4 inline-block">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
             
          </div>
        </div>
      </div>
      </div>
{/*  */}
<div>
      {/* side bar section */}
      <div className="w-30">
        <div className="flex flex-col justify-center">
      <div className="p-4 max-w-xs mx-auto">
        {/* <!-- Search Bar --> */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M15 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
        </div>

        {/* <!-- Categories Section --> */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li className="flex justify-between text-sm text-gray-600">
              <span>Crafts</span>
              <span>2</span>
            </li>
            <li className="flex justify-between text-sm text-gray-600">
              <span>Design</span>
              <span>8</span>
            </li>
            <li className="flex justify-between text-sm text-gray-600">
              <span>Handmade</span>
              <span>7</span>
            </li>
            <li className="flex justify-between text-sm text-gray-600">
              <span>Interior</span>
              <span>1</span>
            </li>
            <li className="flex justify-between text-sm text-gray-600">
              <span>Wood</span>
              <span>6</span>
            </li>
          </ul>
          </div>
        </div>
      </div>
      
      </div>
      {/* ..... */}
      <div className="p-4 max-w-md mx-auto">
  {/* <!-- Recent Posts Section --> */}
  <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
  <ul className="space-y-4">
    {/* <!-- Post 1 --> */}
    <li className="flex items-center space-x-4">
      <Image
        src="https://via.placeholder.com/60" 
        alt="Post 1" 
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div>
        <h3 className="text-sm font-medium text-gray-800">Going all-in with millennial design</h3>
        <p className="text-xs text-gray-500">03 Aug 2022</p>
      </div>
    </li>
    {/* <!-- Post 2 --> */}
    <li className="flex items-center space-x-4">
      <Image
        src="https://via.placeholder.com/60" 
        alt="Post 2" 
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div>
        <h3 className="text-sm font-medium text-gray-800">Exploring new ways of decorating</h3>
        <p className="text-xs text-gray-500">03 Aug 2022</p>
      </div>
     </li>
    {/* <!-- Post 3 -->  */}
    <li className="flex items-center space-x-4">
      <Image
        src="https://via.placeholder.com/60" 
        alt="Post 3" 
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div>
        <h3 className="text-sm font-medium text-gray-800">Handmade pieces that took time to make</h3>
        <p className="text-xs text-gray-500">03 Aug 2022</p>
      </div>
    </li>
    {/* <!-- Post 4 --> */}
    <li className="flex items-center space-x-4">
      <Image
        src="https://via.placeholder.com/60" 
        alt="Post 4" 
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div>
        <h3 className="text-sm font-medium text-gray-800">Modern home in Milan</h3>
        <p className="text-xs text-gray-500">03 Aug 2022</p>
      </div>
    </li>
    {/* <!-- Post 5 --> */}
    <li className="flex items-center space-x-4">
      <Image
        src="https://via.placeholder.com/60" 
        alt="Post 5" 
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div>
        <h3 className="text-sm font-medium text-gray-800">Colorful office redesign</h3>
        <p className="text-xs text-gray-500">03 Aug 2022</p>
      </div>
    </li>
  </ul>
</div>
</div>
</div>
            </div>
            <div className="mt-8 text-center justify-center">
              <div className="inline-flex items-center space-x-2">
                <button className="px-4 py-2 FBEBB5 text-black rounded-md">
                  1
                </button>
                <button className="px-4 py-2 #FBEBB5 text-black rounded-md">
                  2
                </button>
                <button className="px-4 py-2 #FBEBB5 text-black rounded-md">
                  3
                </button>
                <button className="px-4 py-2 #FBEBB5 text-black rounded-md">
                  Next
                </button>
              </div>
            </div>
      
      <Features />
    </div>
  );
}
