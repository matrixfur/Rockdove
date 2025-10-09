import React, { useState } from "react";

const faqItems = [
  {
    question: "What kind of certificate will come with the products?",
    answer: "All our products come with proper certification documents including traceability records, material certificates, and compliance documentation as required by aviation standards."
  },
  {
    question: "What is the warranty period for the unit supplied?",
    answer: "We provide comprehensive warranty coverage for all supplied units, with terms varying based on the specific component and manufacturer requirements. Contact us for detailed warranty information."
  },
  {
    question: "Average self life for the consumable supplied?",
    answer: "Consumable shelf life varies by product type and storage conditions. We provide detailed shelf life information with each consumable item and can advise on optimal storage practices."
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-3xl md:text-5xl text-center tracking-[0] leading-[normal] animate-fade-up">
          FAQS
        </h2>

        <p className="mt-8 md:mt-12 [font-family:'Poppins',Helvetica] font-semibold text-white text-lg md:text-2xl tracking-[0] leading-[normal] text-center animate-fade-up" style={{animationDelay: '0.1s', opacity: 0}}>
          Here are answers to <br />
          questions our clients ask.
        </p>

        <div className="mt-12 md:mt-16 space-y-4">
          {faqItems.map((faq, index) => (
            <div key={index} className="group animate-fade-up" style={{animationDelay: `${index * 0.1}s`, opacity: 0}}>
              <div className="border-b border-gray-600">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 text-left [font-family:'Poppins',Helvetica] font-medium text-white text-base md:text-lg tracking-[0] leading-[normal] transition-colors duration-300 hover:text-[#5cc6d0] flex items-center justify-between group"
                >
                  <span className="animate-flicker">{faq.question}</span>
                  <img
                    className={`w-[23px] h-[11px] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    } group-hover:translate-y-1`}
                    alt="Expand arrow"
                    src="/expand-arrow-4.png"
                  />
                </button>
                
                {openIndex === index && (
                  <div className="pb-4 [font-family:'Poppins',Helvetica] font-medium text-gray-300 text-sm md:text-base tracking-[0] leading-[normal] animate-fade-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
