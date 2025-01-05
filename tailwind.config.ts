import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
          DEFAULT: "#9B87F5",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1A1F2C",
          foreground: "#FFFFFF",
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
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0)" },
        },
        glow: {
          "0%": { 
            opacity: "1",
            filter: "drop-shadow(0 0 0 rgba(155, 135, 245, 0))"
          },
          "50%": { 
            opacity: "0.98",
            filter: "drop-shadow(0 0 3px rgba(155, 135, 245, 0.2))"
          },
          "100%": { 
            opacity: "1",
            filter: "drop-shadow(0 0 0 rgba(155, 135, 245, 0))"
          }
        },
        "glow-star": {
          "0%, 100%": { 
            opacity: "0.5",
            transform: "scale(1)",
            filter: "drop-shadow(0 0 2px rgba(155, 135, 245, 0.5))"
          },
          "50%": { 
            opacity: "1",
            transform: "scale(1.2)",
            filter: "drop-shadow(0 0 4px rgba(155, 135, 245, 0.8))"
          }
        },
        "glow-pulse": {
          "0%, 100%": { 
            opacity: "0"
          },
          "50%": { 
            opacity: "1"
          }
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%)"
          },
          "100%": {
            transform: "translateX(100%)"
          }
        },
        "pulse-subtle": {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0.85"
          }
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0.7"
          }
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        slideInLeft: "slideInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        slideInRight: "slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        float: "float 3s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "glow-star": "glow-star 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
