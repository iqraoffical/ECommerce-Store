import React from "react";
import Image from "next/image";
const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Cart Table */}
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-yellow-50 text-gray-600 uppercase text-sm font-semibold">
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Subtotal</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-4 px-4 flex items-center space-x-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Image
                        src="/sofa.png" // Replace with your image path
                        alt="Asgaard sofa"
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <span className="text-gray-800 font-medium">Asgaard sofa</span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">Rs.250,000.00</td>
                  <td className="py-4 px-4">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-12 text-center border rounded-md py-1"
                    />
                  </td>
                  <td className="py-4 px-4 text-gray-800">Rs. 250,000.00</td>
                  <td className="py-4 px-4">
                    <button className="text-yellow-500 hover:text-yellow-700">
                      🗑️
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="bg-yellow-50 rounded-lg shadow p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Cart Totals</h2>
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-800">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Total</span>
            <span className="text-yellow-600 font-semibold">Rs. 250,000.00</span>
          </div>
          <button className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
