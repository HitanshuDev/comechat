import React from "react";
import { ReactComponent as Comet1 } from './comets/prefooter/comet1.svg';
import { ReactComponent as Comet2 } from './comets/prefooter/comet2.svg';
import { ReactComponent as Stars } from './comets/prefooter/stars.svg';

export default function PreFooter() {
  return (
    <section className="relative bg-gradient-to-b from-[#1B1A2D] to-[#0D0B1F] text-white py-24 px-4 text-center overflow-hidden">

      {/* Stars background */}
      <div className="absolute inset-0 z-0">
        <Stars className="w-full h-full object-cover" />
      </div>

      {/* Comet 1 - Left side */}
      <div className="absolute top-[-100px] left-[-100px] z-10">
        <Comet1 className="w-[400px] h-[400px]" />
      </div>

      {/* Comet 2 - Right side */}
      <div className="absolute bottom-[-100px] right-[-100px] z-10">
        <Comet2 className="w-[300px] h-[300px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get started for free</h2>
        <p className="text-gray-300 text-lg mb-2">Build and test for as long as you need.</p>
        <p className="text-gray-300 text-lg mb-10">Pick a plan when you're ready.</p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 bg-black border border-white rounded-lg text-white hover:bg-white hover:text-black transition">
            Start free trial
          </button>
          <button className="px-6 py-3 bg-violet-600 rounded-lg text-white hover:bg-violet-500 transition">
            Schedule a demo
          </button>
        </div>
      </div>

    </section>
  );
}
