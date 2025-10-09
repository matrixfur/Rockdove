import React from "react";

const features = [
  {
    number: "01",
    title: "Quality we follow",
  },
  {
    number: "02", 
    title: "Logistics",
  },
  {
    number: "03",
    title: "From OEM to \nCustomer",
  },
  {
    number: "04",
    title: "Accreditation",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-28 md:py-40 px-6 md:px-12 relative my-20 md:my-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-3xl md:text-5xl text-center tracking-[0] leading-[normal] animate-fade-up">
          <span className="text-white">Fly safe with parts you</span>
          <span className="text-[#5cc6d0]"> trust.</span>
        </h2>

        {/* Vertical Line */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3.5 h-[869px] animate-flicker">
          <img
            className="w-full h-full"
            alt="Line"
            src="/line-1.svg"
          />
        </div>

        {/* Center Icon */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[103px] h-[122px]">
          <img
            className="w-full h-full object-cover"
            alt="Pngwing com"
            src="/pngwing-com--28--28-1.png"
          />
        </div>

        {/* Features Grid */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="transition-all duration-500 hover:scale-105 animate-fade-up"
              style={{animationDelay: `${index * 0.2}s`, opacity: 0}}
            >
              <div className="flex items-start gap-4">
                <div className="[font-family:'Poppins',Helvetica] font-bold text-[#5cc6d0] text-2xl md:text-[40px] tracking-[0] leading-[normal]">
                  {feature.number}
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-medium text-white text-lg md:text-[32px] tracking-[0] leading-[normal] whitespace-pre-line">
                  {feature.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
