/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        primaryBg: "linear-gradient(135deg, #1e0533, #110a1f)",
        gradient1: "linear-gradient(45deg, #726bff, #57b6fe)",
        gradient2: "linear-gradient(45deg, #8a2be2, #4b0082)",
      },
      colors: {
        accentColor: "#8a2be2",
        textColor: "#ffffff",
        textSecondary: "#b3b3b3",
        yellow: "rgba(255,255,0,1)",
      },
    },
  },
  plugins: [],
};
