import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#282439",      // Your custom primary color
          "secondary": "#534f66",    // Your custom secondary color
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
