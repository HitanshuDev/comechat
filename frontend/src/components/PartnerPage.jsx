import React, { useState } from "react";
import Hero from "./Hero";
import Brandlogos from './logos/Brandlogos.png'
import TitleBlock from "./TitleBlock";
import ListSection from "./ListSection";
import TitleBlock2 from "./TitleBlock2";
import PartnerShips from "./PartnerShips";
import FAQs from "./FAQs";
import PreFooter from './PreFooter.jsx';
import Footer from './Footer.jsx';

export default function PartnerPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#0D0B1F] text-white">
      <Hero />

      <div className="w-[1440px] mx-auto">
          <img src={Brandlogos} alt="" ></img>
      </div>

      <TitleBlock />
      <ListSection />
      <TitleBlock2 />
      <PartnerShips />
      <FAQs />
      <PreFooter />
      <Footer />
    </div>
  );
}
