import React from "react";
import { Plane, Clock, Phone, MapPin, AlertCircle, CheckCircle, Users } from "lucide-react";
import { Button } from "../components/ui/button";

const AOGSupport: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-[#5cc6d0]" />,
      title: "24/7 Availability",
      description: "Round-the-clock support for critical aircraft on ground situations worldwide."
    },
    {
      icon: <Phone className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Instant Response",
      description: "Immediate response to AOG calls with dedicated emergency hotlines."
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Global Network",
      description: "Worldwide network of certified technicians and parts suppliers."
    },
    {
      icon: <Users className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Expert Team",
      description: "Highly trained specialists with extensive aviation industry experience."
    }
  ];

  const emergencyServices = [
    "Emergency Parts Supply",
    "On-site Technical Support",
    "Rapid Component Replacement",
    "Aircraft Recovery Services",
    "Regulatory Compliance Assistance",
    "Insurance Coordination"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Plane className="w-12 h-12 text-[#5cc6d0]" />
            <h1 className="text-5xl md:text-6xl font-bold">24/7 AOG Support</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
            When your aircraft is on ground, every minute counts. Our dedicated 24/7 AOG support team 
            ensures rapid response and resolution to get your aircraft back in the air safely and efficiently.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <AlertCircle className="w-6 h-6 text-red-500" />
            <span className="text-lg font-semibold text-red-500">Emergency Hotline: +1-800-AOG-HELP</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our AOG Support?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-8 hover:bg-[#0b0d10]/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  {feature.icon}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#5cc6d0]">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="py-20 px-8 bg-[#0b0d10]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Emergency Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-6 text-center hover:bg-[#0b0d10]/70 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-[#5cc6d0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#5cc6d0]">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Response Commitment</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "< 15 min", title: "Initial Response", description: "First contact and assessment" },
              { time: "< 2 hours", title: "Parts Location", description: "Identify and secure required parts" },
              { time: "< 24 hours", title: "Resolution", description: "Complete repair and aircraft return to service" }
            ].map((commitment, index) => (
              <div key={index} className="text-center bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-8">
                <div className="text-4xl font-bold text-[#5cc6d0] mb-4">{commitment.time}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{commitment.title}</h3>
                <p className="text-gray-300">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 bg-[#0b0d10]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Emergency Contact</h2>
          <p className="text-xl text-gray-300 mb-12">
            For immediate AOG assistance, contact our emergency response team 24/7.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-6">
              <Phone className="w-8 h-8 text-[#5cc6d0] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#5cc6d0]">Emergency Hotline</h3>
              <p className="text-2xl font-bold">+1-800-AOG-HELP</p>
            </div>
            <div className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-6">
              <Phone className="w-8 h-8 text-[#5cc6d0] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#5cc6d0]">International</h3>
              <p className="text-2xl font-bold">+1-555-AOG-INTL</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105">
              Call Emergency Line
            </Button>
            <Button variant="outline" className="border-[#5cc6d0] text-[#5cc6d0] px-8 py-4 text-lg font-semibold hover:bg-[#5cc6d0] hover:text-black transition-all duration-300">
              Online Request
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AOGSupport;
