/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar-mobile": "url('/src/assets/images/bg-sidebar-mobile.svg')",
        "sidebar-desktop": "url('/src/assets/images/bg-sidebar-desktop.svg')",
      },
      colors: {
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: " hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        marineBlue: "hsl(213, 96%, 18%)",
        publishBlue: "hsl(243, 100%, 62%)",
        pasteBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberryBlue: "hsl(354, 84%, 57%)",
      },
    },
  },
  plugins: [],
};
