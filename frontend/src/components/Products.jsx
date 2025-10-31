import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import EnquiryForm from "./EnquiryForm";
import { FaPills, FaShieldVirus, FaPaw } from "react-icons/fa";

const products = [
  {
    title: "3 Ply Masks",
    features: [
      "Three-layer protection",
      "Bacterial filtration efficiency ≥ 95%",
      "Soft ear loops for comfort",
      "Adjustable nose clip for secure fit",
      "Breathable and skin-friendly material",
    ],
    imageSrc: "/product-1.jpg",
  },
  {
    title: "N95/FFP2 Masks",
    features: [
      "Five-layer advanced filtration system",
      "Filters 95% of airborne particles",
      "Adjustable nose bridge for perfect seal",
      "Comfortable elastic ear bands",
      "Certified for industrial and medical use",
    ],
    imageSrc: "/product-2.jpg",
  },
  {
    title: "PPE Kit",
    features: [
      "Full-body protective suit",
      "Includes gloves, gown, and shoe cover",
      "Splash and fluid resistant material",
      "Lightweight and breathable fabric",
      "Meets international safety standards",
    ],
    imageSrc: "/product-3.webp",
  },
  {
    title: "COVID-19 Test Kit",
    features: [
      "Rapid antigen detection results in 15 minutes",
      "High sensitivity and specificity",
      "Easy-to-use testing procedure",
      "No lab equipment required",
      "Ideal for clinical and home screening",
    ],
    imageSrc: "/product-4.webp",
  },
  {
    title: "Infrared Thermometer",
    features: [
      "Contactless temperature measurement",
      "Fast and accurate readings in 1 second",
      "Digital LCD display with backlight",
      "Memory storage for multiple readings",
      "Auto shut-off for power saving",
    ],
    imageSrc: "/product-5.jpg",
  },
];

const about = [
  {
    name: "Pharmaceutical Distributors",
    description:
      "Hippocampus is an established pharmaceutical trade company whose main activity is to wholesale and export pharmaceutical products. The company purchases its pharmaceutical supplies either directly from the manufacturer or from the manufacturers’ officially appointed distributor.",
    icon: <FaPills className="text-[#46b21e] text-4xl mb-4" />,
  },
  {
    name: "Personal Protectors",
    description:
      "Hippocampus Moto is to protect Humans who are at high risk for contracting infections through a surgical procedure or who have a medical condition, such as, an immunodeficiency, from being exposed to substances or potentially infectious material",
    icon: <FaShieldVirus className="text-[#46b21e] text-4xl mb-4" />,
  },
  {
    name: "Animal Tracking RFID",
    description:
      "Our Company provider of RFID Animal Tag oﬀers high quality products that exceed industry standards. It is designed and produced on the imported high-level microchips and it can be served to read and write, and also has a unique design for data security",
    icon: <FaPaw className="text-[#46b21e] text-4xl mb-4" />,
  },
];

const Products = () => {
  const location = useLocation();
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    document.title = "Products | Hippocampus Health Care";
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
          Our <span className="text-[#46b21e]">Products</span>
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We compare hundreds of leading products and prices across many
          categories to bring you the best value for money
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {about.map((about, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-start bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 hover:border-[#46b21e]/40"
            >
              {about.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {about.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 my-10 text-gray-700 leading-relaxed mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            We are trying to deliver 100% quality product and success their
            business to achieve ultimate goal.
          </h3>
          <p>
            We are providing best service since 2016 to present , committed to
            best service delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center"
            >
              <div className="w-28 h-28 mb-4 rounded-full overflow-hidden flex justify-center items-center bg-gray-50 border border-gray-200 shadow-sm">
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="object-contain w-full h-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.title}
              </h3>

              <ul className="text-gray-700 text-sm md:text-base mb-6 space-y-2 text-left">
                {product.features.map((feature, idx) => (
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
                  setSelectedProduct(product.title);
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

export default Products;
