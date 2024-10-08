import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "735px",
        tablet: "834px",
        desktop: "1024px",
      },

      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(2.2)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeInDelayed: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        zoomIn: "zoomIn 1.2s ease-out forwards",
        fadeInDelayed: "fadeInDelayed .6s ease-in-out .6s forwards", // 1.5초 지연 후 1초 동안 애니메이션 실행
      },

      willChange: {
        'transform-opacity': 'transform, opacity',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.will-change-transform-opacity': {
          willChange: 'transform, opacity',
        },
      });
    },
  ],
};
export default config;
