import React from "react";
import { Heart, Users, Award, Target, Globe, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";

const TheStory: React.FC = () => {
  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      description: "RockDove Aviation was founded with a vision to revolutionize aircraft parts supply chain management."
    },
    {
      year: "2017",
      title: "First Major Contract",
      description: "Secured our first major airline partnership, establishing our reputation for reliability."
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Expanded operations to three continents, serving clients worldwide."
    },
    {
      year: "2021",
      title: "Technology Innovation",
      description: "Launched our proprietary AI-powered inventory management platform."
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description: "Recognized as the leading aircraft parts supplier with 99.8% delivery success rate."
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Safety First",
      description: "Every decision we make prioritizes the safety of passengers and crew above all else."
    },
    {
      icon: <Users className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Customer Focus",
      description: "Our clients' success is our success. We build lasting partnerships based on trust and reliability."
    },
    {
      icon: <Award className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Excellence",
      description: "We maintain the highest standards in quality, service, and innovation in everything we do."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Global Reach",
      description: "Serving the aviation industry worldwide with local expertise and global capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
            From a small startup with big dreams to a global leader in aviation parts supply, 
            RockDove Aviation has been at the forefront of innovation and reliability in the aviation industry.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-8 bg-[#0b0d10]/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[#5cc6d0]">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                To ensure the safety and efficiency of global aviation by providing reliable, 
                high-quality aircraft parts and exceptional service to airlines, MROs, and operators worldwide.
              </p>
              <div className="flex items-center gap-4">
                <Target className="w-8 h-8 text-[#5cc6d0]" />
                <span className="text-lg font-semibold">99.8% Delivery Success Rate</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#5cc6d0]/10 to-transparent border border-[#5cc6d0]/20 rounded-xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#5cc6d0] mb-4">500+</div>
                <div className="text-xl text-gray-300">Global Clients</div>
                <div className="text-sm text-gray-400 mt-2">Airlines, MROs & Operators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-8">
                <div className="w-16 h-16 bg-[#5cc6d0] text-black rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-[#5cc6d0]">{milestone.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-8 bg-[#0b0d10]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-8 hover:bg-[#0b0d10]/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  {value.icon}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#5cc6d0]">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                description: "20+ years in aviation industry, former Boeing executive"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                description: "Technology visionary with expertise in supply chain optimization"
              },
              {
                name: "Elena Rodriguez",
                role: "COO",
                description: "Operations expert with global logistics experience"
              }
            ].map((leader, index) => (
              <div key={index} className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-6 text-center">
                <div className="w-20 h-20 bg-[#5cc6d0] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#5cc6d0]">{leader.name}</h3>
                <p className="text-lg font-medium mb-2 text-white">{leader.role}</p>
                <p className="text-gray-300">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-[#0b0d10]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Journey</h2>
          <p className="text-xl text-gray-300 mb-12">
            Be part of the future of aviation. Whether you're a client, partner, or potential team member, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#5cc6d0] text-black px-8 py-4 text-lg font-semibold hover:bg-[#4ab5bf] transition-all duration-300 hover:scale-105">
              Partner With Us
            </Button>
            <Button variant="outline" className="border-[#5cc6d0] text-[#5cc6d0] px-8 py-4 text-lg font-semibold hover:bg-[#5cc6d0] hover:text-black transition-all duration-300">
              View Careers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheStory;
