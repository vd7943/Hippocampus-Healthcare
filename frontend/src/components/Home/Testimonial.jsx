import React from "react";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Sanjay Srivastav",
    position: "FHPL (Apollo Group)",
    feedback:
      "Congratulations Hippocampus Team — your success is a tribute to your focus, high energy and creativity. I look forward to engaging with Hippocampus for great service delivery.",
  },
  {
    name: "Nishapa Meow",
    position: "SIAM Health Group Co. Ltd",
    feedback:
      "100% transparency & quality trading with timely delivery of our products. We love to work with Hippocampus.",
  },
  {
    name: "Rajini Reddy",
    position: "Toyota",
    feedback:
      "If you want 100% service delivery with great quality, then I suggest going with Hippocampus.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-[#f8f9fa] py-10 px-6 md:px-16">
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Partner Testimonials
            </h2>
            <p className="text-gray-600 text-lg">What they say about us</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex justify-center mt-6">
                <div className="rounded-full border-2 border-[#46b21e] p-2 bg-[#f8fff8]">
                  <FaUserCircle className="text-[#46b21e] text-6xl" />
                </div>
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-md text-gray-600 mb-3">{item.position}</p>

                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  “{item.feedback}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
