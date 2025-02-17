import React from "react";
import BlackButton from "../ui/black-gradient-button";
import TestimonialGrid from "../ui/testimonials-grid";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center py-24">
      <div className="flex flex-col w-full justify-center items-center gap-6 pb-20">
        <BlackButton>TESTIMONIALS</BlackButton>
        <div className="flex w-full justify-center items-center">
          <div className="relative h-[2px] flex-1 bg-gradient-to-r from-[#0D111A] to-[#5C73AE]"></div>
          <div className="text-center px-6 text-4xl">
            <h2>Innovative Testimonials</h2>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8]">
              for Growth.
            </h2>
          </div>
          <div className="relative h-[2px] flex-1 bg-gradient-to-l from-[#0D111A] to-[#5C73AE]"></div>
        </div>
        <div className="text-sm text-center">
          <p>
            Experience Intelligent Testimonials to optimize your marketing efforts.
          </p>
        </div>
      </div>

      <TestimonialGrid />
    </div>
  );
};

export default Testimonials;
