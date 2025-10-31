import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contact/send`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data) {
        toast.success("Message Sent Successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Contact Form Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full">
      <img src="/contact.jpg" alt="" />

      <div id="contact" className="flex flex-col items-center px-6 py-12">
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#226930] text-center">
          Tell us about <span className="text-[#46b21e]">yourself</span>
        </h2>
        <p className="text-gray-600 mt-2 text-center text-sm lg:text-md">
          Whether you have questions or you would just like to say hello,
          contact us.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-md mb-1">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#46b21e] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-md mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#46b21e] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-md mb-1">
                Mobile Number
                <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#46b21e] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-md mb-1">
                Email Id<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#46b21e] focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-md mb-1">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#46b21e] focus:outline-none"
            ></textarea>
          </div>

          <div className="flex justify-start mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#46b21e] text-white cursor-pointer px-8 py-2 rounded-md hover:bg-[#226930] transition-all"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
