"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const partners = [
  {
    name: "Amazon",
    src: "/partners/amazon.png",
  },
  {
    name: "Coca Cola",
    src: "/partners/cocacola.png",
  },
  {
    name: "Google",
    src: "/partners/google.png",
  },
  {
    name: "Intel",
    src: "/partners/intel.png",
  },
  {
    name: "Salesforce",
    src: "/partners/salesforce.png",
  },
  {
    name: "Sony",
    src: "/partners/sony.png",
  },
  {
    name: "Workday",
    src: "/partners/workday.png",
  },
];

const Partners = ({
  items = partners,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items?: {
    name: string;
    src: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  
  const [start, setStart] = useState(false);
  
  
  const getDirection = React.useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

  const getSpeed = React.useCallback(() => {
    if (containerRef.current) {
      let duration = "40s";
      if (speed === "fast") {
        duration = "20s";
      } else if (speed === "slow") {
        duration = "80s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  const addAnimation = React.useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
  
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) { // Check again before appending
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
  
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  return (
    <section className="partners xl:pb-24 md:pb-16 pb-12">
      <div className="relative">
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 mx-auto overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            " flex items-center min-w-full shrink-0 gap-32 py-4 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, index) => {
            return (
              <li key={index} className="opacity-35">
                <Image src={item.src} alt={item.name} height={80} width={80} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="absolute -top-40 -left-[20%] partner-gradient w-[630px] h-[630px] bg-[#263048] filter blur-[173.3px] opacity-30 rounded-full"></div>
      </div>
    </section>
  );
};

export default Partners;
