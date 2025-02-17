import React from "react";
import GlowyIcon from "./glowy-icon";
import { cn } from "@/lib/utils";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";

const Graph = ({className = ""}) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className={cn("flex justify-center items-center w-32 h-32 bg-gradient-to-l p-[1px] from-[#7687B5] to-[#333B4F] rounded-xl overflow-hidden", className)}>
        <div className="w-full h-full rounded-xl relative flex flex-col items-center justify-center bg-[#22252E]">
          <div className="flex justify-center items-center w-28 h-28 bg-gradient-to-l p-[1px] from-[#7687B5] to-[#333B4F] rounded-xl overflow-hidden">
            <div className="w-full h-full rounded-xl relative flex flex-col justify-center items-center p-2 bg-[#22252E]">
              <GlowyIcon
                Icon={IoStatsChartSharp}
                size="5em"
                className="scale-125 animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>


      
      <div className={cn("flex justify-center items-center w-32 h-32 bg-gradient-to-l p-[1px] from-[#7687B5] to-[#333B4F] rounded-xl overflow-hidden", className)}>
        <div className="w-full h-full rounded-xl relative flex flex-col items-center justify-center bg-[#22252E]">
          <div className="flex justify-center items-center w-28 h-28 bg-gradient-to-l p-[1px] from-[#7687B5] to-[#333B4F] rounded-xl overflow-hidden">
            <div className="w-full h-full rounded-xl relative flex flex-col justify-center items-center p-2 bg-[#22252E]">
              <GlowyIcon
                Icon={FaChartPie}
                size="5em"
                className="scale-125 animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
