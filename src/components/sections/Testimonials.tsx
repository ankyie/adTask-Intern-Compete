import React from "react";
import BlackButton from "../ui/black-gradient-button";
import TestimonialGrid from "../ui/testimonials-grid";

const Testimonials = () => {
  return (
    <div className="relative flex flex-col gap-8 justify-center items-center py-16">
      <div className="feature-circular-gradient w-[495px] h-[238px] bg-[#263048] rounded-full absolute left-1/3 top-56 filter blur-[139.5px]"></div>
      <div className="relative flex flex-col w-full justify-center items-center gap-6 pb-20">
        <BlackButton>TESTIMONIALS</BlackButton>
        <div className="flex w-full justify-center items-center">
          <div className="relative h-[2px] flex-1 bg-gradient-to-r from-[#0D111A] to-[#5C73AE]"></div>
          <div className="text-center px-6 text-4xl">
            <h2>Trusted by</h2>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8]">
            satisfied clients
            </h2>
          </div>
          <div className="relative h-[2px] flex-1 bg-gradient-to-l from-[#0D111A] to-[#5C73AE]"></div>
        </div>
        <div className="text-sm text-center">
          <p>
          Discover how we’ve driven growth and innovation.
          </p>
        </div>
      </div>

      <div className="relative">
        <TestimonialGrid />
      </div>
    </div>
  );
};

export default Testimonials;
