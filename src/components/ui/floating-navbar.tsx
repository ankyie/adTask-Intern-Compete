"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import GradientButton from "./gradient-button";
import { FaPhone } from "react-icons/fa";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
 
  const [visible, setVisible] = useState(false);
 
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
 
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <nav className="max-md:hidden">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex xl:w-[1176px] md:w-[760px] w-full h-16 fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-xl dark:bg-[#0F0F0F] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-between space-x-4",
            className
          )}
        >
          <div className="nav-logo flex items-center justify-center gap-3">
            <Link href={"/"} className="text-2xl">
              <span>
                ad<span className="font-semibold">Task</span>.ai
              </span>
            </Link>
          </div>
          <div className="nav-pages relative xl:left-20 left-3 flex items-center justify-center gap-6">
            {navItems.map((navItem, idx) => (
              <div className="relative nav-pages-box group" key={`link=${idx}`}>
                <Link
                  href={navItem.link}
                  className={cn(
                    "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                  )}
                >
                  <span className="hidden sm:block text-sm group-hover:font-semibold duration-300">
                    {navItem.name}
                  </span>
                  <span className="block group-hover:-rotate-180 duration-300">
                    {navItem.icon}
                  </span>
                </Link>
                {navItem.name === "Pricing" && (
                  <div className="nav-selected-page bg-white w-full h-1 absolute left-1 -bottom-6"></div>
                )}
              </div>
            ))}
          </div>
          <div className="nav-register flex items-center justify-center gap-3">
            <Link href={"#"}>
              <GradientButton
                buttonColor="transparent"
                gradientColor={"white"}
                text="Login"
              />
            </Link>
            <Link href={"#"} className="max-xl:hidden">
            <GradientButton
              buttonColor="#7687B5"
              buttonColorOpacity={30}
              gradientColor="white"
              text="Try Now for Free"
            />
          </Link>
            <Link href={"#"} className="xl:hidden">
            <GradientButton
              buttonColor="#7687B5"
              buttonColorOpacity={30}
              gradientColor="white"
              className="px-2"
              text={
                <div>
                  <svg width="0" height="0">
                    <radialGradient
                      id="phone-gradient"
                      cx="50%"
                      cy="50%"
                      r="50%"
                    >
                      <stop stopColor="#C7D7FF" offset="0%" />
                      <stop stopColor="#788199" offset="100%" />
                    </radialGradient>
                  </svg>

                  <FaPhone
                    style={{
                      fill: "url(#phone-gradient)",
                      width: "1.5em",
                      height: "1.5em",
                      position: "relative",
                    }}
                    className={""}
                  />
                </div>
              }
            />
          </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};

export default FloatingNav; // Don't forget to export!
