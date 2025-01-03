import React from 'react';

const Features = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Feature Card */}
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Free Delivery
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>

          {/* Feature Card */}
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              90 Days Return
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>

          {/* Feature Card */}
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Secure Payment
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
