import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Yomogi",
          "Zen Kurenaido",
          "M PLUS Rounded 1c",
          "Yusei Magic",
          "DotGothic16",
          "Tsukimi Rounded",
          ...fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
} satisfies Config
