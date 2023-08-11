/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
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
