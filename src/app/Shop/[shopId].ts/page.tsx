import Image from "next/image";
import Link from "next/link";

type Product = {
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    name: "Plain console with teak mirror",
    price: 25000,
    image: "/images/Group.png",
  },
  // Add other products here...
];

export default function ProductList({ params }: { params: Promise<{ productId: string }> }) {
  return (
    <div>
      <div>
        Completed:{" "}
        {
          // Use async resolution if params is a Promise
          (async () => {
            const resolvedParams = await params;
            return resolvedParams.productId;
          })()
        }
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, index) => (
          <div key={index} className="relative w-[287px] h-[397px] cursor-pointer">
            {product.image && (
              <Image
                src={product.image}
                alt={product.name || "Product Image"}
                width={287}
                height={287}
                className="object-cover"
              />
            )}
            <div className="absolute top-[220px] left-0 w-[199px] bg-white bg-opacity-80 p-2">
              <p className="text-sm font-normal text-black">{product.name}</p>
              <span className="block mt-2 text-lg font-semibold">
                Rs. {product.price.toLocaleString("en-IN")}
              </span>
              <Link href="/Asgaardsofa"></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

