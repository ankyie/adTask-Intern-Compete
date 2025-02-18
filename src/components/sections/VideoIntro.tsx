import React from "react";
import { MovingBorder } from "../ui/moving-border";
import { FaYoutube } from "react-icons/fa";
import { cn } from "@/lib/utils";

const VideoIntro = () => {
  return (
    <div className="relative flex justify-center items-center xl:p-0 md:px-24 sm:px-8 px-2">
      {/* <Button
        borderClassName={"bg-[radial-gradient(#7687B5_40%,transparent_90%)]"}
        className="bg-[#7687B5]/30 border-none"
      >
      </Button> */}
      <div className="relative bg-transparent p-[1px] overflow-hidden bg-black xl:w-[970px] xl:h-[582px] w-full aspect-video rounded-xl flex items-center justify-center cursor-default">
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{ borderRadius: `calc(${"1.75rem"} * 0.96)` }}
        >
          <MovingBorder duration={6000} rx="30%" ry="30%">
            <div
              className={cn(
                "h-[640px] w-[640px] opacity-[0.8] bg-[radial-gradient(#7687B5_40%,transparent_90%)]"
              )}
            />
          </MovingBorder>
        </div>
        <div
          className={cn(
            "relative bg-[#7687B5]/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased bg-black"
          )}
          style={{
            borderRadius: `calc(${"1.75rem"} * 0.96)`,
          }}
        >
          <div className="relative">
            <FaYoutube className="text-[#FF0000] text-8xl absolute left-[40%]" />
            <h1 className="opacity-20 text-8xl bg-gradient-to-t from-gray-500 to-white inline-block text-transparent bg-clip-text duration-500">
              Ad<span className="font-semibold">Task</span>.ai
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
