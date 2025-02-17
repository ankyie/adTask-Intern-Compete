import React from "react";
import GlowyIcon from "./glowy-icon";
import { BsGearWideConnected } from "react-icons/bs";
import { cn } from "@/lib/utils";

const Gear = ({className = ""}) => {
  return (
    <div className={cn("flex justify-center items-center w-32 h-32 bg-gradient-to-l p-[1px] from-[#7687B5] to-[#333B4F] rounded-xl overflow-hidden", className)}>
      <div className="w-full h-full rounded-xl relative flex flex-col items-center justify-center bg-[#22252E]">
        <div className="flex justify-center items-center w-28 h-28 bg-gradient-to-l p-[1px] from-[#7687B5] to-[#333B4F] rounded-xl overflow-hidden">
          <div className="w-full h-full rounded-xl relative flex flex-col justify-center items-center p-2 bg-[#22252E]">
            <GlowyIcon
              Icon={BsGearWideConnected}
              size="5em"
              className="scale-125 animate-radar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gear;
