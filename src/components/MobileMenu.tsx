"use client";

import Link from "next/link";
import React, { useState } from "react";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen((pre) => !pre)}
        className="flex cursor-pointer flex-col gap-[4.5px] md:hidden"
      >
        {/* create a hambargar menu */}
        <div
          className={`w-6 bg-sky-500 h-1 rounded-md ${
            isOpen ? "rotate-45" : ""
          } origin-left ease duration-500`}
        ></div>
        <div
          className={`w-6 bg-sky-500 h-1 rounded-md ${
            isOpen ? "opacity-0" : ""
          } origin-left ease duration-500`}
        ></div>
        <div
          className={`w-6 bg-sky-500 h-1 rounded-md ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease duration-500`}
        ></div>
      </div>

      {/* when isOpen is true then create a links */}
      {isOpen && (
        <div className="flex flex-col absolute w-full left-0 top-24 items-center justify-center gap-4 font-medium text-xl z-10 bg-white h-[calc(100vh-96px)]">
            <Link href='/'> Home </Link>
            <Link href='/'> Friends </Link>
            <Link href='/'> Group </Link>
            <Link href='/'> Stories </Link>
            <Link href='/'> Login </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
