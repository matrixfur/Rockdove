import React, { lazy, Suspense } from "react";
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { Meteors } from '../components/ui/meteors';
import { GlowEffect } from "../components/ui/GlowEffect";

// Lazy load the Spline component for faster initial load
const Spline = lazy(() => import("@splinetool/react-spline"));


const RepairManagementPage = () => {
  const partners = [
    { name: 'SAT (SAT Aerospace Technologies, Inc.)', description: 'Provides comprehensive repair and service solutions for aircraft components.', logo: 'SAT' },
    { name: 'LogoSky', description: 'Specializes in aircraft placard distribution, ensuring compliance and quick turnaround.', logo: 'LogoSky' },
    { name: 'Shanghai Junxun Aviation', description: 'Offers strategic aerospace tools for precise repairs in the aviation industry.', logo: 'SJA' },
    { name: 'JS-Tooling', description: 'Delivers advanced tooling solutions for complex maintenance tasks.', logo: 'JS-T' },
  ];

  return (
    <div className="flex flex-col overflow-hidden bg-black text-white">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Comprehensive Repair Management for <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none" style={{color: '#5cc6d0'}}>Unmatched Aircraft Reliability</span>
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
                  <h2 className="text-3xl font-bold mb-4 " style={{color: '#5cc6d0'}}>Repair Management</h2>
                  <p className="text-gray-300 leading-relaxed">
                  Leveraging global partnerships and expert maintenance on key components like engines, APUs, and landing gears, we deliver fast, high-quality repairs to keep your fleet operational with minimal downtime.
                  </p>
                </div>
                
                {/* Right side Spline design */}
                <div className="w-[670px] lg:w-1/2 h-[00px] md:h-[400px] transform lg:-translate-x-20">
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
      <section className="py-20 px-8 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Powered by Industry-Leading Partnerships
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 mb-12"
          >
            Our alliances with top providers enhance our repair capabilities, delivering reliable, efficient, and innovative solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-4 gap-8"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="relative group transition-transform duration-300 hover:scale-105"
                whileHover={{ y: -10 }}
              >
                <GlowEffect blur='soft' />
                <div className="relative z-10 h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-white/[0.3] rounded-2xl transition-all duration-300 min-h-[300px]">
                  <Meteors number={20} />
                  <div className="relative z-10 flex flex-col items-center text-center p-4 h-full">
                    <div className="bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">{partner.logo}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                    <p className="text-gray-400">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
  );
};

export default RepairManagementPage;