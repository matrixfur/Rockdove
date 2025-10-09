import { ChevronDown as ChevronDownIcon } from "lucide-react";
import React, { useState, useRef } from "react";
import { Button } from "./ui/button";

const navigationItems = [
  { 
    label: "Services", 
    hasDropdown: true,
    dropdownItems: [
      "Asset Management",
      "Repair Management",
      "24/7 AOG Support"
    ]
  },
  { label: "RFQ", hasDropdown: false },
  { 
    label: "Company", 
    hasDropdown: true,
    dropdownItems: [
      "The Story",
      "Careers",
      "FAQs"
    ]
  },
];

export const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header className="absolute top-6 left-8 right-8 flex items-center justify-between z-50">
      {/* Logo */}
      <img
        className="w-[220px] h-[70px] object-contain transition-transform duration-300 hover:scale-105"
        alt="Rda gradient logo"
        src="/rda-gradient-logo--1--1.png"
      />

      {/* Navigation */}
      <nav className="flex flex-1 justify-center items-center gap-6 md:gap-12 relative">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
            onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
            onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
          >
            <span className="[font-family:'Poppins',Helvetica] font-bold text-[#5cc6d0] text-base md:text-lg transition-colors duration-300" style={{color: activeDropdown === item.label ? '#4ab5bf' : '#5cc6d0'}}>
              {item.label}
            </span>
            {item.hasDropdown && (
              <ChevronDownIcon className="w-5 h-5 text-[#5cc6d0] transition-all duration-300" style={{color: activeDropdown === item.label ? '#4ab5bf' : '#5cc6d0', transform: activeDropdown === item.label ? 'translateY(0.125rem)' : 'none'}} />
            )}
            {item.hasDropdown && activeDropdown === item.label && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max min-w-[180px] bg-white rounded-md shadow-lg z-50">
                <ul className="flex flex-col py-2">
                  {item.dropdownItems!.map((dropdownItem, idx) => (
                    <li
                      key={idx}
                      className="[font-family:'Poppins',Helvetica] px-4 py-2 text-[#5cc6d0] text-base md:text-lg cursor-pointer hover:text-[#4ab5bf] whitespace-nowrap"
                    >
                      {dropdownItem}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Contact Button */}
      <div className="flex items-center">
        <Button
          variant="outline"
          className="h-auto rounded-[40px] border border-solid border-white bg-transparent px-6 md:px-8 py-2 transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-lg hover:shadow-white/20"
        >
          <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base md:text-lg transition-colors duration-300 hover:text-black">
            Contact
          </span>
        </Button>
      </div>
    </header>
  );
};