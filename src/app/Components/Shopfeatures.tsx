
export default function Shopfeatures(){
    return( <div className="flex flex-wrap items-center justify-between py-4 px-6 bg-gray-50">
        {/* <!-- Filter and View Options --> */}
        <div className="flex items-center space-x-4">
          {/* <!-- Filter Button --> */}
          <button className="flex items-center space-x-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v5.172a1 1 0 01-.553.894l-4 2A1 1 0 019 19.172v-5.172a1 1 0 00-.293-.707L2.293 6.707A1 1 0 012 6V4z"
              />
            </svg>
            <span>Filter</span>
          </button>
      
          {/* <!-- Grid View --> */}
          <button className="p-2 bg-gray-200 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h4v4H4V6zm6 0h4v4h-4V6zm6 0h4v4h-4V6zM4 12h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 18h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"
              />
            </svg>
          </button>
      
          {/* <!-- List View --> */}
          <button className="p-2 bg-gray-200 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      
        {/* <!-- Results Info --> */}
        <div className="text-gray-600">
          Showing 1–16 of 32 results
        </div>
      
        {/* <!-- Show and Sort Options --> */}
        <div className="flex items-center space-x-4">
          {/* <!-- Show Option --> */}
          <div className="flex items-center space-x-2">
            <span>Show</span>
            <select
              className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none"
            >
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="48">48</option>
            </select>
          </div>
      
          {/* <!-- Sort Option --> */}
          <div className="flex items-center space-x-2">
            <span>Sort by</span>
            <select
              className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      )
}

