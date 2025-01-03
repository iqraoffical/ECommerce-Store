





import Image from "next/image";
import React from "react";

import Shopfeatures from "../Components/Shopfeatures";
import Features from "../Components/Features";
 

const products = [

  {
        name: "Plain console with teak mirror",
        price: 25000,
        image: "/product/Mask group (1).png",
      },
      {
        name: "Trenton modular sofa_3",
        price: 25000,
        image: "/product/Mask group (2).png",
      },
      {
        name: "Granite dining table with dining chair",
        price: 25000,
        image: "/product/Mask group (3).png",
      },
      {
        name: "Outdoor bar table and stool",
        price: 25000,
        image: "/product/Mask group (4).png",
      },
      {
        name: "Bella chair and table",
        price: 100000,
        image: "/shop/Mask group (6).png",
      },
    
      {
        name: "Plain console with teak mirror",
        price: 25000,
        image: "/shop/Mask group (7).png",
      },
      {
        name: "Trenton modular sofa_3",
        price: 25000,
        image: "/shop/Mask group (8).png",
      },
      {
        name: "Granite dining table with dining chair",
        price: 25000,
        image: "/shop/Mask group (8).png",
      },
      {
        name: "Outdoor bar table and stool",
        price: 25000,
        image: "/shop/Mask group (7).png",
      },
      {
        name: "Bella chair and table",
        price: 100000,
        image: "/shop/Mask group (8).png",
      },
      {
        name: "Plain console with teak mirror",
        price: 25000,
        image: "/shop/Mask group (6).png",
      },
      {
        name: "Trenton modular sofa_3",
        price: 25000,
        image: "/product/Mask group (1).png",
      },
      {
        name: "Granite dining table with dining chair",
        price: 25000,
        image: "/shop/Mask group (6).png",
      },
      {
        name: "Outdoor bar table and stool",
        price: 25000,
        image: "/shop/Mask group (6).png",
      },
      {
        name: "Bella chair and table",
        price: 100000,
        image: "/product/Mask group (3).png",
      },
      {
        name: "Bella chair and table",
        price: 100000,
        image:"/product/Mask group (4).png",
      },
];

export default function ShopDetail() {
  return (
    <div className="container mx-auto p-4">
     <div className="bg-gray-300 rounded-lg overflow-hidden mb-6 w-full h-2710">
            <Image
              src="/shop/shopbg.png"
              alt="blog section"
              width={1440}
              height={316}
              className="object-cover w-full h-auto"
            />
          </div>
        <Shopfeatures/>

      {/* Product Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {products.map((product, index) => (
          <div key={index} className="relative w-[287px] h-[397px]">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="object-cover"
            />
            <div className="absolute top-[220px] left-0 w-[199px]">
              <p className="text-sm font-normal text-black">{product.name}</p>
              <span className="block mt-2 text-lg font-semibold">
                Rs. {product.price.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        ))}
      </div>

    
     <Features/>
    </div>
  );
}
