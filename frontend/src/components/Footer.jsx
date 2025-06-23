import { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropupCircle } from "react-icons/io";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const footerData = [
    {
      title: "Platform",
      links: [
        "Features",
        "Chat & Messaging",
        "Voice & Video Calls",
        "Security & Compliance",
        "Extensions",
        "Webhooks & Bots",
        "Moderation",
        "Analytics & Insights",
        "Widgets",
        "UI Kits",
        "SDKs & APIs",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Social Community",
        "Marketplace",
        "Healthcare",
        "Education",
        "Virtual Events",
        "On-Demand Service",
        "Dating Apps",
        "Gaming",
        "Enterprise",
        "Startups",
      ],
    },
    {
      title: "Developers",
      links: [
        "React",
        "Angular",
        "Vue",
        "iOS Swift",
        "Android Kotlin",
        "Android Java",
        "React Native",
        "Ionic/Capacitor",
        "WordPress",
        "Laravel/PHP",
        "Flutter",
        "Next.js",
      ],
    },
    {
      title: "Resources",
      links: [
        "Customer stories",
        "Blog",
        "Give feedback",
        "Community forum",
        "Help center",
        "Partners",
      ],
    },
    {
      title: "Competitors",
      links: ["SendBird", "GetStream", "Applozic", "Twilio", "PubNub"],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Partners", "Pricing", "Chat with us"],
    },
  ];

  return (
    <footer className="text-white p-6">
      {/* Desktop View */}
      <div className="hidden lg:grid grid-cols-6 gap-8 max-w-7xl mx-auto py-10">
        {footerData.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold mb-4 text-[#6852D6]">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, index) => (
                <li
                  key={index}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
        {footerData.map((section) => (
          <div key={section.title}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(section.title)}
            >
              <h4 className="font-semibold text-[#6852D6]">{section.title}</h4>
              {openSection === section.title ? (
                <IoIosArrowDropupCircle size={20} className="text-[#6852D6]"/>
              ) : (
                <IoIosArrowDropdown size={20} className="text-[#6852D6]" />
              )}
            </div>
            {openSection === section.title && (
              <ul className="mt-2 space-y-2">
                {section.links.map((link, index) => (
                  <li
                    key={index}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

        {/* Social and Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 max-w-7xl mx-auto flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
          {/* Social Links - Always on top for mobile */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="#"
              className="flex space-x-1 items-center hover:text-gray-400"
            >
              <FaFacebook />
              <p>Facebook</p>
            </a>
            <a
              href="#"
              className="flex space-x-1 items-center hover:text-gray-400"
            >
              <FaLinkedin />
              <p>Linkedin</p>
            </a>
            <a
              href="#"
              className="flex space-x-1 items-center hover:text-gray-400"
            >
              <FaInstagram />
              <p>Instagram</p>
            </a>
            <a
              href="#"
              className="flex space-x-1 items-center hover:text-gray-400"
            >
              <FaTwitter />
              <p>Twitter</p>
            </a>
            <a
              href="#"
              className="flex space-x-1 items-center hover:text-gray-400"
            >
              <FaGithub />
              <p>GitHub</p>
            </a>
          </div>

          {/* Copyright & Policies */}
          <div className="text-gray-500 text-sm flex flex-row items-center space-x-6">
            <p>&copy; {new Date().getFullYear()} CometChat</p>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
    </footer>
  );
}
