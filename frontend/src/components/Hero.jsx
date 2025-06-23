import React from "react";
import Navbar from "./Navbar";
import { ReactComponent as Comet1 } from './comets/hero/comet1.svg';
import { ReactComponent as Comet2 } from './comets/hero/comet2.svg';
import { ReactComponent as Comet3 } from './comets/hero/comet3.svg';
import { ReactComponent as Comet4 } from './comets/hero/comet4.svg';
import { ReactComponent as Comet5 } from './comets/hero/comet5.svg';
import { ReactComponent as Comet6 } from './comets/hero/comet6.svg';
import { ReactComponent as Stars } from './comets/hero/stars.svg';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1B1A2D] to-[#0D0B1F] text-white overflow-hidden">

      {/* Stars Background Covering Entire Page */}
      <div className="absolute inset-0 z-0">
        <Stars className="w-full h-full object-cover" />
      </div>

      {/* Page Content */}
      <Navbar />

      <section className="relative flex items-center justify-center px-4 py-16 min-h-[calc(100vh-80px)]">
        {/* Comets */}
        <div className="absolute top-[-100px] left-[-100px] z-10">
          <Comet1 className="w-[350px] h-[350px]" />
        </div>

        <div className="absolute top-[50px] right-[-80px] z-10">
          <Comet2 className="w-[150px] h-[150px]" />
        </div>

        <div className="absolute bottom-[80px] left-[50px] z-10">
          <Comet3 className="w-[200px] h-[200px]" />
        </div>

        <div className="absolute top-[30%] left-[10%] z-10 hidden md:block">
          <Comet4 className="w-[60px] h-[60px]" />
        </div>

        <div className="absolute bottom-[50px] right-[20%] z-10 hidden md:block">
          <Comet5 className="w-[80px] h-[80px]" />
        </div>

        <div className="absolute bottom-[-100px] right-[-100px] z-10">
          <Comet6 className="w-[300px] h-[300px]" />
        </div>

        {/* Main Content */}
        <div className="relative z-20 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Join the CometChat partner universe
            </h1>
            <p className="text-lg text-gray-300">
              Create value for your clients, leveraging our world-class
              technology. Partner with us and grow your business!
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-[#1E1C35]/70 backdrop-blur-md rounded-2xl p-8 shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6">Become a partner</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm mb-1">Full name</label>
                <input
                  type="text"
                  placeholder="Type your name here..."
                  className="w-full px-4 py-2 rounded-md bg-[#2A2843] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email address</label>
                <input
                  type="email"
                  placeholder="✉️ Type your email something..."
                  className="w-full px-4 py-2 rounded-md bg-[#2A2843] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Company name</label>
                <input
                  type="text"
                  placeholder="Type your company’s name"
                  className="w-full px-4 py-2 rounded-md bg-[#2A2843] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="bg-violet-600 hover:bg-violet-500 text-white py-2 px-6 rounded-md font-medium"
              >
                Submit application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
