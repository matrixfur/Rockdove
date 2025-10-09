import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Clients } from "./Clients";
import { Services } from "./Services";
import { Inventory } from "./Inventory";
import { Stats } from "./Stats";
import { Features } from "./Features";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import "../styles/horror-effects.css";

export const Layout: React.FC = () => {
  return (
    <div className="bg-black overflow-hidden w-full min-h-screen relative">
      {/* Background Images */}
      <img
        className="absolute top-[5402px] left-0 w-full h-[891px] object-cover animate-flicker"
        alt="Hd wallpaper night"
        src="/hd-wallpaper--night--airport--boeing-737--mau--ukraine-internati.png"
      />

      {/* Main Content */}
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Inventory />
      <Stats />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};
