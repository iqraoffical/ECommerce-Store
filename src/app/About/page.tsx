

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-100 py-10 mt-2">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Left Side: Text */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              About Us
            </h2>
            <p className="text-gray-600">
              At <span className="font-semibold text-gray-800">FurniStyle</span>, we are passionate about creating spaces that feel like home. 
              Our curated selection of furniture blends timeless design with modern functionality, ensuring your home reflects your unique style.
            </p>
            <p className="text-gray-600">
              From cozy living room setups to elegant dining areas, we craft furniture that inspires comfort and joy in every moment.
            </p>
           
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2">
            <Image
              src="/product/Mask group (3).png"
              alt="Furniture Showcase"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
