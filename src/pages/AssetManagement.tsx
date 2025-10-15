import React, { useState } from "react";
import { FileText, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import Spline from '@splinetool/react-spline';

const RFQ: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    aircraftType: "",
    partNumber: "",
    quantity: "",
    urgency: "",
    description: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("RFQ submitted:", formData);
    setIsSubmitted(true);
  };

  const urgencyOptions = [
    "Standard (5-10 business days)",
    "Rush (2-3 business days)",
    "AOG (Aircraft on Ground - Same day)"
  ];

  const aircraftTypes = [
    "Boeing 737",
    "Boeing 747",
    "Boeing 777",
    "Boeing 787",
    "Airbus A320",
    "Airbus A330",
    "Airbus A350",
    "Other"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />
          <h1 className="text-4xl font-bold mb-8">Request Submitted Successfully!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for your RFQ submission. Our team will review your request and contact you within 2 hours 
            with a detailed quote and availability information.
          </p>
          <div className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#5cc6d0]">What happens next?</h3>
            <ul className="text-left space-y-2 text-gray-300">
              <li>• Our team will review your requirements</li>
              <li>• We'll source the parts from our global network</li>
              <li>• You'll receive a detailed quote within 2 hours</li>
              <li>• We'll coordinate delivery based on your urgency</li>
            </ul>
          </div>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-[#5cc6d0] text-black px-8 py-4 text-lg font-semibold hover:bg-[#4ab5bf] transition-all duration-300"
          >
            Submit Another RFQ
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
		<div>
          <div className="flex items-center gap-4 mb-8">
            <FileText className="w-12 h-12 text-[#5cc6d0]" />
            <h1 className="text-5xl md:text-6xl font-bold">Request for Quote (RFQ)</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Submit your parts requirements and receive competitive quotes from our global network. 
            Our team will provide detailed pricing and availability information within 2 hours.
          </p>
		</div>
		<div className="w-1/2 h-[580px]">
            <Spline scene="https://prod.spline.design/6Rl-4NaKJMOHUkQH/scene.splinecode"/>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#5cc6d0]">Company Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Contact Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Parts Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#5cc6d0]">Parts Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Aircraft Type *</label>
                    <select
                      name="aircraftType"
                      value={formData.aircraftType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0] focus:outline-none transition-colors"
                    >
                      <option value="">Select Aircraft Type</option>
                      {aircraftTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Part Number *</label>
                    <input
                      type="text"
                      name="partNumber"
                      value={formData.partNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Quantity *</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Urgency *</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0] focus:outline-none transition-colors"
                    >
                      <option value="">Select Urgency</option>
                      {urgencyOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Additional Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please provide any additional details about your requirements, specifications, or special instructions..."
                  className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="bg-[#5cc6d0] text-black px-8 py-4 text-lg font-semibold hover:bg-[#4ab5bf] transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit RFQ
                </Button>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <AlertCircle className="w-4 h-4" />
                  <span>Response within 2 hours</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-8 bg-[#0b0d10]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Submit an RFQ with RockDove?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Response",
                description: "Receive detailed quotes within 2 hours of submission"
              },
              {
                title: "Global Network",
                description: "Access to our worldwide network of certified suppliers"
              },
              {
                title: "Competitive Pricing",
                description: "Best market rates with transparent pricing structure"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#5cc6d0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#5cc6d0]">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RFQ;