import { cn } from "@/lib/utils";
import React from "react";
import { SVGProps } from "react";

interface GlowyIconProps extends SVGProps<SVGSVGElement> {
  Icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  size?: string;
  color1?: string;
  color2?: string;
}

const GlowyIcon: React.FC<GlowyIconProps> = ({
  Icon,
  size = "3em",
  color1 = "#C7D7FF",
  color2 = "#788199",
  className="",
}) => {
  return (
    <div>
      <svg width="0" height="0">
        <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
          <stop stopColor={color1} offset="0%" />
          <stop stopColor={color2} offset="100%" />
        </radialGradient>
      </svg>

      <Icon
        style={{
          fill: "url(#glow-gradient)",
          width: size,
          height: size,
          position: "relative",
        }}

        className={cn("",className)}
      />
    </div>
  );
};

export default GlowyIcon;
