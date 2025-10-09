import React from "react";

const footerServices = ["Asset Management", "Repair Management", "24/7 AOG Support"];
const footerCompany = ["Story", "Careers", "FAQs"];

const footerLogos = [
  {
    src: "/download--12--removebg-preview.png",
    alt: "Download removebg",
    className: "w-[70px] h-[70px] object-contain transition-transform duration-300 hover:scale-110",
  },
  {
    src: "/images--1--removebg-preview.png",
    alt: "Images removebg",
    className: "w-[45px] h-[45px] object-contain transition-transform duration-300 hover:scale-110",
  },
  {
    src: "/images--2--removebg-preview.png",
    alt: "Images removebg",
    className: "w-[100px] h-[30px] object-contain transition-transform duration-300 hover:scale-110",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#5cc6d0] text-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Logo & Socials */}
        <div>
          <img
            className="w-[220px] h-auto object-contain mb-6 transition-transform duration-300 hover:scale-105"
            alt="Rda black logo"
            src="/rda-black-logo.png"
          />
          <div className="flex items-center gap-4">
            {footerLogos.map((logo, index) => (
              <img
                key={index}
                className={logo.className}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>

        {/* Services & Company */}
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerServices.map((service, index) => (
                <li
                  key={index}
                  className="text-lg hover:text-black cursor-pointer transition-colors duration-200"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerCompany.map((item, index) => (
                <li
                  key={index}
                  className="text-lg hover:text-black cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p className="text-lg mb-4">
            No. B17-22, RAK Port Customs <br />
            Building, Nakheel Ras Al Khaimah, <br />
            UAE
          </p>
          <p className="text-lg mb-2 hover:text-black cursor-pointer transition-colors">
            +971 505056093
          </p>
          <p className="text-lg hover:text-black cursor-pointer transition-colors">
            sales@rockdoveaiation.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-white/40 pt-6 text-center text-lg font-medium">
        © 2025 Rockdove Aviation | All Rights Reserved
      </div>
    </footer>
  );
};