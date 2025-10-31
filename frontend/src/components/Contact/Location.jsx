import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Location = () => {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
      <iframe
        title="Hippocampus Healthcare Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8621293465194!2d77.61535937320852!3d12.916581516085909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fa1656ce9d%3A0xbc882c0a563e69e3!2sHB%20complex%2C%20Dollar%20Scheme%20Colony%2C%201st%20Stage%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1761911728459!5m2!1sen!2sin"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="absolute top-[-500px] lg:top-1/2 left-6 md:left-16 transform -translate-y-1/2 bg-white bg-opacity-90 shadow-2xl rounded-2xl p-6 md:p-10 max-w-sm md:max-w-md w-[90%]">
        <h2 className="text-2xl font-semibold text-[#226930] mb-6">
          Our <span className="text-[#46b21e]">Contact Details</span>
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Corporate Office
          </h3>
          <p className="text-gray-600">
            2 HB Complex, BTM 1st Stage, Bangalore 560068
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <FaEnvelope className="text-[#46b21e]" />
            <a
              href="mailto:sales@hippocampushealthcare.com"
              className="hover:text-[#46b21e]"
            >
              sales@hippocampushealthcare.com
            </a>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Phone Number
          </h3>
          <div className="flex items-center gap-2 text-gray-600">
            <FaPhoneAlt className="text-[#46b21e]" />
            <a href="tel:9886272072" className="hover:text-[#46b21e]">
              +91 9886272072
            </a>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">India</h3>
          <div className="flex items-start justify-center gap-2 text-gray-600">
            <MdLocationOn size={32} className="text-[#46b21e]" />
            <p>
              2nd floor, #2, HB Complex, 100ft Ring Road, BTM Layout, 1st Stage,
              Bangalore 560068, India
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Overseas</h3>
          <div className="flex items-start justify-center gap-2 text-gray-600">
            <MdLocationOn size={32} className="text-[#46b21e]" />
            <p>
              501 SILVERSIDE RD STE 105, 501 WILMINGTON, DE 19809, United States
              of America.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
