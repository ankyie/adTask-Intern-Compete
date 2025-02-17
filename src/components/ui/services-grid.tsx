import React from "react";
import ServiceCard from "./service-card";
import { ImTarget } from "react-icons/im";
import { MdSpeed } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { TiSocialDribbble } from "react-icons/ti";
import { GiClick } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";

const services = [
  {
    icon: ImTarget,
    name: "Smart Ad Targeting",
    description: "AI-powered audience segmentation ensures your ads reach the right people, delivering higher ROI and maximum conversion rates.",
  },
  {
    icon: MdSpeed,
    name: "Performance Analytics",
    description: "Access real-time insights and track key metrics across all campaigns in one unified dashboard to quickly refine your strategies.",
  },
  {
    icon: TbSeo,
    name: "SEO Automation",
    description: "Automate keyword research and content optimization suggestions to improve your search engine rankings with less effort.",
  },
  {
    icon: TiSocialDribbble,
    name: "Social Media Marketing",
    description: "AI agents craft personalized content, schedule posts, monitor engagement, and refine strategies in real time for maximum impact across all major social platforms.",
  },
  {
    icon: GiClick,
    name: "Conversion Optimization",
    description: "AI-driven A/B testing and automated tweaks to landing pages and funnels help you consistently improve conversion rates.",
  },
  {
    icon: HiSpeakerphone,
    name: "Campaign Automation",
    description: "Centralize and streamline your ad management. Our intelligent engine automatically adjusts bids, budgets, and targeting to maximize results.",
  },
];

const ServicesGrid = () => {
  return (
    <div>
      <ServiceCard items={services} />
    </div>
  );
};

export default ServicesGrid;
