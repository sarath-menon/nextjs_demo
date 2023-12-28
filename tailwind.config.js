/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // figma colours
        "brand-primary purple/Light": "#e6f0ff",
        "brand-primary purple/Light :hover": "#dae9ff",
        "brand-primary purple/Light :active": "#b2d1ff",
        "brand-primary purple/Normal": "#0569ff",
        "brand-primary purple/Normal :hover": "#055fe6",
        "brand-primary purple/Normal :active": "#0454cc",
        "brand-primary purple/Dark": "#044fbf",
        "brand-primary purple/Dark :hover": "#033f99",
        "brand-primary purple/Dark :active": "#022f73",
        "brand-primary purple/Darker": "#022559",
        "brand-primary purple/primary purple-50": "#e6e6e8",
        "brand-primary purple/primary purple-100": "#b1b0b6",
        "brand-primary purple/primary purple-200": "#8b8a93",
        "brand-primary purple/primary purple-300": "#555462",
        "brand-primary purple/primary purple-400": "#353343",
        "brand-primary purple/primary purple-500": "#020014",
        "brand-primary purple/primary purple-600": "#020012",
        "brand-primary purple/primary purple-700": "#01000e",
        "brand-primary purple/primary purple-800": "#01000b",
        "brand-primary purple/primary purple-900": "#010008",
        "brand-washed Blue/Light": "#f0f8ff",
        "brand-washed Blue/Light :hover": "#e9f5ff",
        "brand-washed Blue/Light :active": "#d1e9ff",
        "brand-washed Blue/Normal": "#69b9ff",
        "brand-washed Blue/Normal :hover": "#5fa7e6",
        "brand-washed Blue/Normal :active": "#5494cc",
        "brand-washed Blue/Dark": "#4f8bbf",
        "brand-washed Blue/Dark :hover": "#3f6f99",
        "brand-washed Blue/Dark :active": "#2f5373",
        "brand-washed Blue/Darker": "#254159",
        "brand-washed purple/washed purple-50": "#f8f7ff",
        "brand-washed purple/washed purple-100": "#e8e7ff",
        "brand-washed purple/washed purple-200": "#dddcff",
        "brand-washed purple/washed purple-300": "#cecbff",
        "brand-washed purple/washed purple-400": "#c5c1ff",
        "brand-washed purple/washed purple-500": "#b6b2ff",
        "brand-washed purple/washed purple-600": "#a6a2e8",
        "brand-washed purple/washed purple-700": "#817eb5",
        "brand-washed purple/washed purple-800": "#64628c",
        "brand-washed purple/washed purple-900": "#4c4b6b",
        "brand-washed purple/Light": "#f8f7ff",
        "brand-washed purple/Light :hover": "#f4f3ff",
        "brand-washed purple/Light :active": "#e8e7ff",
        "brand-washed purple/Normal": "#b6b2ff",
        "brand-washed purple/Normal :hover": "#a4a0e6",
        "brand-washed purple/Normal :active": "#928ecc",
        "brand-washed purple/Dark": "#8986bf",
        "brand-washed purple/Dark :hover": "#6d6b99",
        "brand-washed purple/Dark :active": "#525073",
        "brand-washed purple/Darker": "#403e59",
        "brand-washed purpleGreen/Light": "#f0f8ff",
        "brand-washed purpleGreen/Light :hover": "#e9f5ff",
        "brand-washed purpleGreen/Light :active": "#d1e9ff",
        "brand-washed purpleGreen/Normal": "#69b9ff",
        "brand-washed purpleGreen/Normal :hover": "#5fa7e6",
        "brand-washed purpleGreen/Normal :active": "#5494cc",
        "brand-washed purpleGreen/Dark": "#4f8bbf",
        "brand-washed purpleGreen/Dark :hover": "#3f6f99",
        "brand-washed purpleGreen/Dark :active": "#2f5373",
        "brand-washed purpleGreen/Darker": "#254159",
        "brand-Neutrals/neutrals-1": "#ffffff",
        "brand-Neutrals/neutrals-2": "#fcfcfd",
        "brand-Neutrals/neutrals-3": "#f5f5f6",
        "brand-Neutrals/neutrals-4": "#f0f0f1",
        "brand-Neutrals/neutrals-5": "#d9d9dc",
        "brand-Neutrals/neutrals-6": "#c0bfc4",
        "brand-Neutrals/neutrals-7": "#8d8c95",
        "brand-Neutrals/neutrals-8": "#5b5966",
        "brand-Neutrals/neutrals-9": "#464553",
        "brand-Neutrals/neutrals-10": "#282637",
        "brand-Neutrals/neutrals-11": "#201f30",
        "brand-Neutrals/neutrals-12": "#161427",
        "brand-Neutrals/neutrals-13": "#020014",
        "brand/brand-washed-purple": "#b5b2ff",
        "brand/brand-washed-blue": "#68b9ff",
        "brand/brand-primary-purple": "#7000ff",
        "brand/brand-primary-blue": "#0469ff",
        "brand/brand-dark": "#030014"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}