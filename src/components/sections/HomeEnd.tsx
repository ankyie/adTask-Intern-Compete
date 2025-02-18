"use client";

import React from "react";
import { Button } from "../ui/moving-border";
import { SparklesCore } from "../ui/sparkles";
import { IoTriangleSharp } from "react-icons/io5";

const HomeEnd = () => {
  return (
    <section className="home-end">
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="cursor-default relative z-20 py-20">
          <style jsx>{`
            .glow-on-hover:hover {
              filter: drop-shadow(
                0 0 10px #7687b5
              ); /* Adjust blur radius and color here */
              transition: all 0.3s duration-300; /* Add a transition for smooth effect */
            }
          `}</style>
          <h1 className="text-8xl opacity-40 bg-gradient-to-t from-gray-500 to-white inline-block text-transparent bg-clip-text glow-on-hover duration-500">
            ad<span className="font-semibold">Task</span>.ai
          </h1>
        </div>

        <div className="relative py-16 pb-24 w-full bg-white dark:bg-[#050506] dark:bg-grid-white/[0.02] bg-grid-[#050506]/[0.03] flex justify-center items-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
          {/* <div className="flex flex-col items-center justify-center">
            <div className="spotlight-hero">
              <Spotlight
                className="top-0"
                fill={"#7687B5"}
                height={`${90}%`}
                width={`${50}%`}
                fillOpacity={0.7}
                cy={"30%"}
                cx={"40%"}
                r={"40%"}
              />
              <Spotlight
                className="top-0"
                fill={"#7687B5"}
                height={`${90}%`}
                width={`${80}%`}
                fillOpacity={0.7}
                cy={"30%"}
                cx={"40%"}
                r={"40%"}
              />
            </div>
          </div> */}
          <div className="absolute filter blur-[64px] opacity-20">
            <IoTriangleSharp
              className="text-[#7687B5] w-[600px] h-[600px]"
              preserveAspectRatio="none"
            />
          </div>
          <div className="absolute filter blur-[64px] opacity-50">
            <IoTriangleSharp
              className="text-[#7687B5] w-[200px] h-[600px]"
              preserveAspectRatio="none"
            />
          </div>

          <div className="relative flex flex-col justify-center items-center gap-12">
            <div className="text-center px-6 text-5xl">
              <h2>Are you ready to boost</h2>
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8]">
                your Digital Presence?
              </h2>
            </div>

            <div className="flex flex-col justify-center items-end gap-6">
              <Button
                borderClassName={
                  "bg-[radial-gradient(#7687B5_40%,transparent_90%)]"
                }
                className="bg-[#7687B5]/30 border-none h-12"
                containerClassName="h-12"
              >
                <SparklesCore
                  background="transparent"
                  minSize={0.2}
                  maxSize={1}
                />
                <div className="absolute">
                  <span className="font-light text-lg">Start Free Trial</span>
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full blur-md opacity-50 bg-white`}
                  ></span>
                </div>
              </Button>

              <button className="border border-[#7687B5] px-6 py-2 rounded-full text-[#E2E8F8] font-light text-lg">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeEnd;
