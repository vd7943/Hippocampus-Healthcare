import React from "react";

const Hero = () => {
  return (
    <section className="pb-12 lg:pb-6 px-6 lg:px-0 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 flex justify-center">
        <img
          src="/banner.png"
          alt="Hippocampus Health Care Banner"
          className="w-full max-w-xl md:max-w-2xl object-contain"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-[#226930] leading-snug">
          Industry Leading Managed Services Solutions and Health Products
        </h2>

        <p className="mt-3 text-gray-700 text-md">
          Hippocampus optimizes and modernizes these interactions to create
          value for both our clients and their constituents. We believe in our
          proven methodologies to securely and conveniently perform all
          Individual as well as Business services.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border-l-4 border-[#46b21e] bg-gray-50 rounded-md hover:shadow-md transition">
            <h3 className="font-semibold text-[#226930] text-lg">
              The right advice
            </h3>
            <p className="text-gray-700 text-sm mt-1">
              Our team are experts in matching you with the right provider.
            </p>
          </div>

          <div className="p-4 border-l-4 border-[#46b21e] bg-gray-50 rounded-md hover:shadow-md transition">
            <h3 className="font-semibold text-[#226930] text-lg">
              Recognised for excellence
            </h3>
            <p className="text-gray-700 text-sm mt-1">
              We've been awarded for our high rate of customer satisfaction.
            </p>
          </div>

          <div className="p-4 border-l-4 border-[#46b21e] bg-gray-50 rounded-md hover:shadow-md transition">
            <h3 className="font-semibold text-[#226930] text-lg">
              Compare the best
            </h3>
            <p className="text-gray-700 text-sm mt-1">
              We only compare market leaders with a reputation for service
              quality.
            </p>
          </div>

          <div className="p-4 border-l-4 border-[#46b21e] bg-gray-50 rounded-md hover:shadow-md transition">
            <h3 className="font-semibold text-[#226930] text-lg">
              Premium Services
            </h3>
            <p className="text-gray-700 text-sm mt-1">
              We only compare market leaders with a reputation for service
              quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
