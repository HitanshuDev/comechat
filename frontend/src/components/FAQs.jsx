import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "This is a frequently asked question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
  {
    question: "This is a frequently asked question?",
    answer: "",
  },
  {
    question:
      "This is a very long frequently asked question about our services with more than one line?",
    answer: "",
  },
  {
    question: "This is a frequently asked question?",
    answer: "",
  },
  {
    question: "This is a question?",
    answer: "",
  },
  {
    question: "This is a question?",
    answer: "",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0); // First one open

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF8FF] py-20 px-4 text-black text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-orange-500 mb-2">FAQ’s</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          We want to help you <br /> with all your doubts
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-6 py-4 shadow-sm cursor-pointer transition"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`font-medium text-base ${
                    openIndex === index ? "font-semibold" : ""
                  }`}
                >
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && faq.answer && (
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
