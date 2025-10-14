import React from "react";
import { Wrench, Settings, Clock, AlertTriangle, CheckCircle, Users } from "lucide-react";
import { Button } from "../components/ui/button";

const RepairManagement: React.FC = () => {
  const features = [
    {
      icon: <Settings className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Automated Workflow",
      description: "Streamline repair processes with intelligent automation and workflow optimization."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Turnaround Optimization",
      description: "Minimize repair times with predictive scheduling and resource allocation."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Quality Assurance",
      description: "Ensure every repair meets the highest standards with comprehensive quality checks."
    },
    {
      icon: <Users className="w-8 h-8 text-[#5cc6d0]" />,
      title: "Expert Network",
      description: "Access certified technicians and specialized repair facilities worldwide."
    }
  ];

  const repairTypes = [
    "Engine Overhaul",
    "Avionics Repair",
    "Landing Gear Service",
    "Hydraulic System Maintenance",
    "Structural Repairs",
    "Component Testing"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Wrench className="w-12 h-12 text-[#5cc6d0]" />
            <h1 className="text-5xl md:text-6xl font-bold">Repair Management</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Optimize your aircraft repair operations with our comprehensive management platform. 
            From initial assessment to final delivery, we ensure every repair meets the highest standards.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Comprehensive Repair Solutions</h2>
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

      {/* Repair Types Section */}
      <section className="py-20 px-8 bg-[#0b0d10]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Specialized Repair Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {repairTypes.map((type, index) => (
              <div key={index} className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-6 text-center hover:bg-[#0b0d10]/70 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-[#5cc6d0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#5cc6d0]">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Repair Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Comprehensive evaluation of repair requirements" },
              { step: "02", title: "Planning", description: "Detailed repair plan with timeline and resources" },
              { step: "03", title: "Execution", description: "Expert technicians perform the repair work" },
              { step: "04", title: "Quality Check", description: "Thorough testing and certification process" }
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
          <h2 className="text-4xl font-bold mb-8">Need Expert Repair Services?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Our certified technicians and state-of-the-art facilities ensure your aircraft components are repaired to the highest standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#5cc6d0] text-black px-8 py-4 text-lg font-semibold hover:bg-[#4ab5bf] transition-all duration-300 hover:scale-105">
              Request Repair Quote
            </Button>
            <Button variant="outline" className="border-[#5cc6d0] text-[#5cc6d0] px-8 py-4 text-lg font-semibold hover:bg-[#5cc6d0] hover:text-black transition-all duration-300">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RepairManagement;
