import React from "react";

export default function Navbar() {
  return (
    <header className="text-white shadow-md">
      <div className="max-w-screen mx-4 px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <span className="text-white">comet</span>
          <span className="text-gray-300">chat</span>
        </div>

        {/* Desktop Nav */}
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
        <div className="space-x-8 flex items-center">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-transform transform hover:scale-110 duration-200"
          >
            Log in
          </a>
          <button className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform transform hover:scale-110 duration-200">
            Schedule a demo
          </button>
        </div>

        {/* Mobile menu toggle (optional for mobile nav) */}
        <div className="md:hidden">
          {/* You can add a hamburger menu here */}
        </div>
      </div>
    </header>
  );
}
