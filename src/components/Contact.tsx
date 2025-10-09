import React from "react";
import { Button } from "./ui/button";

export const Contact: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-3xl md:text-5xl text-center tracking-[0] leading-[normal] animate-fade-up">
          Lets Talk Business
        </h2>

        <p className="mt-8 md:mt-12 [font-family:'Poppins',Helvetica] font-medium text-white text-lg md:text-xl tracking-[0] leading-[normal] animate-fade-up" style={{animationDelay: '0.1s', opacity: 0}}>
          Ready to elevate your fleet? <br />
          At RDA, we deliver fast, reliable parts to keep your aircraft soaring
        </p>

        <Button 
          className="mt-8 md:mt-12 h-auto bg-transparent border-0 p-0 hover:bg-transparent relative transition-transform duration-300 hover:scale-110 animate-fade-up hover:animate-shake" 
          style={{animationDelay: '0.2s', opacity: 0}}
        >
          <img
            className="w-[150px] h-[46px]"
            alt="Rectangle"
            src="/rectangle-6.svg"
          />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [font-family:'Poppins',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[normal]">
            Explore
          </span>
        </Button>
      </div>
    </section>
  );
};
