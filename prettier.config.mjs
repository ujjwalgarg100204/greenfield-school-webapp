/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
    tabWidth: 4,
    arrowParens: "avoid",
    endOfLine: "lf",
    useTabs: false,
    singleQuote: false,
    plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
