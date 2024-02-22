import { nextui } from "@nextui-org/react";
import { type Config } from "tailwindcss";

export default {
    content: [
        "./src/**/*.tsx",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ["var(--font-satoshi)"],
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        primary: {
                            DEFAULT: "#00752A",
                            400: "#329345",
                            300: "#54B262",
                            200: "#74D27F",
                            100: "#95F39E",
                            50: "#EEFEEE",
                        },
                        secondary: {
                            DEFAULT: "#ffdc83",
                            800: "#cfa54f",
                            900: "#96711b",
                            foreground: "#451a03",
                        },
                    },
                },
            },
        }),
    ],
} satisfies Config;
