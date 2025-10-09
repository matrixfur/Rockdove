import React from "react";

export const Clients: React.FC = () => {
  return (
    <section className="relative w-full h-[1100px] flex items-center justify-center">
      <img
        className="w-full h-full object-cover animate-flicker"
        alt="Pngwing com"
        src="/pngwing-com--9--3-1.png"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-3xl md:text-5xl text-center tracking-[0] leading-[normal] transition-transform duration-500 hover:scale-105 animate-glow">
          Clients
        </h2>

        <img
          className="mt-8 md:mt-16 w-full max-w-4xl h-auto object-contain transition-transform duration-500 hover:scale-105 animate-spooky-float"
          alt="Rda MRO black AZURE"
          src="/rda---mro-black-azure-cmyk-1.png"
        />
      </div>
    </section>
  );
};
