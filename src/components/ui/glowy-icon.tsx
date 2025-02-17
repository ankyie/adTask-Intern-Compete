import React from 'react';
import { SVGProps } from 'react';

interface GlowyIconProps extends SVGProps<SVGSVGElement> {
  Icon: React.ComponentType<any>;
  size?: string;
  glowSize?: string;
  color1?: string;
  color2?: string;
}

const GlowyIcon: React.FC<GlowyIconProps> = ({ Icon, size = '3.5em', glowSize = '5px', color1 = '#C7D7FF', color2 = '#788199', ...rest }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <radialGradient id="iconGradient">
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation={glowSize} result="blur" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="blur" />
          </feMerge>
        </filter>
      </defs>
      <g mask="url(#iconMask)">
        <Icon size="100%" fill="url(#iconGradient)" />
      </g>
      <mask id="iconMask">
        <rect width="100%" height="100%" fill="white" />
      </mask>
      <use href="#glow" />
    </svg>
  );
};

export default GlowyIcon;