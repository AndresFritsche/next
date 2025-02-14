import Link from "next/link";
import { links } from "../app/data";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-screen h-16 flex justify-between items-center bg-white shadow-md fixed px-8 md:px-24 z-50">
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
          return (
            <Link
              key={id}
              href={url}
              className="font-semibold text-lg hover:bg-slate-200 rounded-lg px-4 py-2 transition duration-300 ease-in-out"
            >
              {text}
            </Link>
          );
        })}
      </div>

      
      <button className="md:hidden p-2 focus:outline-none">
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
    </nav>
  );
};

export default Navbar;