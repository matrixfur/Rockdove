import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { number: "01", title: "Quality we follow" },
  { number: "02", title: "Logistics" },
  { number: "03", title: "From OEM to Customer" },
  { number: "04", title: "Accreditation" },
];

export const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLImageElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // disable GSAP on mobile

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: false,
        },
      });

      // Plane flies top → bottom
      tl.fromTo(
        planeRef.current,
        { yPercent: -50, opacity: 0 },
        { yPercent: 350, opacity: 1, ease: "none" },
        0
      );

      // Line reveal (grow height)
      tl.fromTo(
        lineRef.current,
        { scaleY: 0 },
        { scaleY: 1, transformOrigin: "top center", ease: "none" },
        0
      );

      // Reveal each feature as the plane crosses
      features.forEach((_, i) => {
        tl.fromTo(
          `.feature-${i}`,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8 },
          i * 0.2 + 0.3
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[250vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#02040a] via-[#050910] to-[#0b1320]"
    >
      {/* Glowing vertical line */}
      <div
        ref={lineRef}
        className="absolute top-0 left-1/2 w-[4px] h-full bg-gradient-to-b from-transparent via-[#5cc6d0] to-[#5cc6d0]/30 blur-[1px] scale-y-0"
      />

      {/* Airplane */}
      <img
        ref={planeRef}
        src="/pngwing-com--28--28-1.png"
        alt="Plane"
        className="absolute left-1/2 w-[100px] -translate-x-1/2 drop-shadow-[0_0_25px_#5cc6d0]"
      />

      {/* Title */}
      <h2 className="font-semibold text-center text-4xl md:text-5xl text-white mt-40">
        Fly safe with parts you
        <span className="text-[#5cc6d0]"> trust.</span>
      </h2>

      {/* Features List */}
      <div className="relative z-10 mt-40 grid grid-cols-1 md:grid-cols-2 gap-16 text-center">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`feature-${i} opacity-0 transform transition-all`}
          >
            <div className="font-bold text-[#5cc6d0] text-2xl md:text-4xl">
              {feature.number}
            </div>
            <div className="font-medium text-white text-lg md:text-2xl mt-2">
              {feature.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
