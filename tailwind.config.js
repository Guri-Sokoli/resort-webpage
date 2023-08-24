/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "",
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx,vue}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],
    theme: {
        extend: {
            animation: {
                fadeIn: "fadeIn 1s ease-in forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },

            colors: {
                primary: "#64E15B",
                secondary: "#c3eeeb",
                background: "#fbfdfd",
                accent: "#0d514d",
            },
            fontFamily: {
                raleway: "Raleway",
            },
        },
    },
    plugins: [],
};
