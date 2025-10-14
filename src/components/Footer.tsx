import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const footerServices = ["Asset Management", "Repair Management", "24/7 AOG Support"];
const footerCompany = ["Story", "Careers", "FAQs"];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white py-14 md:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 border-b border-white/10 pb-10 relative">
          {/* Column 1 - Logo */}
          <div className="flex flex-col items-start">
            <img
              className="w-[200px] h-auto object-contain mb-6 transition-transform duration-300 hover:scale-105"
              alt="Rockdove Aviation Logo"
              src="/rda-black-logo.png"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Delivering reliable aviation parts and services across the globe
              with precision and trust.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div className="relative">
            {/* Left Divider Line */}
            <span className="hidden md:block absolute left-0 top-0 h-full w-[1px] bg-white/15 -translate-x-4"></span>
            <h3 className="text-xl font-semibold mb-5 text-[#5cc6d0]">
              Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((service, i) => (
                <li
                  key={i}
                  className="text-white/80 hover:text-[#5cc6d0] cursor-pointer transition-colors duration-200"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="relative">
            <span className="hidden md:block absolute left-0 top-0 h-full w-[1px] bg-white/15 -translate-x-4"></span>
            <h3 className="text-xl font-semibold mb-5 text-[#5cc6d0]">
              Company
            </h3>
            <ul className="space-y-3">
              {footerCompany.map((item, i) => (
                <li
                  key={i}
                  className="text-white/80 hover:text-[#5cc6d0] cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="relative">
            <span className="hidden md:block absolute left-0 top-0 h-full w-[1px] bg-white/15 -translate-x-4"></span>
            <h3 className="text-xl font-semibold mb-5 text-[#5cc6d0]">
              Contact
            </h3>
            <p className="text-white/80 text-sm mb-3 leading-relaxed">
              No. B17-22, RAK Port Customs Building, Nakheel Ras Al Khaimah, UAE
            </p>
            <p className="text-white/80 text-sm mb-2 hover:text-[#5cc6d0] cursor-pointer transition-colors">
              +971 505056093
            </p>
            <p className="text-white/80 text-sm hover:text-[#5cc6d0] cursor-pointer transition-colors">
              sales@rockdoveaviation.com
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-5 mt-10 flex-wrap">
          {[
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaLinkedinIn />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaFacebookF />, link: "#" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              className="w-12 h-12 flex items-center justify-center rounded-full 
                         bg-[#5cc6d0]/20 text-[#5cc6d0] 
                         hover:bg-[#5cc6d0] hover:text-black 
                         transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-white/60 text-sm border-t border-white/10 pt-6">
          © 2025 Rockdove Aviation | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};