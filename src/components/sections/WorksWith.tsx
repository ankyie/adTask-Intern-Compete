"use client";
import React from "react";
import { SiGoogleads } from "react-icons/si";
import { FaTiktok, FaLinkedin, FaAmazon } from "react-icons/fa";
import { FaMeta, FaXTwitter } from "react-icons/fa6";
import GlowyIcon from "../ui/glowy-icon";

const worked = [
  {
    name: 'Google Ads',
    icon: SiGoogleads,
  },
  {
    name: 'TikTok Ads',
    icon: FaTiktok,
  },
  {
    name: 'Meta',
    icon: FaMeta,
  },
  {
    name: 'Linkedin Ads',
    icon: FaLinkedin,
  },
  {
    name: 'Amazon Ads',
    icon: FaAmazon,
  },
  {
    name: 'X/Twitter',
    icon: FaXTwitter,
  },
]

const WorksWith = () => {
  return (
    <section className="works-with h-96">
      <div className="flex flex-col gap-8 justify-center items-center">
        <h2 className="text-[#E2E8F8]">AdTask AI works with :</h2>
        <div className="flex justify-center items-center">
          <ul className="flex flex-wrap justify-center items-center md:gap-8 gap-4 max-sm:w-[358px]">
            {worked.map((work, index) => {
              return <li className="relative cursor-pointer group transition-all duration-300" key={index}>
              <div className="relative top-4 group-hover:top-0 duration-300 flex justify-center items-center xl:w-28 xl:h-28 w-20 h-20 bg-gradient-to-l p-[1px] from-[#7687B5] to-[#333B4F] rounded-xl">
                <div className="w-full h-full rounded-xl relative flex justify-center items-center p-6">
                  <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#22252E] group-hover:[mask-image:radial-gradient(ellipse_at_center,transparent_10%,#333B4F_68%)] transition-all duration-300 rounded-xl"></div>
                  <GlowyIcon
                    Icon={work.icon}
                    className="relative z-20 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 w-full text-center mx-auto opacity-0 group-hover:opacity-100 font-light duration-300">
                <span>{work.name}</span>
              </div>
            </li>})}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorksWith;
