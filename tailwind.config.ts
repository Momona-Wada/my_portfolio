import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "deep-pink": "#b0767c",
        "soft-pink": "#dfb1b4",   // 中間ピンク
        "warm-beige": "#ebddd7",  // 中間ベージュ
        "light-beige": "#fcf9f6"  // 薄いベージュ（ほぼ白）
      },
    },
  },
  plugins: [],
} satisfies Config;
