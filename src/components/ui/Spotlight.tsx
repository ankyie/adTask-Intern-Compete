import { cn } from "@/lib/utils"

type SpotlightProps = {
  className?: string
  fill?: string
  fillOpacity?: number
  height?: string
  width?: string
  blurStrength?: string
  cx?: string
  cy?: string
  r?: string
}

export const Spotlight = ({ className, fill = "white", fillOpacity = 1, height = "100%", width = "100%", blurStrength = "3", cx="50%", cy="40%", r="50%" }: SpotlightProps) => {

    // Check if fill is a valid hex code. If not, default to white.
  const isValidHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(fill);
  const actualFill = isValidHexColor ? fill : "white";

  return (
    <svg
      className={cn("animate-spotlight pointer-events-none absolute z-[1] left-1/2 -translate-x-1/2 w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ height, width }}
    >
      <defs>
        <radialGradient id="triangleGradient" cx={cx} cy={cy} r={r}>
          <stop offset="0%" stopColor={actualFill} stopOpacity="0.4" />
          <stop offset="100%" stopColor={actualFill} stopOpacity="0" />
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation={blurStrength} />
        </filter>
      </defs>
      <path d="M50 0 L100 100 L0 100 Z" fill="url(#triangleGradient)" filter="url(#blur)" fillOpacity={fillOpacity}/>
    </svg>
  )
}