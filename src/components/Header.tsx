import React, { useState, useRef } from "react";
import {
  ChevronDown,
  Wrench,
  Plane,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import { Button } from "./ui/button";

const navigationItems = [
  {
    label: "Services",
    hasDropdown: true,
    sections: [
      {
        title: "Management",
        links: [
          {
            name: "Asset Management",
            icon: <Briefcase className="w-4 h-4 text-[#5cc6d0]" />,
          },
          {
            name: "Repair Management",
            icon: <Wrench className="w-4 h-4 text-[#5cc6d0]" />,
          },
        ],
      },
      {
        title: "Support",
        links: [
          {
            name: "24/7 AOG Support",
            icon: <Plane className="w-4 h-4 text-[#5cc6d0]" />,
          },
        ],
      },
    ],
  },
  { label: "RFQ", hasDropdown: false },
  {
    label: "Company",
    hasDropdown: true,
    sections: [
      {
        title: "About",
        links: [
          {
            name: "The Story",
            icon: <Briefcase className="w-4 h-4 text-[#5cc6d0]" />,
          },
          {
            name: "Careers",
            icon: <Plane className="w-4 h-4 text-[#5cc6d0]" />,
          },
        ],
      },
      {
        title: "More",
        links: [
          {
            name: "FAQs",
            icon: <HelpCircle className="w-4 h-4 text-[#5cc6d0]" />,
          },
        ],
      },
    ],
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
    }, 200);
  };

  return (
    <header className="absolute top-6 left-8 right-8 flex items-center justify-between z-50">
      {/* Logo */}
      <img
        src="/rda-gradient-logo--1--1.png"
        alt="RockDove Logo"
        className="w-[220px] h-[70px] object-contain transition-transform duration-300 hover:scale-105"
      />

      {/* Navigation */}
      <nav className="flex flex-1 justify-center items-center gap-8 md:gap-14 relative">
        {navigationItems.map((item) => (
          <div
            key={item.label}
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
            onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
          >
            <span
              className={`font-semibold text-base md:text-lg transition-colors duration-300 ${
                activeDropdown === item.label
                  ? "text-[#4ab5bf]"
                  : "text-[#5cc6d0]"
              }`}
            >
              {item.label}
            </span>

            {item.hasDropdown && (
              <ChevronDown
                className={`w-5 h-5 transition-all duration-300 ${
                  activeDropdown === item.label
                    ? "text-[#4ab5bf] translate-y-[2px]"
                    : "text-[#5cc6d0]"
                }`}
              />
            )}

            {/* Mega Dropdown */}
            {item.hasDropdown && activeDropdown === item.label && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[600px] bg-[#0b0d10]/95 border border-[#1a1d22] backdrop-blur-xl rounded-xl shadow-2xl shadow-black/50 p-6 z-50 transition-all duration-300 animate-fadeIn">
                <div className="grid grid-cols-2 gap-8">
                  {item.sections?.map((section, i) => (
                    <div key={i}>
                      <h4 className="text-[#5cc6d0] font-semibold mb-3 text-sm uppercase tracking-wide">
                        {section.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.links.map((link, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-2 text-white/80 hover:text-[#5cc6d0] transition-colors cursor-pointer text-base"
                          >
                            {link.icon}
                            {link.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Contact Button */}
      <div>
        <Button
          variant="outline"
          className="rounded-full border border-[#5cc6d0] text-[#5cc6d0] px-6 py-2 hover:bg-[#5cc6d0] hover:text-black transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-[#5cc6d0]/30"
        >
          Contact
        </Button>
      </div>
    </header>
  );
};
