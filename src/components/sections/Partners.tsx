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

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <section className="partners pb-24">
      {/* <div className='flex justify-between items-center'> */}
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
                <Image src={item.src} alt={item.name} height={90} width={90} />
              </li>
            );
          })}
        </ul>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Partners;
