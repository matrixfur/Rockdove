import React from "react";
import { Button } from "./ui/button";

const inventoryCategories = [
  { label: "Consumables", position: "top-4 left-0" },
  { label: "Rotables", position: "top-16 left-32" },
  { label: "Expendables", position: "top-48 left-48" },
  { label: "Tools", position: "top-28 left-80" },
  { label: "Placards", position: "top-0 left-96" },
];

export const Inventory: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#5cc6d0] text-3xl md:text-5xl text-center lg:text-left tracking-[0] leading-[normal] transition-transform duration-500 hover:scale-105">
              Broad Inventory
            </h2>

            <div className="w-full max-w-md [font-family:'Poppins',Helvetica] font-medium text-white text-lg md:text-2xl text-justify tracking-[0] leading-[normal] animate-fade-up">
              Backed by a global supply chain and round-the-clock support, we ensure
              fast, reliable delivery to keep your operations running smoothly.
            </div>

            <Button className="h-auto bg-transparent border-0 p-0 hover:bg-transparent relative transition-transform duration-300 hover:scale-110 animate-fade-up" style={{animationDelay: '0.2s', opacity: 0}}>
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

          <div className="relative">
            <img
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              alt="Untitled design"
              src="/untitled-design--3--1.png"
            />

            {/* Inventory Categories Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {inventoryCategories.map((category, index) => (
                <div
                  key={index}
                  className={`absolute ${category.position} [font-family:'Poppins',Helvetica] font-semibold text-white text-sm md:text-base tracking-[0] leading-[normal] transition-all duration-300 hover:text-[#5cc6d0] hover:scale-110 cursor-pointer animate-flicker`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {category.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
