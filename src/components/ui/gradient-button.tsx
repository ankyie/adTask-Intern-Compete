import { cn } from "@/lib/utils";
import React from "react";

interface MyButtonProps {
  buttonColor?: string;
  buttonColorOpacity?: number;
  gradientColor?: string;
  text: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Example: Add onClick
  // Add other specific event handlers or props as needed
  // For other arbitrary props, you can use a more restricted approach if needed
  // like:  'data-testid'?: string; or other data attributes
}

const GradientButton: React.FC<MyButtonProps> = ({
  gradientColor = "white",
  buttonColor = "black",
  buttonColorOpacity = 90,
  text,
  className,
  onClick,
  ...rest
}) => {
  const isHexgradientColor = /^#([0-9A-Fa-f]{3}){1,2}$/.test(gradientColor);
  const gradientColorClass = isHexgradientColor
    ? `bg-[${gradientColor}]`
    : `bg-${gradientColor}`;

  // Convert hex to rgba
  const hexToRgba = (hex: string, opacity: number) => {
    let r = 0,
      g = 0,
      b = 0;

    // 3 digits
    if (hex.length == 4) {
      r = parseInt(hex.slice(1, 2), 16);
      g = parseInt(hex.slice(2, 3), 16);
      b = parseInt(hex.slice(3, 4), 16);
    } else if (hex.length == 7) {
      // 6 digits
      r = parseInt(hex.slice(1, 3), 16);
      g = parseInt(hex.slice(3, 5), 16);
      b = parseInt(hex.slice(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  };

  let bgColorWithOpacity;
  if (buttonColor.toLowerCase() === "transparent") {
    bgColorWithOpacity = "transparent";
  } else {
    bgColorWithOpacity = hexToRgba(buttonColor, buttonColorOpacity);
  }

  return (
    <div>
      <button
        className={cn("relative inline-flex items-center justify-center py-2 px-6 rounded-full overflow-hidden border border-[#7687B5]", className)}
        style={{ backgroundColor: bgColorWithOpacity }}
        onClick={onClick}
        {...rest}
      >
        <span className="relative text-white font-light">{text}</span>
        <span
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full blur-md opacity-50 ${gradientColorClass}`}
        ></span>
      </button>
    </div>
  );
};

export default GradientButton;
