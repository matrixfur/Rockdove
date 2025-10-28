
import React, { lazy, Suspense, useEffect, useRef } from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import Header from "../components/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Lazy load the Spline component for faster initial load
const Spline = lazy(() => import("@splinetool/react-spline"));

const RepairManagementPage = () => {
  const partnerCards = [
    {
      title: "SAT",
      description:
        "Provides comprehensive repair and service solutions for aircraft components.",
      logo: "https://c.animaapp.com/mhamq68c87ZEAC/img/1630555350384-removebg-preview-1.png",
      logoClass: "w-[200px] h-[200px]",
    },
    {
      title: "LogoSky",
      description:
        "Provides comprehensive repair and service solutions for aircraft components.",
      logo: "https://c.animaapp.com/mhamq68c87ZEAC/img/logosky-logos-lockup-black-1.png",
      logoClass: "w-[162px] h-10",
    },
    {
      title: "Shanghai Junxun\nAviation",
      description:
        "Provides comprehensive repair and service solutions for aircraft components.",
      logo: "https://c.animaapp.com/mhamq68c87ZEAC/img/2022082410490570a173-removebg-preview-1.png",
      logoClass: "w-[225px] h-[81px]",
    },
    {
      title: "JS-Tooling",
      description:
        "Provides comprehensive repair and service solutions for aircraft components.",
      logo: "https://c.animaapp.com/mhamq68c87ZEAC/img/logo-removebg-preview-1.png",
      logoClass: "w-[200px] h-[130px]",
    },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLImageElement | null>(null);
  const whiteLineRef = useRef<HTMLDivElement | null>(null);
  const blueLineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const plane = planeRef.current;
    const blueLine = blueLineRef.current;

    if (!section || !plane || !blueLine) return;

    // Scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    // Plane movement along the line
    tl.fromTo(plane, { y: 0 }, { y: 900, ease: "none" }, 0);

    // Line color progress (white to cyan as plane moves)
    tl.fromTo(
      blueLine,
      { scaleY: 0 },
      { scaleY: 1, transformOrigin: "top center", ease: "none" },
      0
    );

    // Fade-in animations for text blocks
    const texts = gsap.utils.toArray<HTMLElement>(".feature-block");
    texts.forEach((text) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            toggleActions: "play none none none", // only once
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col overflow-hidden bg-black text-white">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
                Comprehensive Repair Management for <br />
                <span
                  className="text-4xl md:text-[6rem] font-bold mt-1 leading-none"
                  style={{ color: "#5cc6d0" }}
                >
                  Unmatched Aircraft Reliability
                </span>
              </h1>
            </>
          }
        >
          <div className="py-20 px-8">
            <div className="max-w-6xl mx-auto relative rounded-2xl border border-[#1a1d22] bg-black/20 backdrop-blur-sm">
              <div className="relative z-10 rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Left side content */}
                  <div className="lg:w-1/2 text-left">
                    <h2
                      className="text-3xl font-bold mb-4 "
                      style={{ color: "#5cc6d0" }}
                    >
                      Repair Management
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      Leveraging global partnerships and expert maintenance on key
                      components like engines, APUs, and landing gears, we deliver
                      fast, high-quality repairs to keep your fleet operational
                      with minimal downtime.
                    </p>
                  </div>

                  {/* Right side Spline design */}
                  <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] transform lg:-translate-x-20">
                    <Suspense
                      fallback={
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                          Loading 3D model...
                        </div>
                      }
                    >
                      <Spline scene="https://prod.spline.design/5Il-6GgGo4JuC90x/scene.splinecode" />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>

        {/* Partnerships Section */}
        <section className="relative px-[149px] py-[93px]">
          <div className="text-center mb-[94px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal] mb-6">
              Powered by Industry-Leading Partnerships
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-[normal]">
              Our alliances with top providers enhance our repair capabilities,
              <br />
              delivering reliable, efficient, and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-4 gap-[18px]">
            {partnerCards.map((partner, index) => (
              <Card
                key={index}
                className={"group relative bg-[#d9d9d9] rounded-[20px] border-none cursor-pointer transition-all duration-300 hover:-translate-y-2 overflow-hidden h-[403px] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(180deg,rgba(92,198,208,1)_0%,rgba(47,101,106,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none translate-y-[-1rem] animate-fade-in opacity-0"}
                style={
                  {
                    "--animation-delay": `${400 + index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-[#5CC6D0] to-[#0097A1] transition-opacity duration-500 rounded-[20px]"></div>
                <CardContent className="relative z-10 flex flex-col items-center justify-between h-full p-6">
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      className={`${partner.logoClass} object-cover`}
                      alt={partner.title}
                      src={partner.logo}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="[font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal] mb-3 whitespace-pre-line transition-colors duration-300 group-hover:text-white">
                      {partner.title}
                    </h3>
                    <div className="w-6 h-0.5 bg-black mx-auto mb-3 transition-colors duration-300 group-hover:bg-white" />
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal] transition-colors duration-300 group-hover:text-white">
                      {partner.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
      ref={sectionRef}
      className="relative min-h-[230vh] bg-black text-white flex flex-col items-center justify-start py-24 font-[Poppins]"
    >
      {/* Title */}
      <h2 className="text-[48px] font-semibold text-center leading-[100%] text-white mb-32">
        Fly safe with parts you <span className="text-[#5CC6D0]">trust.</span>
      </h2>

      {/* Vertical Lines */}
      <div
        ref={whiteLineRef}
        className="absolute top-[280px] left-1/2 w-[10px] h-[900px] bg-white rounded-full -translate-x-1/2"
      ></div>

      <div
        ref={blueLineRef}
        className="absolute top-[280px] left-1/2 w-[10px] h-[900px] bg-[#5CC6D0] rounded-full -translate-x-1/2 scale-y-0"
      ></div>

      {/* Plane */}
      <img
        ref={planeRef}
        src="/sliderplane.png"
        alt="Plane"
        className="absolute top-[250px] left-1/2 w-[120px] h-[120px] rotate-0 -translate-x-1/2"
      />

      {/* Zigzag Feature Blocks */}
      <div className="mt-[-100px]  flex flex-col gap-[120px] w-full max-w-[1200px]">
        {/* 01 - Left */}
        <div className="feature-block flex justify-start ml-[5vw] mt-[20vh]">
          <div className="max-w-[440px] text-left space-y-3">
            <div className="text-[#5CC6D0] font-bold text-[40px] leading-[100%]">
              01
            </div>
            <h3 className="text-[32px] font-medium leading-[110%]">
              Quality we follow
            </h3>
            <p className="text-[16px] font-normal text-gray-300 leading-[160%] tracking-wide">
              RDA ensures top-quality products and on-time support, backed by
              ISO 9001:2015 compliance, ASA, and NBAA memberships. Regular
              audits reflect our commitment to being the premier aviation
              service provider.
            </p>
          </div>
        </div>

        {/* 02 - Right */}
        <div className="feature-block flex justify-end">
          <div className="max-w-[440px] mr-[100px] mr-[4vw] mt-[-15vh]  text-right space-y-3">
            <div className="text-[#5CC6D0] font-bold text-[40px] leading-[100%]">
              02
            </div>
            <h3 className="text-[32px] font-medium leading-[110%]">
              Logistics
            </h3>
            <p className="text-[16px] font-normal text-gray-300 leading-[160%] tracking-wide">
              Our team ensures timely global delivery of aircraft parts,
              partnering with trusted providers like DHL, FedEx, UPS, and TWI.
              We collaborate with private air, sea, and freight forwarders for
              reliable, efficient shipping.
            </p>
          </div>
        </div>

        {/* 03 - Left */}
        <div className="feature-block flex justify-start">
          <div className="max-w-[440px]  ml-[5vw] mt-[-10vh] text-left space-y-3">
            <div className="text-[#5CC6D0] font-bold text-[40px] leading-[100%]">
              03
            </div>
            <h3 className="text-[32px] font-medium leading-[110%]">
              From OEM to Customer
            </h3>
            <p className="text-[16px] font-normal text-gray-300 leading-[160%] tracking-wide">
              A trusted distributor of aerospace tools and placards, RDA
              specializes in aircraft parts for the Asia-Pacific, Middle East,
              and Africa. As an official OEM distributor, we guarantee quality
              and reliability for every order.
            </p>
          </div>
        </div>

        {/* 04 - Right */}
        <div className="feature-block flex justify-end">
          <div className="max-w-[440px] mr-[100px] mr-[4vw] mt-[-15vh] text-right space-y-3">
            <div className="text-[#5CC6D0] font-bold text-[40px] leading-[100%]">
              04
            </div>
            <h3 className="text-[32px] font-medium leading-[110%]">
              Accreditation
            </h3>
            <p className="text-[16px] font-normal text-gray-300 leading-[160%] tracking-wide">
              Partnerships with SAT, Logisky, Shanghai Junuun Aviation, and
              JS-Tooling elevate our repair, tooling, and distribution services.
              We ensure fast turnaround, high precision, and unmatched service
              standards.
            </p>
          </div>
        </div>
      </div>
    </section>

        {/* CTA Section */}
        
        <section className="py-20 px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Elevate Your Aircraft Maintenance Today
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button className="bg-blue-600 text-white px-8 py-4 text-lg font-semibold hover:bg-blue-700">
                Schedule a Repair Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      
    </>
  );
};

export default RepairManagementPage;
