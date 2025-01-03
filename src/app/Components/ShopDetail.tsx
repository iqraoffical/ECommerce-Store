
import Image from "next/image";
import React from "react";

const products = [
  {
    name: "Plain console with teak mirror",
    price: 25000,
    image: "/images/Group.png",
  },
  {
    name: "Trenton modular sofa_3",
    price: 25000,
    image: "/images/Mask group.png",
  },
  {
    name: "Granite dining table with dining chair",
    price: 25000,
    image: "/images/Mask group.png",
  },
  {
    name: "Outdoor bar table and stool",
    price: 25000,
    image: "/images/Mask group (8).png",
  },
  {
    name: "Bella chair and table",
    price: 100000,
    image: "/images/two.png",
  },
  // Add more products here as needed
  {
    name: "Plain console with teak mirror",
    price: 25000,
    image: "/images/Group.png",
  },
  {
    name: "Trenton modular sofa_3",
    price: 25000,
    image: "/images/Mask group.png",
  },
  {
    name: "Granite dining table with dining chair",
    price: 25000,
    image: "/images/Mask group.png",
  },
  {
    name: "Outdoor bar table and stool",
    price: 25000,
    image: "/images/Mask group (8).png",
  },
  {
    name: "Bella chair and table",
    price: 100000,
    image: "/images/two.png",
  },
  {
    name: "Plain console with teak mirror",
    price: 25000,
    image: "/images/Group.png",
  },
  {
    name: "Trenton modular sofa_3",
    price: 25000,
    image: "/images/Mask group.png",
  },
  {
    name: "Granite dining table with dining chair",
    price: 25000,
    image: "/images/Mask group.png",
  },
  {
    name: "Outdoor bar table and stool",
    price: 25000,
    image: "/images/Mask group (8).png",
  },
  {
    name: "Bella chair and table",
    price: 100000,
    image: "/images/two.png",
  },
  {
    name: "Bella chair and table",
    price: 100000,
    image: "/images/two.png",
  },
];

export default function ShopDetail() {
  return (
    <div className="container mx-auto p-4">
      
    

      {/* Product Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </div>
  );
}
