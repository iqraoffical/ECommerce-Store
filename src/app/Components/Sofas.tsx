"use client";
import Image from "next/image";
export default function ProductDetails() {
  return (
    <div className="container flex flex-col space-y-8 px-4 md:px-12 lg:px-20 py-8">
      {/* Tabs Section */}
      <div className="flex justify-center space-x-6 text-sm md:text-base font-medium">
        <button className="border-b-2 border-black">Description</button>
        <button className="text-gray-500 hover:text-black">Additional Information</button>
        <button className="text-gray-500 hover:text-black">Reviews [5]</button>
      </div>

      {/* Description Section */}
      <div className="text-center md:text-left">
        <p className="text-gray-700 leading-relaxed mb-6">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex justify-center p-4">
          <Image
            src="/sofa-detail/Group 106.png" 
            alt="Product 1"
            className="object-contain"
          />
        </div>
        <div className="flex justify-center p-4">
          <Image
            src="/sofa-detail/Group 107.png" 
            alt="Product 2"
            className="object-contain"
          />
        </div>
     
      </div>
    </div>
  );
}
