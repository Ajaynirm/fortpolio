import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {},
   
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        myDarkTheme: {
          "primary": "#4CAF50",
          "secondary": "#FF5722",
          "accent": "#FFC107",
          "neutral": "#121212", // Your dark background color
          "base-100": "#181818", // Page background
        },
      },
      ["light", "dark"]
      ],
  },
  darkMode: ['selector', '[data-theme="light"]']
}

