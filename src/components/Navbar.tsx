"use client"; 

import Link from "next/link";
import { links } from "../app/data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname(); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  return (
    <nav className="w-screen h-16 flex justify-between items-center bg-white shadow-md fixed px-8 md:px-24 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/Next_Design__1_-removebg-preview.png"
          width={200}
          height={50}
          alt="logo"
          className="w-40 md:w-48"
        />
      </div>

      
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => {
          const { id, url, text } = link;
          const isActive = pathname === url; // Check if the link is active

          return (
            <Link
              key={id}
              href={url}
              className={`font-semibold text-lg hover:bg-slate-200 rounded-lg px-4 py-2 transition duration-300 ease-in-out ${
                isActive ? "text-indigo-600 bg-slate-100" : "text-gray-700"
              }`}
            >
              {text}
            </Link>
          );
        })}
      </div>

      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col gap-4 p-4">
            {links.map((link) => {
              const { id, url, text } = link;
              const isActive = pathname === url; // Check if the link is active

              return (
                <Link
                  key={id}
                  href={url}
                  className={`font-semibold text-lg hover:bg-slate-200 rounded-lg px-4 py-2 transition duration-300 ease-in-out ${
                    isActive ? "text-indigo-600 bg-slate-100" : "text-gray-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {text}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;