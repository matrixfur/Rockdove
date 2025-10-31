import React, { useEffect, useRef } from 'react';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { GlowEffect } from '../components/ui/GlowEffect';
import { Meteors } from '../components/ui/meteors';
import { Card, CardContent } from '../components/ui/card';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from '../components/Header';
import {Footer} from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const ServiceStepCard = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div
    className={cn(
      'relative h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-white/[0.3] rounded-2xl transition-all duration-300 min-h-[300px]',
      className
    )}
  >
    <Meteors number={20} />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const RepairManagementPage = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLImageElement | null>(null);
  const whiteLineRef = useRef<HTMLDivElement | null>(null);
  const blueLineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
  const serviceSteps = [
    { title: 'Assessment & Diagnosis', description: 'Thorough inspection of components like thrust reversers and actuators.' },
    { title: 'Repair & Overhaul', description: 'Utilizing partnerships for specialized fixes on engines, brakes, and wheels.' },
    { title: 'Testing & Certification', description: 'Rigorous quality checks to guarantee reliability.' },
    { title: 'Integration with Supply Chain', description: 'Seamless coordination with warehousing and distribution for quick part replacement.' },
  ];

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

  return (
    <>
    <Header/>
    <div className="flex flex-col overflow-hidden bg-black text-white">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Comprehensive Repair Management for <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">Unmatched Aircraft Reliability</span>
            </h1>
          </>
        }
      >
        <div className="py-20 px-8">
          <div className="max-w-6xl mx-auto relative rounded-2xl border border-white/[0.2]">
            <GlowEffect />
            <div className="relative z-10 bg-black rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-4 gap-8 p-4"
                >
                  {serviceSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className={cn(
                        'transition-transform duration-300 hover:scale-105',
                        index === 0 || index === 3 ? 'md:translate-y-8' : '-translate-y-8'
                      )}
                    >
                      <ServiceStepCard>
                        <div className="flex flex-col p-4 h-full">
                          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                          <p className="text-gray-400">{step.description}</p>
                        </div>
                      </ServiceStepCard>
                    </motion.div>
                  ))}
                </motion.div>
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
    <Footer />
    </>
  );
};

export default RepairManagementPage;
