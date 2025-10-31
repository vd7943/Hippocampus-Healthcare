import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Hippocampus Health Care";
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="mx-auto flex flex-col md:flex-row items-start gap-10">
        <div className="w-full md:w-[70%]">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">About Us</h2>

          <p className="text-gray-700 mb-4 leading-snug text-lg">
            Hippocampus Health Care Private Limited is found by Dr. Vijay
            Krishna Reddy along with an experienced professionals to set the new
            trend in Health Industry.
          </p>

          <p className="text-gray-700 mb-4 leading-sung text-lg">
            Hippocampus business services touched millions of lives whether its
            Product Marketing, e-governance, digital works, claims processing,
            Telemarketing etc.
          </p>

          <p className="text-gray-700 mb-4 leading-sung text-lg">
            We are a well-established medical equipment supplier with stock now
            exceeding 160+ products, from the leading medical product
            manufacturers in India, US, UK, Thailand and China.
          </p>
          <p className="text-gray-700 mb-4 leading-sung text-lg">
            As a leading Medical Supplies company in India we are able to
            negotiate extremely competitive prices with our suppliers. These
            savings are transferred to customers, allowing us to offer
            consistently great prices for quality products all packaged with
            excellent service from our friendly team.
          </p>
        </div>

        <div className="w-full md:w-[30%] flex justify-center md:justify-end">
          <img
            src="/about.svg"
            alt="Healthcare illustration"
            className="w-full max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
