import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-lg">
        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Get In Touch With Us</h2>
          <p className="text-gray-600">
            For more information about our product & services, please feel free to drop us
            an email. Our staff is always there to help you out. Do not hesitate!
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <span className="text-gray-600 text-xl">
                📍
              </span>
              <div>
                <h4 className="font-medium text-gray-800">Address</h4>
                <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-gray-600 text-xl">
                📞
              </span>
              <div>
                <h4 className="font-medium text-gray-800">Phone</h4>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-gray-600 text-xl">
                ⏰
              </span>
              <div>
                <h4 className="font-medium text-gray-800">Working Time</h4>
                <p className="text-gray-600">Monday–Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday–Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-800">Your Name</label>
            <input
              type="text"
              placeholder="Abc"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Email Address</label>
            <input
              type="email"
              placeholder="Abc@def.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Subject</label>
            <input
              type="text"
              placeholder="This is an optional"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Message</label>
            <textarea
              placeholder="Hi! I’d like to ask about..."
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
