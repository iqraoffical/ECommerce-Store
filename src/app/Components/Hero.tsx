import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className=" container bg-[#FBEBB5]  flex items-center px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Left content */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-snug">
            Rocket single <br /> seater
          </h1>
          <p className="text-lg text-gray-600">
            Elegant and comfortable seating for your modern living room.
          </p>
          <Link
            href="/shop"
            className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition"
          >
            Shop now →
          </Link>
        </div>

        {/* Right content: image */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/Rocket single seater.png"
            width={1200}
            height={1200}
            alt="Rocket single seater, a modern and elegant furniture piece"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
