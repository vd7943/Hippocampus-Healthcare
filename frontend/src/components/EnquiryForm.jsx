import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import toast from "react-hot-toast";
import axios from "axios";

const EnquiryForm = ({ onClose, productName }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    inquiry: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dataToSend = {
      ...formData,
      productName,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/enquiry/send`,
        dataToSend,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.data) {
        toast.success(`Enquiry For ${productName} Sent Successfully!`);
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          inquiry: "",
        });
      }
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="bg-white/95 z-50 p-6 rounded-2xl shadow-2xl w-[410px] max-h-[98vh] overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-green-100"
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition"
        >
          <MdClose size={24} />
        </button>
        <h2 className="text-[#226930] text-2xl font-bold mb-4 text-center">
          Enquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#46b21e] focus:ring-2 focus:ring-[#46b21e]/30 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#46b21e] focus:ring-2 focus:ring-[#46b21e]/30 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number*
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={(e) => {
                const input = e.target.value;
                if (/^\d{0,10}$/.test(input)) {
                  handleChange(e);
                }
              }}
              pattern="^\d{10}$"
              maxLength="10"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#46b21e] focus:ring-2 focus:ring-[#46b21e]/30 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Inquiry Details*
            </label>
            <textarea
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Describe your inquiry or requirements..."
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#46b21e] focus:ring-2 focus:ring-[#46b21e]/30 outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full bg-[#46b21e] text-white py-2.5 rounded-lg font-semibold hover:bg-[#226930] transition-all shadow-md hover:shadow-lg"
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default EnquiryForm;
