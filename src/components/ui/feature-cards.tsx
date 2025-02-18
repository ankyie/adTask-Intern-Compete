import React from "react";
import Radar from "./radar";
import Gear from "./gear";
import Graph from "./graph";
import Reach from "./reach";
import { IoTriangleSharp } from "react-icons/io5";

const FeatureCards = () => {
  return (
    <div className="relative xl:w-[1120px] md:w-[725px] sm:w-[361px] w-full max-sm:px-4 mx-auto">
      <div className="flex flex-wrap xl:justify-between justify-center gap-4">

        {/* card 1 */}
        <div className="flex justify-center items-center w-[352px] h-[593px] bg-gradient-to-t from-[#1D2333] to-[#0B0B0B] rounded-xl overflow-hidden">
          <div className="w-full h-full rounded-xl relative flex flex-col items-center p-6">
            <div className="absolute w-full h-full filter blur-[64px] opacity-50">
              <IoTriangleSharp
                className="text-[#7687B5] w-full h-full"
                preserveAspectRatio="none"
              />
            </div>
            <div className="feature-circle w-14 h-32 bg-[#C7D7FF] rounded-full rotate-45 absolute -top-8 left-0 filter blur-[139.2px]"></div>
            <Radar className="relative top-2" />
            <div className="absolute bottom-6 w-full px-6 flex flex-col gap-2 card-text">
              <h3 className="text-sm">Reach Target Audience</h3>
              <p className="text-xs font-extralight">
                Pinpoint the perfect audience with precision. Our AI-driven
                targeting ensures every message resonates where it matters most.
              </p>
            </div>
          </div>
        </div>

        {/* card 4  */}
        <div className="xl:hidden flex justify-center items-center w-[352px] h-[593px] bg-gradient-to-t from-[#1D2333] to-[#0B0B0B] rounded-xl overflow-hidden">
          <div className="w-full h-full rounded-xl relative flex flex-col items-center p-6">
            <div className="absolute w-full h-full filter blur-[64px] opacity-50">
              <IoTriangleSharp
                className="text-[#7687B5] w-full h-full"
                preserveAspectRatio="none"
              />
            </div>
            <div className="feature-circle w-14 h-32 bg-[#C7D7FF] rounded-full rotate-45 absolute -top-8 left-0 filter blur-[139.2px]"></div>
            <Reach className="relative top-2" />
            <div className="absolute bottom-6 w-full px-6 flex flex-col gap-2 card-text">
              <h3 className="text-sm">
                Intelligent Agents to Optimize your Reach
              </h3>
              <p className="text-xs font-extralight">
                Scale and refine your marketing with AI-powered agents. They
                track performance in real-time to help you reach more customers
                efficiently.
              </p>
            </div>
          </div>
        </div>


        <div className="flex xl:flex-col flex-row max-md:flex-col justify-between items-center gap-4">

          {/* card 2  */}
          <div className="flex justify-center items-center w-[352px] h-[280px] bg-gradient-to-t from-[#1D2333] to-[#0B0B0B] rounded-xl overflow-hidden">
            <div className="w-full h-full rounded-xl relative flex flex-col items-center">
              <div className="absolute w-full h-full filter blur-[64px] opacity-50">
                <IoTriangleSharp
                  className="text-[#7687B5] w-full h-full"
                  preserveAspectRatio="none"
                />
              </div>
              <div className="feature-circle w-14 h-32 bg-[#C7D7FF] rounded-full rotate-45 absolute -top-8 left-0 filter blur-[139.2px]"></div>
              <div className="relative -bottom-4 flex items-center w-full">
                <div className="relative flex-1 bg-white h-[3px] filter blur-[1px] opacity-0"></div>
                <Gear />
                <div className="relative flex-1">
                  <span className="absolute text-center w-full text-xs -top-5 text-transparent bg-clip-text bg-gradient-to-l from-[#7687B5] via-[#91B0FF] to-[#E2E8F8]">
                    GEN AI Powered
                  </span>
                  <div className="relative">
                    <div className="bg-white h-[1px]"></div>
                    <div className="absolute top-0 w-full bg-white h-[2px] filter blur-[2px]"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 w-full px-6 flex flex-col gap-2 card-text">
                <h3 className="text-sm">Marketing made Easier</h3>
                <p className="text-xs font-extralight">
                  Save time and simplify campaign management. Let automated
                  workflows handle the heavy lifting, so you can focus on
                  creativity.
                </p>
              </div>
            </div>
          </div>

          {/* card 3  */}
          <div className="flex justify-center items-center w-[352px] h-[280px] bg-gradient-to-t from-[#1D2333] to-[#0B0B0B] rounded-xl overflow-hidden">
            <div className="w-full h-full rounded-xl relative flex flex-col items-center p-6">
              <div className="absolute w-full h-full filter blur-[64px] opacity-50">
                <IoTriangleSharp
                  className="text-[#7687B5] w-full h-full"
                  preserveAspectRatio="none"
                />
              </div>
              <div className="feature-circle w-14 h-32 bg-[#C7D7FF] rounded-full rotate-45 absolute -top-8 left-0 filter blur-[139.2px]"></div>
              <Graph className="relative top-2" />
              <div className="absolute bottom-6 w-full px-6 flex flex-col gap-2 card-text">
                <h3 className="text-sm">Smart Marketing Insights</h3>
                <p className="text-xs font-extralight">
                  Unlock actionable data to guide every decision. Stay ahead of
                  trends, refine your strategies, and make confident moves with
                  powerful analytics.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* card 4  */}
        <div className="max-xl:hidden flex justify-center items-center w-[352px] h-[593px] bg-gradient-to-t from-[#1D2333] to-[#0B0B0B] rounded-xl overflow-hidden">
          <div className="w-full h-full rounded-xl relative flex flex-col items-center p-6">
            <div className="absolute w-full h-full filter blur-[64px] opacity-50">
              <IoTriangleSharp
                className="text-[#7687B5] w-full h-full"
                preserveAspectRatio="none"
              />
            </div>
            <div className="feature-circle w-14 h-32 bg-[#C7D7FF] rounded-full rotate-45 absolute -top-8 left-0 filter blur-[139.2px]"></div>
            <Reach className="relative top-2" />
            <div className="absolute bottom-6 w-full px-6 flex flex-col gap-2 card-text">
              <h3 className="text-sm">
                Intelligent Agents to Optimize your Reach
              </h3>
              <p className="text-xs font-extralight">
                Scale and refine your marketing with AI-powered agents. They
                track performance in real-time to help you reach more customers
                efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
