import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import EnquiryForm from "./EnquiryForm";

const pricingPlans = [
  {
    title: "Pre-Employment Investigation",
    price: "$35",
    unit: "Per Record",
    features: [
      "Employment History",
      "Education Qualification",
      "Civil & Criminal Scrutiny",
      "Residence Verification",
      "Identity Verification",
    ],
  },
  {
    title: "Insurance Investigation",
    price: "$25",
    unit: "Per Claim",
    features: [
      "Spot Information",
      "Incident Description",
      "Witnesses Information",
      "Detective Examination",
      "Supporting Photos & Docs",
    ],
  },
  {
    title: "Corporate Investigation",
    price: "$35",
    unit: "Per Company",
    features: [
      "Principal Address",
      "Former Company Names",
      "Registration Status",
      "Statutory Documents",
      "Management",
    ],
  },
];

const Pricing = () => {
  const location = useLocation();
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    document.title = "Pricing | Hippocampus Health Care";
  }, []);

  return (
    <section key={location.pathname} className="w-full py-12 bg-gray-50">
      <div className="mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Our <span className="text-[#46b21e]">Pricing Plan</span>
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          You can also create your own custom plan model for your business.
        </p>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 mb-10 text-gray-700 leading-relaxed max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Investigation Pricing
          </h3>
          <p>
            Investigation is an applied science that involves the study of facts
            used to inform criminal trials. A complete investigation can include
            searching, interviews, interrogations, evidence collection and
            preservation, and various methods of investigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {plan.title}
              </h3>
              <p className="text-[#46b21e] text-3xl font-bold mb-1">
                {plan.price}
              </p>
              <p className="text-gray-500 text-sm mb-5">{plan.unit}</p>

              <ul className="text-gray-700 text-sm md:text-base mb-6 space-y-2 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#46b21e] text-lg leading-none mt-[1px]">
                      ✔
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setShowEnquiry(true);
                  setSelectedProduct(plan.title);
                }}
                className="w-full cursor-pointer bg-[#46b21e] text-white py-2.5 rounded-md hover:bg-[#226930] transition-all"
              >
                Send Enquiry
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      {showEnquiry && selectedProduct && (
        <EnquiryForm
          onClose={() => {
            setShowEnquiry(false);
            setSelectedProduct(null);
          }}
          productName={selectedProduct}
        />
      )}
    </section>
  );
};

export default Pricing;
