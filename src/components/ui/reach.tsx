import { cn } from "@/lib/utils";
import React from "react";
import { FaBolt, FaUser } from "react-icons/fa";
import GlowyIcon from "./glowy-icon";

const Reach = ({ className = "" }) => {
  return (
    <div>
      <div
        className={cn(
          `reach-border relative w-96 h-96 border border-[#7687B56E] rounded-full flex justify-center items-center`,
          className
        )}
      >
        <div
          className={`relative w-64 h-64 border border-[#7687B56E] rounded-full flex justify-center items-center`}
        >
          <GlowyIcon Icon={FaBolt} size="12em" className="animate-pulse"/>
        </div>
        <div className="user-icons absolute w-[80%] h-[80%]">
          <div className="absolute -top-10 left-1/3 animate-suck">
            <FaUser className="text-2xl text-[#7687B5]" />
          </div>
          <div className="absolute top-0 left-full animate-suck">
            <FaUser className="text-2xl text-[#7687B5]" />
          </div>
          <div className="absolute top-1/2 left-0 animate-suck">
            <FaUser className="text-2xl text-[#7687B5]" />
          </div>
          <div className="absolute top-[90%] left-1/2 animate-suck">
            <FaUser className="text-2xl text-[#7687B5]" />
          </div>
          <div className="absolute top-[70%] left-full animate-suck">
            <FaUser className="text-2xl text-[#7687B5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reach;
