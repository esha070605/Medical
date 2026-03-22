import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          '700': '#162040',
          '800': '#0F1F3D',
          '900': '#0A1628'
        },
        cyan: {
          '400': '#00D4FF',
          '500': '#0094CC'
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)'
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'system-ui'
        ],
        mono: [
          'var(--font-mono)',
          'monospace'
        ]
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      animation: {
        'pulse-cyan': 'pulse-cyan 2s ease-in-out infinite',
        'slide-down': 'slide-down 0.3s ease-out'
      },
      keyframes: {
        'pulse-cyan': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(0, 212, 255, 0)'
          },
          '50%': {
            boxShadow: '0 0 0 8px rgba(0, 212, 255, 0.15)'
          }
        },
        'slide-down': {
          from: {
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
