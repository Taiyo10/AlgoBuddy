export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: { DEFAULT: "hsl(var(--background))" },
        foreground: { DEFAULT: "hsl(var(--foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))" },
        secondary: { DEFAULT: "hsl(var(--secondary))" },
        muted: { DEFAULT: "hsl(var(--muted))" },
        accent: { DEFAULT: "hsl(var(--accent))" },
        fontcolour: { DEFAULT: "hsl(var(--fontcolour))" },
      },
      fontFamily: {
        rubikmono: ['"Rubik Mono One"', 'sans-serif'], // ✅ add this line
      },
    },
  },
  plugins: [],
};
