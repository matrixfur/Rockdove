import React, { useState, lazy, Suspense } from "react";
import { FileText, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";

// Lazy load the Spline component for faster initial load
const Spline = lazy(() => import("@splinetool/react-spline"));

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
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const urgencyOptions = [
    "Standard (5-10 business days)",
    "Rush (2-3 business days)",
    "AOG (Aircraft on Ground - Same day)",
  ];

  const aircraftTypes = [
    "Boeing 737",
    "Boeing 747",
    "Boeing 777",
    "Boeing 787",
    "Airbus A320",
    "Airbus A330",
    "Airbus A350",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RFQ submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Request Submitted Successfully!
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Thank you for your RFQ submission. Our team will contact you within
            2 hours with a detailed quote and availability information.
          </p>
          <div className="bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-5 mb-6">
            <h3 className="text-lg font-semibold mb-3 text-[#5cc6d0]">
              What happens next?
            </h3>
            <ul className="text-left text-gray-300 space-y-2 text-sm">
              <li>• Our team reviews your requirements</li>
              <li>• We source parts from our global network</li>
              <li>• You’ll get a quote within 2 hours</li>
              <li>• We coordinate delivery based on urgency</li>
            </ul>
          </div>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-[#5cc6d0] text-black px-6 py-3 text-base font-semibold hover:bg-[#4ab5bf] transition-all duration-300"
          >
            Submit Another RFQ
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <FileText className="w-10 h-10 text-[#5cc6d0]" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Request for Quote (RFQ)
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Submit your parts requirements and receive competitive quotes from
              our global network. Expect a response within 2 hours.
            </p>
          </div>

          {/* Lazy-loaded 3D spline */}
          <div className="w-full lg:w-1/2 h-[300px] md:h-[500px]">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  Loading 3D model...
                </div>
              }
            >
              <Spline scene="https://prod.spline.design/6Rl-4NaKJMOHUkQH/scene.splinecode" />
            </Suspense>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-[#0b0d10]/50 border border-[#1a1d22] rounded-xl p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* COMPANY INFO */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#5cc6d0]">
                Company Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "Company Name *", name: "companyName", type: "text" },
                  { label: "Contact Name *", name: "contactName", type: "text" },
                  { label: "Email Address *", name: "email", type: "email" },
                  { label: "Phone Number", name: "phone", type: "tel" },
                ].map((input, idx) => (
                  <div key={idx}>
                    <label className="block text-sm mb-2 text-gray-300">
                      {input.label}
                    </label>
                    <input
                      type={input.type}
                      name={input.name}
                      value={(formData as any)[input.name]}
                      onChange={handleInputChange}
                      required={input.label.includes("*")}
                      className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0] focus:outline-none transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* PARTS INFO */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#5cc6d0]">
                Parts Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Aircraft Type *
                  </label>
                  <select
                    name="aircraftType"
                    value={formData.aircraftType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0]"
                  >
                    <option value="">Select Aircraft Type</option>
                    {aircraftTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Part Number *
                  </label>
                  <input
                    type="text"
                    name="partNumber"
                    value={formData.partNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Urgency *
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0]"
                  >
                    <option value="">Select Urgency</option>
                    {urgencyOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* ADDITIONAL INFO */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Additional Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                placeholder="Add any extra details, specs, or special instructions..."
                className="w-full px-4 py-3 bg-[#0b0d10] border border-[#1a1d22] rounded-lg text-white focus:border-[#5cc6d0] resize-none"
              />
            </div>

            {/* SUBMIT */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                type="submit"
                className="bg-[#5cc6d0] text-black px-6 py-3 text-base font-semibold hover:bg-[#4ab5bf] transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit RFQ
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <AlertCircle className="w-4 h-4" />
                <span>Response within 2 hours</span>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 px-6 md:px-12 bg-[#0b0d10]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Submit an RFQ with RockDove?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Response",
                description: "Receive detailed quotes within 2 hours of submission.",
              },
              {
                title: "Global Network",
                description: "Access to our worldwide network of certified suppliers.",
              },
              {
                title: "Competitive Pricing",
                description: "Best market rates with transparent pricing structure.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-[#0b0d10]/40 border border-[#1a1d22] p-6 rounded-xl hover:border-[#5cc6d0] transition-all"
              >
                <div className="w-14 h-14 bg-[#5cc6d0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#5cc6d0]">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RFQ;