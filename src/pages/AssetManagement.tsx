import React from "react";
import { Briefcase, BarChart3, Shield, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";

const AssetManagement: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Real-time Tracking",
      description: "Monitor your aircraft parts inventory with live updates and comprehensive tracking systems."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Compliance Management",
      description: "Ensure full regulatory compliance with automated documentation and audit trails."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Predictive Maintenance",
      description: "Optimize maintenance schedules with AI-powered predictive analytics and forecasting."
    },
    {
      icon: <Users className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Team Collaboration",
      description: "Streamline communication between teams with integrated workflow management tools."
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 30%",
    "Improve asset utilization by 25%",
    "Minimize downtime with predictive maintenance",
    "Ensure regulatory compliance automatically",
    "Enhance team productivity and collaboration"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-12 h-12 text-[#5cc6d0]" />
            <h1 className="text-5xl md:text-6xl font-bold">Asset Management</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Streamline your aircraft parts inventory with our comprehensive asset management solution. 
            Track, monitor, and optimize your fleet's components with real-time visibility and predictive analytics.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
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

      {/* Benefits Section */}
      <section className="py-20 px-8 bg-[#0b0d10]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Asset Management?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-[#5cc6d0]">Transform Your Operations</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#5cc6d0] flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#5cc6d0]/10 to-transparent border border-[#5cc6d0]/20 rounded-xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#5cc6d0] mb-4">30%</div>
                <div className="text-xl text-gray-300">Average Cost Reduction</div>
                <div className="text-sm text-gray-400 mt-2">Based on client implementations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Optimize Your Asset Management?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join leading airlines and MROs who trust our platform for their critical asset management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#5cc6d0] text-black px-8 py-4 text-lg font-semibold hover:bg-[#4ab5bf] transition-all duration-300 hover:scale-105">
              Get Started Today
            </Button>
            <Button variant="outline" className="border-[#5cc6d0] text-[#5cc6d0] px-8 py-4 text-lg font-semibold hover:bg-[#5cc6d0] hover:text-black transition-all duration-300">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssetManagement;
