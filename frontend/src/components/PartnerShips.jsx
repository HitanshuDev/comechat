import React from "react";
import { FaCheckCircle, FaCodeBranch, FaRocket } from "react-icons/fa";

const partnerships = [
  {
    icon: <FaCheckCircle />,
    title: "Affiliate partner program",
    desc: `Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.`,
  },
  {
    icon: <FaCodeBranch />,
    title: "Technology partner program",
    desc: `Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure!`,
  },
  {
    icon: <FaRocket />,
    title: "Start up growth program",
    desc: `We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.`,
  },
];

export default function PartnerShip() {
  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {partnerships.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-violet-100 text-violet-600 text-lg">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
