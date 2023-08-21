/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "",
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx,vue}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],
    theme: {
        extend: {
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
