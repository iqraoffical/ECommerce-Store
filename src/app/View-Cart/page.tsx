import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
export default function shoppingcart() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <h2 className="text-lg font-bold text-gray-800">Shopping Cart</h2>
        <div className="p-2 rounded-full border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 3h18M6 6h12"></path>
          </svg>
        </div>
      </div>

      {/* Cart Item */}
      <div className="px-4 py-4">
        <div className="flex items-center space-x-4">
          {/* Product Image */}
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
            <Image
              src="https://via.placeholder.com/64"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-800">Asgaard sofa</h3>
            <div className="text-sm text-gray-600">
              1 x <span className="text-yellow-500 font-semibold">Rs. 250,000.00</span>
            </div>
          </div>

          {/* Remove Button */}
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Subtotal */}
      <div className="px-4 py-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Subtotal</span>
          <span className="text-lg font-bold text-yellow-500">Rs. 250,000.00</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-4 flex justify-between space-x-4 border-t">
        <Link href=""
         className="flex-1 py-2 text-center text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
            View Cart
        
        </Link>
        <Link href="/Check-out"
           className="flex-1 py-2 text-center bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
            Checkout
        
        </Link>
      </div>
    </div>
  );
}
