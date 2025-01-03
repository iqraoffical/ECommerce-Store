export default function Footer() {
  return (
    <div className="bg-gray-50">
      <footer className="bg-gray-100 border-t border-gray-300 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between gap-8">
            {/* Address Column */}
            <div className="w-full sm:w-auto text-center sm:text-left">
              <p className="text-sm text-gray-700">
                400 University Drive Suite 200 Coral Gables,
                <br />
                FL 33134 USA
              </p>
            </div>

            {/* Links Column */}
            <div className="w-full sm:w-auto text-center sm:text-left">
              <h4 className="text-sm font-semibold text-gray-500 uppercase mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Column */}
            <div className="w-full sm:w-auto text-center sm:text-left">
              <h4 className="text-sm font-semibold text-gray-500 uppercase mb-4">Help</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:underline">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline">
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="w-full sm:w-auto text-center sm:text-left">
              <h4 className="text-sm font-semibold text-gray-500 uppercase mb-4">Newsletter</h4>
              <form className="flex flex-col sm:flex-row items-center sm:space-x-2 space-y-2 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-8 border-t border-gray-300 pt-4 text-center">
            <p className="text-sm text-gray-500">&copy; 2022 Meubel House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
