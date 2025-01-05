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
        revealUp: {
          "0%": { 
            opacity: "0",
            transform: "translateY(15px)",
            filter: "blur(3px)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)"
          }
        },
        glowBg: {
          "0%": { 
            backgroundColor: "rgba(21, 22, 41, 0)",
            backdropFilter: "blur(0px)"
          },
          "100%": { 
            backgroundColor: "rgba(21, 22, 41, 0.8)",
            backdropFilter: "blur(8px)"
          }
        },
        fadeInScale: {
          "0%": { 
            opacity: "0",
            transform: "scale(0.95) translateY(20px)"
          },
          "100%": { 
            opacity: "1",
            transform: "scale(1) translateY(0)"
          }
        },
        moveBackground: {
          "0%": { 
            backgroundPosition: "0 0"
          },
          "100%": { 
            backgroundPosition: "200px 200px"
          }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        slideInLeft: "slideInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        slideInRight: "slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        float: "float 3s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        revealUp: "revealUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        glowBg: "glowBg 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        fadeInScale: "fadeInScale 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        moveBackground: "moveBackground 30s linear infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
