import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaUserCheck,
  FaShieldAlt,
  FaClipboardList,
  FaLandmark,
  FaBullseye,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  {
    name: "Corporate Investigations",
    description:
      "Corporate Due Diligence, Corporate Record Research, Corporate & Business Analysis, Company Background Screening, and Undercover Operations.",
    icon: <FaBuilding className="text-[#46b21e] text-4xl mb-4" />,
  },
  {
    name: "Background Verification",
    description:
      "Our dedicated professionals deliver precise and updated reports, helping organizations minimize risk and make confident hiring decisions.",
    icon: <FaUserCheck className="text-[#46b21e] text-4xl mb-4" />,
  },
  {
    name: "Insurance Investigations",
    description:
      "We specialize in Contestable Death Claim, Life Insurance Claim, Medi-Claim, and Travel Insurance Claim investigations with accuracy and integrity.",
    icon: <FaShieldAlt className="text-[#46b21e] text-4xl mb-4" />,
  },
  {
    name: "Claim Management",
    description:
      "Our expert team uses highly automated systems to accelerate claim processing, minimize losses, and maximize client satisfaction.",
    icon: <FaClipboardList className="text-[#46b21e] text-4xl mb-4" />,
  },
  {
    name: "Government Schemes",
    description:
      "We provide paperless, cashless solutions using smart cards, biometrics, and scalable technologies for efficient government operations.",
    icon: <FaLandmark className="text-[#46b21e] text-4xl mb-4" />,
  },
  {
    name: "Lead Generation",
    description:
      "Outsource lead generation for BFSI industries and gain access to high-quality, cost-effective leads tailored to your business goals.",
    icon: <FaBullseye className="text-[#46b21e] text-4xl mb-4" />,
  },
];

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Services | Hippocampus Health Care";
  }, []);

  const handleContactClick = () => {
    navigate("/contact-us");

    setTimeout(() => {
      const section = document.querySelector("#contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <section
      key={location.pathname}
      className="w-full py-12 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
        >
          Our <span className="text-[#46b21e]">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-start bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 hover:border-[#46b21e]/40"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <p className="text-lg md:text-xl mb-5 font-medium text-gray-800">
            Want to learn more about how we can help your business?
          </p>
          <button
            onClick={handleContactClick}
            className="bg-[#46b21e] text-white cursor-pointer px-8 py-3 rounded-md hover:bg-[#226930] transition-all"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
