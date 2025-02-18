import React from "react";

const testimonials = [
  {
    testimony:
      "We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.",
    person: "– Brand Director at a Tech Startup",
  },
  {
    testimony:
      "adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!",
    person: "– Head of Growth at Tech Startup",
  },
  {
    testimony:
      "We’ve tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!",
    person: "– Ecommerce Manager at Home Décor Brand",
  },
  {
    testimony:
      "What impressed me most was the real-time optimization. adTask’s intelligent agents just keep refining our campaigns—our ad spend has never worked harder!",
    person: "– Digital Strategist at SaaS Company",
  },
  {
    testimony:
      "adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers.",
    person: "– Social Media Lead at Non-Profit Organization",
  },
  {
    testimony:
      "We’ve seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!",
    person: "– Social Media Manager at a Fitness Brand",
  },
];

const TestimonialGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      { testimonials.map((item, index) => {return <div key={index} className="testimonial-card bg-gradient-to-l from-[#7687B5] to-[#333B4F]/80 p-[1px] w-[352px] h-[196px] rounded-xl">
        <div className="inner-card bg-gradient-to-b from-[#0B0B0B] to-[#131313] w-full h-full rounded-xl px-4 py-6">
          <div className="flex flex-col h-full w-full justify-between">
            <div className="testimonial">
              <p className="font-light text-[#C5CDE3] text-sm">{item.testimony}</p>
            </div>
            <div className="testimony-person text-sm">
              <span>{item.person}</span>
            </div>
          </div>
        </div>
      </div>})}
    </div>
  );
};

export default TestimonialGrid;
