import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ChevronDown as ChevronDownIcon,
    Wrench,
    Plane,
    Briefcase,
    HelpCircle,
    Menu as MenuIcon,
    X as XIcon,
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
          { name: "Asset Management", icon: <Briefcase className="w-4 h-4 text-[#5cc6d0]" />, href: "/asset-management" },
          { name: "Repair Management", icon: <Wrench className="w-4 h-4 text-[#5cc6d0]" />, href: "/repair-management" },
        ],
      },
      {
        title: "Support",
        links: [
          { name: "24/7 AOG Support", icon: <Plane className="w-4 h-4 text-[#5cc6d0]" />, href: "/aog-support" },
        ],
      },
    ],
  },
  { label: "RFQ", hasDropdown: false, href: "/rfq" },
  {
    label: "Company",
    hasDropdown: true,
    sections: [
      {
        title: "About",
        links: [
          { name: "The Story", icon: <Briefcase className="w-4 h-4 text-[#5cc6d0]" />, href: "/the-story" },
          { name: "Careers", icon: <Plane className="w-4 h-4 text-[#5cc6d0]" />, href: "/careers" },
        ],
      },
      {
        title: "More",
        links: [
          { name: "FAQs", icon: <HelpCircle className="w-4 h-4 text-[#5cc6d0]" />, href: "/faqs" },
        ],
      },
    ],
  },
];

export const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Mobile menu states
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="absolute top-6 left-8 right-8 flex items-center justify-between z-50">
      {/* Logo */}
      <img
        src="/rda-gradient-logo--1--1.png"
        alt="RockDove Logo"
        className="w-[220px] h-[70px] object-contain transition-transform duration-300 hover:scale-105"
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-center items-center gap-12 relative">
        {navigationItems.map((item) => (
          <div
            key={item.label}
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
            onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
          >
            {item.hasDropdown ? (
              <span className={`font-bold text-base md:text-lg transition-colors duration-300 ${activeDropdown === item.label ? "text-[#4ab5bf]" : "text-[#5cc6d0]"}`}>
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href || "#"}
                className={`font-bold text-base md:text-lg transition-colors duration-300 ${activeDropdown === item.label ? "text-[#4ab5bf]" : "text-[#5cc6d0]"}`}
              >
                {item.label}
              </Link>
            )}

            {item.hasDropdown && (
              <ChevronDownIcon
                className={`w-5 h-5 text-[#5cc6d0] transition-all duration-300 ${activeDropdown === item.label ? "text-[#4ab5bf] translate-y-[2px]" : ""}`}
              />
            )}

            {/* Mega Dropdown */}
            {item.hasDropdown && activeDropdown === item.label && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[600px] bg-[#0b0d10]/95 border border-[#1a1d22] backdrop-blur-xl rounded-xl shadow-2xl shadow-black/50 p-6 z-50 transition-all duration-300 animate-fadeIn">
                <div className="grid grid-cols-2 gap-8">
                  {item.sections?.map((section, i) => (
                    <div key={i}>
                      <h4 className="text-[#5cc6d0] font-semibold mb-3 text-sm uppercase tracking-wide">{section.title}</h4>
                      <ul className="space-y-3">
                        {section.links.map((link, j) => (
                          <li key={j}>
                            <Link
                              to={link.href || "#"}
                              className="flex items-center gap-2 text-white/80 hover:text-[#5cc6d0] transition-colors cursor-pointer text-base"
                            >
                              {link.icon} {link.name}
                            </Link>
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

      {/* Mobile: Hamburger */}
      <div className="md:hidden flex items-center gap-3">
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-full bg-[#0b0d10]/60 border border-[#1a1d22] text-[#5cc6d0] hover:bg-[#5cc6d0]/10 transition"
        >
          <MenuIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Contact Button (desktop only) */}
      <div className="hidden md:block">
        <Button
          variant="outline"
          className="rounded-full border border-[#5cc6d0] text-[#5cc6d0] px-6 py-2 hover:bg-[#5cc6d0] hover:text-black transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-[#5cc6d0]/30"
        >
          Contact
        </Button>
      </div>

      {/* Mobile menu overlay / drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer panel */}
          <div className="relative ml-auto w-full max-w-md bg-[#0b0d10]/95 border-l border-[#1a1d22] p-6 overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <img src="/rda-gradient-logo--1--1.png" alt="RockDove Logo" className="w-[160px] h-[50px] object-contain" />
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full bg-transparent text-[#5cc6d0] hover:bg-[#5cc6d0]/10 transition"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <nav>
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.label} className="border-b border-[#1a1d22] pb-3">
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileActiveSection((s) => (s === item.label ? null : item.label))}
                          className="w-full flex items-center justify-between text-left text-white/90 font-semibold text-lg"
                        >
                          <span className="text-[#5cc6d0]">{item.label}</span>
                          <ChevronDownIcon
                            className={`w-5 h-5 text-[#5cc6d0] transition-transform ${mobileActiveSection === item.label ? "rotate-180" : ""}`}
                          />
                        </button>

                        <div className={`mt-3 overflow-hidden transition-all ${mobileActiveSection === item.label ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className="space-y-3">
                            {item.sections?.map((section, si) => (
                              <div key={si}>
                                <h5 className="text-sm text-[#4ab5bf] font-medium mb-2 uppercase">{section.title}</h5>
                                <ul className="space-y-2">
                                  {section.links.map((link, li) => (
                                    <li key={li}>
                                      <Link
                                        to={link.href || "#"}
                                        className="flex items-center gap-3 text-white/80 hover:text-[#5cc6d0] cursor-pointer"
                                      >
                                        {link.icon}
                                        <span>{link.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.href || "#"}
                        className="w-full text-left text-white/90 font-semibold text-lg py-2 block"
                      >
                        <span className="text-[#5cc6d0]">{item.label}</span>
                      </Link>
                    )}
                  </li>
                ))}

                <li className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border border-[#5cc6d0] text-[#5cc6d0] px-6 py-2 hover:bg-[#5cc6d0] hover:text-black transition-all duration-300"
                    onClick={() => {
                      // Close menu and (optionally) navigate to contact or open contact modal
                      setMobileOpen(false);
                    }}
                  >
                    Contact
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};