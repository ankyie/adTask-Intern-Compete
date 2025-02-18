{
  /* <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <title>Animated Bar Chart</title>

  <rect x="3" y="18" width="4" height="0" fill={props.style?.fill}>
    <animate
      attributeName="height"
      from="0"
      to="10"
      dur="0.5s"
      repeatCount="indefinite"
      begin="0s"
      fill="freeze"
    />
    <animate
      attributeName="y"
      from="18"
      to="8"
      dur="0.5s"
      repeatCount="indefinite"
      begin="0s"
      fill="freeze"
    />
  </rect>
  <rect x="9" y="18" width="4" height="0" fill={props.style?.fill}>
    <animate
      attributeName="height"
      from="0"
      to="15"
      dur="0.7s"
      repeatCount="indefinite"
      begin="0.2s"
      fill="freeze"
    />
    <animate
      attributeName="y"
      from="18"
      to="3"
      dur="0.7s"
      repeatCount="indefinite"
      begin="0.2s"
      fill="freeze"
    />
  </rect>
  <rect x="15" y="18" width="4" height="0" fill={props.style?.fill}>
    <animate
      attributeName="height"
      from="0"
      to="7"
      dur="0.6s"
      repeatCount="indefinite"
      begin="0.4s"
      fill="freeze"
    />
    <animate
      attributeName="y"
      from="18"
      to="11"
      dur="0.6s"
      repeatCount="indefinite"
      begin="0.4s"
      fill="freeze"
    />
  </rect>
</svg>; */
}

import React from "react";
import { SVGProps } from "react";

const AnimatedBarChartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <div className={`relative right-1.5 top-2`}>
      <svg
        width={props.style?.height}
        height={props.style?.height}
        viewBox="0 0 24 24"
        fill={props.style?.fill}
        xmlns="http://www.w3.org/2000/svg"
        style={props.style}
        className={props.className}
      >
        <title>Animated Bar Chart</title>

        <rect x="3" y="18" width="4" height="0" fill={props.style?.fill}>
          <animate
            attributeName="height"
            from="0"
            to="10"
            dur="0.5s"
            repeatCount="indefinite"
            begin="0s"
            fill="freeze"
          />
          <animate
            attributeName="y"
            from="18"
            to="8"
            dur="0.5s"
            repeatCount="indefinite"
            begin="0s"
            fill="freeze"
          />
        </rect>
        <rect x="9" y="18" width="4" height="0" fill={props.style?.fill}>
          <animate
            attributeName="height"
            from="0"
            to="15"
            dur="0.7s"
            repeatCount="indefinite"
            begin="0.2s"
            fill="freeze"
          />
          <animate
            attributeName="y"
            from="18"
            to="3"
            dur="0.7s"
            repeatCount="indefinite"
            begin="0.2s"
            fill="freeze"
          />
        </rect>
        <rect x="15" y="18" width="4" height="0" fill={props.style?.fill}>
          <animate
            attributeName="height"
            from="0"
            to="7"
            dur="0.6s"
            repeatCount="indefinite"
            begin="0.4s"
            fill="freeze"
          />
          <animate
            attributeName="y"
            from="18"
            to="11"
            dur="0.6s"
            repeatCount="indefinite"
            begin="0.4s"
            fill="freeze"
          />
        </rect>
        <rect x="21" y="18" width="4" height="0" fill={props.style?.fill}>
          <animate
            attributeName="height"
            from="0"
            to="12"
            dur="1s" // New duration
            repeatCount="indefinite"
            begin="0.5s" // New delay
            fill="freeze"
            calcMode="ease-out" // New easing
          />
          <animate
            attributeName="y"
            from="18"
            to="6"
            dur="1s" // New duration
            repeatCount="indefinite"
            begin="0.5s" // New delay
            fill="freeze"
            calcMode="ease-out" // New easing
          />
        </rect>
      </svg>
    </div>
  );
};

export default AnimatedBarChartIcon;
