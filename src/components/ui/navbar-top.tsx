import Link from 'next/link'
import React from 'react'
import GradientButton from './gradient-button'
import { cn } from '@/lib/utils';

const NavbarTop = ({
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
  return (
    <nav>
        <div className={cn("flex w-[1176px] h-16 relative mx-auto border border-transparent dark:border-white/[0.2] rounded-xl dark:bg-[#0F0F0F] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-between space-x-4",className)}>
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
        </div>
    </nav>
  )
}

export default NavbarTop