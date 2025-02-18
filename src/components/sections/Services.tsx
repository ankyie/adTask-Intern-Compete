import React from "react";
import BlackButton from "../ui/black-gradient-button";
import ServicesGrid from "../ui/services-grid";
import { Button } from "../ui/moving-border";
import { SparklesCore } from "../ui/sparkles";

const Services = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center py-24 mt-24">

      <div className="flex flex-col w-full justify-center items-center gap-6 pb-20">
        <BlackButton>SERVICES</BlackButton>
        <div className="flex w-full justify-center items-center">
          <div className="relative h-[2px] flex-1 bg-gradient-to-r from-[#0D111A] to-[#5C73AE]"></div>
          <div className="text-center px-6 text-4xl">
            <h2>Innovative Services</h2>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8]">
              for Growth.
            </h2>
          </div>
          <div className="relative h-[2px] flex-1 bg-gradient-to-l from-[#0D111A] to-[#5C73AE]"></div>
        </div>
        <div className="text-sm text-center">
          <p>
            Experience Intelligent Services to optimize your marketing efforts.
          </p>
        </div>
      </div>

      <div>
        <ServicesGrid />
      </div>

      <div className="py-8">
        <Button
          borderClassName={"bg-[radial-gradient(#B6C7F5_20%,transparent_70%)]"}
          className="bg-black/30 border-[#7687B5]"
        >
          <SparklesCore background="transparent" minSize={0.2} maxSize={1} />
          <div className="absolute">
            <span className="font-light text-lg">Contact Us</span>
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full blur-md opacity-50 bg-white`}
            ></span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Services;
