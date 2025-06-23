import React from "react";
import { FaMoon } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="text-white shadow-md">
      <div className="max-w-screen mx-4 px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <span className="text-white">comet</span>
          <span className="text-gray-300">chat</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {["Platform", "Solutions", "Developers", "Resources", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-white transition-transform transform hover:scale-110 duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-transform transform hover:scale-110 duration-200"
          >
            Log in
          </a>
          <button className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform transform hover:scale-110 duration-200 hidden md:block">
            Schedule a demo
          </button>

          {/* Moon icon visible only on mobile */}
          <button className="w-10 h-10 flex items-center justify-center bg-transparent border border-gray-600 rounded-lg hover:border-white transition md:hidden">
            <FaMoon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
