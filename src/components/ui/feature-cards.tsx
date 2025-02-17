import React from "react";
import GlowyIcon from "./glowy-icon";
import Radar from "./radar";
import Gear from "./gear";
import Graph from "./graph";
import Reach from "./reach";

const FeatureCards = () => {
  return (
    <div className="w-[1120px] mx-auto">
      <div className="flex justify-between gap-4">


        <div className="flex justify-center items-center w-[352px] h-[593px] bg-gradient-to-l p-[1px] from-[#7687B5] to-[#333B4F] rounded-xl overflow-hidden">
          <div className="w-full h-full rounded-xl relative flex flex-col items-center p-6">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#22252E] [mask-image:radial-gradient(circle_at_bottom_center,transparent_0%,#333B4F_50%)] transition-all duration-300 rounded-xl"></div>
            <Radar className="relative top-2" />
            <div className="absolute bottom-6 w-full px-6 flex flex-col gap-2 card-text">
              <h3 className="text-sm">Reach Target Audience</h3>
              <p className="text-xs font-extralight">Pinpoint the perfect audience with precision. Our AI-driven targeting ensures every message resonates where it matters most.</p>
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-between items-center gap-4">
          <div className="flex justify-center items-center w-[352px] h-[280px] bg-gradient-to-l p-[1px] from-[#7687B5] to-[#333B4F] rounded-xl overflow-hidden">
            <div className="w-full h-full rounded-xl relative flex flex-col items-center">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#22252E] [mask-image:radial-gradient(circle_at_bottom_center,transparent_0%,#333B4F_50%)] transition-all duration-300 rounded-xl"></div>
              <div className="relative -bottom-4 flex items-center w-full">
                <div className="relative flex-1 bg-white h-[3px] filter blur-[1px] opacity-0"></div>
                <Gear />
                <div className="relative flex-1">
                  <span className="absolute text-center w-full text-xs -top-4">GEN AI Powered</span>
                  <div className="bg-white h-[3px] filter blur-[1px]"></div>
                </div>
              </div>
              <div className="absolute bottom-6 w-full px-6 flex flex-col gap-2 card-text">
                <h3 className="text-sm">Marketing made Easier</h3>
                <p className="text-xs font-extralight">Save time and simplify campaign management. Let automated workflows handle the heavy lifting, so you can focus on creativity.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[352px] h-[280px] bg-gradient-to-l p-[1px] from-[#7687B5] to-[#333B4F] rounded-xl overflow-hidden">
            <div className="w-full h-full rounded-xl relative flex flex-col items-center p-6">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#22252E] [mask-image:radial-gradient(circle_at_bottom_center,transparent_0%,#333B4F_50%)] transition-all duration-300 rounded-xl"></div>
              <Graph className="relative top-2" />
              <div className="absolute bottom-6 w-full px-6 flex flex-col gap-2 card-text">
                <h3 className="text-sm">Smart Marketing Insights</h3>
                <p className="text-xs font-extralight">Unlock actionable data to guide every decision. Stay ahead of trends, refine your strategies, and make confident moves with powerful analytics.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="flex justify-center items-center w-[352px] h-[593px] bg-gradient-to-l p-[1px] from-[#7687B5] to-[#333B4F] rounded-xl overflow-hidden">
          <div className="w-full h-full rounded-xl relative flex flex-col items-center p-6">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#22252E] [mask-image:radial-gradient(circle_at_bottom_center,transparent_0%,#333B4F_50%)] transition-all duration-300 rounded-xl"></div>
            <Reach className="relative top-2" />
            <div className="absolute bottom-6 w-full px-6 flex flex-col gap-2 card-text">
              <h3 className="text-sm">Intelligent Agents to Optimize your Reach</h3>
              <p className="text-xs font-extralight">Scale and refine your marketing with AI-powered agents. They track performance in real-time to help you reach more customers efficiently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
