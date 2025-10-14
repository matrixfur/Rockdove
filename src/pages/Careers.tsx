import React from "react";
import { Users, MapPin, Clock, Award, Heart, Briefcase } from "lucide-react";
import { Button } from "../components/ui/button";

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "Senior Aviation Engineer",
      location: "New York, NY",
      type: "Full-time",
      department: "Engineering",
      description: "Lead technical projects and provide engineering support for aircraft parts and systems."
    },
    {
      title: "Supply Chain Manager",
      location: "London, UK",
      type: "Full-time",
      department: "Operations",
      description: "Manage global supply chain operations and optimize logistics processes."
    },
    {
      title: "Customer Success Manager",
      location: "Remote",
      type: "Full-time",
      department: "Customer Success",
      description: "Build and maintain relationships with key clients and ensure customer satisfaction."
    },
    {
      title: "Software Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Technology",
      description: "Develop and maintain our proprietary inventory management platform."
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses"
    },
    {
      icon: <Heart className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and generous time off"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Career Growth",
      description: "Professional development opportunities and advancement paths"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-12 h-12 text-[#5cc6d0]" />
            <h1 className="text-5xl md:text-6xl font-bold">Careers</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Join our team of aviation professionals and help shape the future of aircraft parts supply. 
            We're looking for passionate individuals who share our commitment to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 px-8 bg-[#0b0d10]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-8 hover:bg-[#0b0d10]/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  {benefit.icon}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#5cc6d0]">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-8 hover:bg-[#0b0d10]/70 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 text-[#5cc6d0]">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{position.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{position.department}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{position.description}</p>
                  </div>
                  <Button className="bg-[#5cc6d0] text-black px-6 py-3 font-semibold hover:bg-[#4ab5bf] transition-all duration-300 hover:scale-105">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-8 bg-[#0b0d10]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Culture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We encourage creative thinking and embrace new technologies to solve complex challenges."
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and cross-functional collaboration to achieve our goals."
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in everything we do, from customer service to product quality."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#5cc6d0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#5cc6d0]">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply", description: "Submit your application and resume" },
              { step: "02", title: "Review", description: "Our team reviews your application" },
              { step: "03", title: "Interview", description: "Virtual or in-person interview process" },
              { step: "04", title: "Decision", description: "We'll notify you of our decision" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#5cc6d0] text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#5cc6d0]">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-[#0b0d10]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Don't see a position that matches your skills? We're always looking for talented individuals 
            to join our growing team. Send us your resume and let us know how you can contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#5cc6d0] text-black px-8 py-4 text-lg font-semibold hover:bg-[#4ab5bf] transition-all duration-300 hover:scale-105">
              View All Positions
            </Button>
            <Button variant="outline" className="border-[#5cc6d0] text-[#5cc6d0] px-8 py-4 text-lg font-semibold hover:bg-[#5cc6d0] hover:text-black transition-all duration-300">
              Submit Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
