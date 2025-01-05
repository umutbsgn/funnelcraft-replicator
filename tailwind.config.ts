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
      fontFamily: {
        sans: ['-apple-system', 'system-ui', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FFFFFF",
        foreground: "#333333",
        primary: {
          DEFAULT: "#0288D1",
          light: "#E0F7FA",
          lighter: "#B3E5FC",
          dark: "#01579B",
          hover: "#039BE5",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F3F2EF",
          foreground: "#333333",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#666666",
        },
        accent: {
          DEFAULT: "#0277BD",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#333333",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, #FFFFFF 0%, #E0F7FA 100%)',
        'gradient-linear': 'linear-gradient(to right, #E0F7FA 0%, #B3E5FC 100%)',
        'gradient-button': 'linear-gradient(to right, #0277BD 0%, #01579B 100%)',
        'gradient-button-hover': 'linear-gradient(to right, #039BE5 0%, #0288D1 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(179, 229, 252, 0.1), 0 2px 4px -1px rgba(179, 229, 252, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(179, 229, 252, 0.2), 0 4px 6px -2px rgba(179, 229, 252, 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;