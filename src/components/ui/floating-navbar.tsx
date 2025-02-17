"use client";
import React, { useState, useEffect, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import GradientButton from "./gradient-button";

// Debounce function (keep this outside the component)
function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => ReturnType<T> | void { // Correct return type
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) { // Correct 'this' type
      const context = this;

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
          func.apply(context, args);
      }, delay);
  };
}

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
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    const handleScroll = (current: number) => {
        const scrollThreshold = 0.1;
    
        if (current < scrollThreshold) {
            setVisible(true);
            return;
        }
    
        const direction = current - lastScrollY.current;
        lastScrollY.current = current;
    
        setVisible(direction < 0);
    };
    
    const debouncedHandleScroll = debounce<(current: number) => void>(handleScroll, 50);    

    useMotionValueEvent(scrollYProgress, "change", debouncedHandleScroll);

    // Empty useEffect (remove if not needed for other cleanup)
    useEffect(() => {
        return () => { };
    }, []);

    return (
        <nav>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ opacity: 1, y: -100 }}
                    animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                        "flex w-[1176px] h-16 fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-xl dark:bg-[#0F0F0F] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-between space-x-4",
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
                    <div className="nav-pages relative left-20 flex items-center justify-center gap-6">
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
                        <Link href={"#"}>
                            <GradientButton
                                buttonColor="#7687B5"
                                buttonColorOpacity={30}
                                gradientColor="white"
                                text="Try Now for Free"
                            />
                        </Link>
                    </div>
                </motion.div>
            </AnimatePresence>
        </nav>
    );
};

export default FloatingNav; // Don't forget to export!