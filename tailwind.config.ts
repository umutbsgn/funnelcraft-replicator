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
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { 
            opacity: "1",
            filter: "drop-shadow(0 0 0 rgba(155, 135, 245, 0))"
          },
          "50%": { 
            opacity: "0.8",
            filter: "drop-shadow(0 0 10px rgba(155, 135, 245, 0.5))"
          },
          "100%": { 
            opacity: "1",
            filter: "drop-shadow(0 0 0 rgba(155, 135, 245, 0))"
          }
        },
        revealUp: {
          "0%": { 
            opacity: "0",
            transform: "translateY(30px)",
            filter: "blur(8px)"
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
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        revealUp: "revealUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        glowBg: "glowBg 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;