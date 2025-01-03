import React from "react";

const Auth = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* Log In Form */}
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Log In</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Username or email address
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600"
            >
              Log In
            </button>
            <a
              href="#"
              className="block text-sm text-yellow-500 hover:underline text-center"
            >
              Lost Your Password?
            </a>
          </form>
        </div>

        {/* Register Form */}
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Register</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email address
              </label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <p className="text-sm text-gray-600">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm text-gray-600">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a
                href="#"
                className="text-yellow-500 font-medium hover:underline"
              >
                privacy policy
              </a>
              .
            </p>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
