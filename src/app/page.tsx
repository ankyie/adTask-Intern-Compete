import Contact from "@/components/sections/Contact";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HomeEnd from "@/components/sections/HomeEnd";
import Partners from "@/components/sections/Partners";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import VideoIntro from "@/components/sections/VideoIntro";
import WorksWith from "@/components/sections/WorksWith";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#050506]">
      <Hero />
      <VideoIntro />
      <Partners />
      <WorksWith />
      <Features />
      <Services />
      <Testimonials />
      <Contact />
      <HomeEnd />
      <Footer />
    </div>
  );
}