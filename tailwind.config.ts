const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        reveal: "reveal 2s linear infinite",
        reveal2: "reveal2 2s linear infinite",
        reveal3: "reveal3 2s linear infinite",
        shimmer: "shimmer 5s linear infinite",
        shine: "slide 5s linear infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        radar: "radarSweep 2s linear infinite",
        ripple: 'ripple 2s linear infinite',
        suck: "suck 2s ease infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            // transform: "translate(-50%, -80%) scale(0.2)",
          },
          "100%": {
            opacity: 1,
            // transform: "translate(-50%, 0%) scale(1)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "600% 0",
          },
          "100%": {
            backgroundPosition: "-600% 0",
          },
        },
        slide: {
          "0%": {
            left: "-300%" /* Start off-screen left */,
          },
          "100%": {
            left: "300%" /* End off-screen right */,
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        radarSweep: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: 0.5,
          },
          '50%': {
            transform: 'scale(1)', // Adjust scale for ripple size
            opacity: 1,
          },
          '100%': {
            transform: 'scale(1.5)',  // Adjust scale for ripple size
            opacity: 0,
          },
        },
        reveal: {
          "0%": {
            opacity: 0,
          },
          "60%": {
            opacity: 0,
          },
          "70%": {
            opacity: 1,
          },
          "90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        reveal2: {
          "0%": {
            opacity: 0,
          },
          "20%": {
            opacity: 0,
          },
          "25%": {
            opacity: 1,
          },
          "45%": {
            opacity: 1,
          },
          "60%": {
            opacity: 0,
          },
          "100%": {
            opacity: 0,
          },
        },
        reveal3: {
          "0%": {
            opacity: 0,
          },
          "5%": {
            opacity: 1,
          },
          "25%": {
            opacity: 1,
          },
          "35%": {
            opacity: 0,
          },
          "100%": {
            opacity: 0,
          },
        },
        suck: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            top: "40%",
            left: "45%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors, addSvgPatterns],
  corePlugins: {
    opacity: true,
  },
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

function addSvgPatterns({ matchUtilities, theme }: any) {
  matchUtilities(
    {
      "bg-grid": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="56" height="56" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-grid-small": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-dot": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
  );
}
