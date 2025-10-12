import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  { number: "01", title: "Quality we follow" },
  { number: "02", title: "Logistics" },
  { number: "03", title: "From OEM to Customer" },
  { number: "04", title: "Accreditation" },
];

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLImageElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const featureRefs = useRef<HTMLDivElement[]>([]);
  const [sectionHeight, setSectionHeight] = useState("350vh");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      if (!sectionRef.current || !lineRef.current) return;

      const topOffset = 200;
      const featureSpacing = 200;
      const featureHeight = 140;
      const totalHeight =
        topOffset + FEATURES.length * (featureHeight + featureSpacing) + 300;

      setSectionHeight(`${totalHeight}px`);

      if (window.innerWidth < 768) return;

      const ctx = gsap.context(() => {
        ScrollTrigger.defaults({
          scrub: 1.2,
          ease: "power1.inOut",
        });

        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "+=300",
            },
          }
        );

        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          }
        );

        gsap.to(lineRef.current, {
          opacity: 0.8,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.inOut",
        });

        const planeTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const lineHeight = lineRef.current!.offsetHeight;
              gsap.set(planeRef.current, { y: progress * lineHeight * 0.98 });
            },
          },
        });

        planeTimeline.to(planeRef.current, {
          rotation: 5,
          yoyo: true,
          repeat: -1,
          duration: 1.2,
          ease: "sine.inOut",
        });

        FEATURES.forEach((_, i) => {
          const el = featureRefs.current[i];
          if (!el) return;
          const isLeft = i % 2 === 0;

          gsap.fromTo(
            el,
            {
              opacity: 0,
              x: isLeft ? -120 : 120,
              scale: 0.95,
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 75%",
                end: "top 45%",
                scrub: true,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      }, sectionRef);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: sectionHeight }}
      className="relative flex flex-col items-center justify-start overflow-hidden bg-black"
    >
      <h2
        ref={titleRef}
        className="font-semibold text-center text-4xl md:text-5xl text-white mt-24 opacity-0 relative z-10"
      >
        Fly safe with parts you{" "}
        <span className="text-[#5cc6d0]">trust.</span>
      </h2>

      <div
        ref={lineRef}
        className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[3px] h-full 
                   bg-gradient-to-b from-transparent via-[#5cc6d0] to-[#5cc6d0]/30 
                   blur-[1px] scale-y-0"
      />

      <img
        ref={planeRef}
        src="/pngwing-com--28--28-1.png"
        alt="Plane"
        className="absolute left-1/2 -translate-x-1/2 w-[100px] drop-shadow-[0_0_30px_#5cc6d0]"
        style={{ top: "200px" }}
      />

      <div className="relative z-10 mt-48 w-full max-w-6xl">
        {FEATURES.map((feature, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              ref={(el) => (featureRefs.current[i] = el!)}
              className={`opacity-0 flex w-full ${
                isLeft ? "justify-end pr-[52%]" : "justify-start pl-[52%]"
              } ${i !== FEATURES.length - 1 ? "mb-48" : ""}`}
            >
              <div
                className={`max-w-md px-6 py-5 rounded-2xl backdrop-blur-sm 
                            bg-white/5 border border-white/10 transition-all
                            ${isLeft ? "text-right hover:translate-x-2" : "text-left hover:-translate-x-2"}`}
              >
                <div className="font-bold text-[#5cc6d0] text-2xl md:text-4xl">
                  {feature.number}
                </div>
                <div className="font-medium text-white text-lg md:text-2xl mt-2">
                  {feature.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;