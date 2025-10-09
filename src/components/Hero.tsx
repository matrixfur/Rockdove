import React from "react";
import { Button } from "./ui/button";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        alt="Airplane background"
        src="/download-free-image-of-photography-of-airplane-aircraft-airliner.png"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="[font-family:'Poppins',Helvetica] font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight">
          Parts, Service and
          <br />
          <span className="text-[#5cc6d0]">Solutions</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 md:mt-10 max-w-3xl mx-auto [font-family:'Poppins',Helvetica] font-medium text-white text-lg md:text-xl leading-relaxed">
          The one-stop destination for all of your aircraft components
          <br /> and servicing for a safe flight.
        </p>

        {/* Button */}
        <Button
          className="mt-8 md:mt-12 h-auto bg-[#5cc6d0] rounded-[40px] border-0 px-8 md:px-10 py-3 transition-all duration-300 hover:bg-[#4ab5bf] hover:scale-110 hover:shadow-lg hover:shadow-[#5cc6d0]/50"
        >
          <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base md:text-lg">
            Know more
          </span>
        </Button>
      </div>
    </section>
  );
};