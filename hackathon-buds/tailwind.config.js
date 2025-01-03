/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': '#1b1b1b',    // Very Dark Gray for the main background
        'primary-text': '#f0f0f0',          // Light Gray for readable text against the dark background
        'accent-color-1': '#53b6f8',        // Cool Blue for links and buttons
        'accent-color-2': '#e74c3c',        // Vibrant Red for call-to-action elements
        'secondary-background': '#2c2c2c',  // Darker Gray for content sections
        'secondary-text': '#b0b0b0',        // Medium Gray for secondary text
        'border-color': '#444444',          // Dark Gray for borders
        'hover-color': '#2980b9',           // Slightly brighter blue for hover effects
      },
    },
  },
  plugins: [],
}
