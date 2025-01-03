import React from "react";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <div className="container w-[1440px] h-[100px] pl-40 bg-[#FBEBB5] flex  grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-[430px] h-[24px] text-[#000000] pt-[38px] pl-[160px] space-x-7">
        <Link
          href="/"
          className="w-[48px] h-[24px] font-poppins font-medium text-base text-2xl]"
        >
          Home
        </Link>
        <Link
          href="/Shop"
          className="w-[48px] h-[24px] font-poppins font-medium text-base"
        >
          Shop
        </Link>

        <Link
          href="/About"
          className="w-[48px] h-[24px] font-poppins font-medium text-base"
        >
          About
        </Link>
        <Link
          href="/Contact"
          className="w-[48px] h-[24px] font-poppins font-medium text-base"
        >
          Contact
        </Link>
      </div>
      <div className="flex text-[#000000] w-[235px] h-[28px] space-x-12 pt-9 ml-80">
        <Link href="/My-Account" aria-label="User Profile">
          <HiOutlineUser className="w-[28px] h-[28px]" />
        </Link>
        <Link href="/" aria-label="Search">
          <FiSearch className="w-[28px] h-[28px]" />
        </Link>
        <Link href="/" aria-label="Wishlist">
          <FaRegHeart className="w-[28px] h-[28px]" />
        </Link>
        <Link href="/View-Cart" aria-label="Shopping Cart">
          {" "}
          <AiOutlineShoppingCart className="w-[28px] h-[28px] hover:text-gray-600" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
