import React from "react";
import GlowyIcon from "./glowy-icon";
import { IconType } from "react-icons";

interface ServiceItem {
  icon: IconType;
  name: string;
  description: string;
}

const ServiceCard: React.FC<{ items: ServiceItem[] }> = ({ items }) => {
  return (
    <div className="flex justify-center items-center xl:w-[1153px] xl:h-[660px]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (<div key={index}>
          <div className="w-[350px] h-[300px] flex flex-col items-center gap-4 justify-center relative">
            <div className="absolute inset-x-0 top-[50px] z-0 flex justify-center">
              <div className="absolute w-[250px] h-[200px] bg-[#263048] blur-[40px] rounded-full"></div>
            </div>
  
            {/* Border Lines */}
            <div className="absolute top-0 left-[5%] w-[90%] h-[1px] bg-gradient-to-r from-[#0C0F16] via-[#788DC5] to-[#0C0F16]"></div>
            <div className="absolute bottom-0 left-[5%] w-[90%] h-[1px] bg-gradient-to-r from-[#0C0F16] via-[#788DC5] to-[#0C0F16]"></div>
            <div className="absolute left-0 top-[5%] h-[90%] w-[1px] bg-gradient-to-b from-[#0C0F16] via-[#788DC5] to-[#0C0F16]"></div>
            <div className="absolute right-0 top-[5%] h-[90%] w-[1px] bg-gradient-to-b from-[#0C0F16] via-[#788DC5] to-[#0C0F16]"></div>
  
            {/* White Line */}
            <div className="absolute top-0 left-1/2 w-[30px] h-[2px] bg-white -translate-x-1/2"></div>
  
            {/* Corner Boxes */}
            <div className="absolute top-[-12px] left-[-8px] w-4 h-6 bg-gradient-to-b from-[#333B4F] to-[#7687B5] rounded-md">
              <div className="absolute bg-white w-[2px] h-[2px] top-1 left-1 rounded-full"></div>
              <div className="absolute bg-white w-[2px] h-[2px] top-1 right-1 rounded-full"></div>
              <div className="absolute bg-white w-[2px] h-[2px] bottom-1 left-1 rounded-full"></div>
              <div className="absolute bg-white w-[2px] h-[2px] bottom-1 right-1 rounded-full"></div>
            </div>
            <div className="absolute top-[-12px] right-[-8px] w-4 h-6 bg-gradient-to-b from-[#333B4F] to-[#7687B5] rounded-md">
              <div className="absolute bg-white w-[2px] h-[2px] top-1 left-1 rounded-full"></div>
              <div className="absolute bg-white w-[2px] h-[2px] top-1 right-1 rounded-full"></div>
              <div className="absolute bg-white w-[2px] h-[2px] bottom-1 left-1 rounded-full"></div>
              <div className="absolute bg-white w-[2px] h-[2px] bottom-1 right-1 rounded-full"></div>
            </div>
            <div className="absolute bottom-[-12px] right-[-8px] w-4 h-6 bg-gradient-to-b from-[#333B4F] to-[#7687B5] rounded-md">
              <div className="absolute bg-white w-[2px] h-[2px] top-1 left-1 rounded-full"></div>
              <div className="absolute bg-white w-[2px] h-[2px] top-1 right-1 rounded-full"></div>
              <div className="absolute bg-white w-[2px] h-[2px] bottom-1 left-1 rounded-full"></div>
              <div className="absolute bg-white w-[2px] h-[2px] bottom-1 right-1 rounded-full"></div>
            </div>
            <div className="absolute bottom-[-12px] left-[-8px] w-4 h-6 bg-gradient-to-b from-[#333B4F] to-[#7687B5] rounded-md">
              <div className="absolute bg-white w-[2px] h-[2px] top-1 left-1 rounded-full"></div>
              <div className="absolute bg-white w-[2px] h-[2px] top-1 right-1 rounded-full"></div>
              <div className="absolute bg-white w-[2px] h-[2px] bottom-1 left-1 rounded-full"></div>
              <div className="absolute bg-white w-[2px] h-[2px] bottom-1 right-1 rounded-full"></div>
            </div>
  
  
            <div
              className="relative flex flex-col gap-4 justify-center items-center"
            >
              <GlowyIcon Icon={item.icon} size="5em" /> {/* Dynamic icon */}
              <div className="flex flex-col gap-3 justify-center items-center">
                <h3 className="text-xl">{item.name}</h3>
                <p className="px-4 text-sm text-center font-extralight">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default ServiceCard

