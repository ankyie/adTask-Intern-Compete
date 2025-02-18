"use client";

import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "../ui/floating-navbar";
import { GoTriangleDown } from "react-icons/go";
import ShimmerButton from "../ui/shimmer-button";
import { Button } from "../ui/moving-border";
import { SparklesCore } from "../ui/sparkles";
import NavbarTop from "../ui/navbar-top";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#050506] dark:bg-grid-white/[0.02] bg-grid-[#050506]/[0.05] relative flex justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center justify-center">
        <div className="spotlight-hero">
          <Spotlight
            className="top-10"
            fill={"#465068"}
            height={`${100}%`}
            width={`${50}%`}
          />
          <Spotlight
            className="top-10"
            fill={"#465068"}
            height={`${100}%`}
            fillOpacity={0.9}
            width={`${80}%`}
          />
        </div>
      </div>
      <FloatingNav
        navItems={[
          { name: "Products", link: "#", icon: <GoTriangleDown /> },
          { name: "Tools", link: "#", icon: <GoTriangleDown /> },
          { name: "Contact Us", link: "#" },
        ]}
      />
      <main className="pt-16">
        <div className="flex flex-col items-center gap-16">
              <NavbarTop
                navItems={[
                  { name: "Products", link: "#", icon: <GoTriangleDown /> },
                  { name: "Tools", link: "#", icon: <GoTriangleDown /> },
                  { name: "Contact Us", link: "#" },
                ]}
              />
        <div className="relative z-20 w-[767px]">
          <div className="flex flex-col items-center justify-center gap-16">
            <ShimmerButton />
            <div className="cursor-default animate-spotlight">
              <style jsx>{`
                .glow-on-hover:hover {
                  filter: drop-shadow(
                    0 0 10px #7687b5
                  ); /* Adjust blur radius and color here */
                  transition: all 0.3s duration-300; /* Add a transition for smooth effect */
                }
              `}</style>
              <h1 className="text-8xl bg-gradient-to-t from-gray-500 to-white inline-block text-transparent bg-clip-text glow-on-hover duration-500">
                ad<span className="font-semibold">Task</span>.ai
              </h1>
            </div>
            <div className="hero-quote text-center font-light">
              <p>
                Stop struggling with marketing decisions. Our AI assistant
                analyzes your business, creates personalized strategies, and
                helps you execute them - all in real-time.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 gap-3">
            <Button
              borderClassName={
                "bg-[radial-gradient(#7687B5_40%,transparent_90%)]"
              }
              className="bg-[#7687B5]/30 border-none"
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
            <span className="text-[#C5CDE3] font-light text-xs">
              Try AdTask AI free for 30 days
            </span>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
