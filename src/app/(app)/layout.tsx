import "./globals.css";

import localFont from "next/font/local";
import { type FC, type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import Providers from "../providers";
import { type Metadata, type Viewport } from "next";

const satoshi = localFont({
    src: [
        { path: "../../../public/fonts/Satoshi-Variable.ttf", style: "normal" },
        {
            path: "../../../public/fonts/Satoshi-VariableItalic.ttf",
            style: "italic",
        },
    ],
    display: "swap",
    variable: "--font-satoshi",
});

export const metadata: Metadata = {
    title: {
        template: "%s | Greenfield School",
        default: "Greenfield",
    },
    description:
        "Greenfield Campus is a vibrant school where curiosity meets education and each and every student is valued. In Our school, we foster a dynamic learning environment that sparks curiosity, encourages critical thinking, and unleashes creativity.",
    generator: "Next.js",
    applicationName: "Greenfield School",
    referrer: "origin-when-cross-origin",
    keywords: [
        "Greenfield International School",
        "Greenfield Campus",
        "Dynamic learning environment",
        "Curiosity-driven education",
        "Critical thinking skills",
        "Creative learning",
        "Sports facilities",
        "Teamwork and sportsmanship",
        "Dedicated management",
        "Nurturing teachers",
        "Intellectual growth",
        "Emotional growth",
        "Leadership development programs",
        "Resilience",
        "Adaptability",
        "Green campus oasis",
        "Talent encouragement culture",
        "Self-discovery",
        "Empowerment",
        "State-level sports exposure",
        "Comprehensive sports programs",
        "Media visibility",
        "Admission open",
        "Exclusive amenities",
        "Outdoor activities",
        "Nature studies",
        "Technologically advanced classrooms",
        "Lush greenery",
        "Prime city location",
        "Academic pioneers",
        "Record-breaking sports performances",
        "Innovative kindergarten engagement",
        "V.C.S.M Matric. Hr. Sec. School",
        "Coimbatore",
        "Tamil Nadu",
    ],
    authors: [
        {
            name: "Ujjwal Garg",
            url: "https://ujjwal-new-portfolio.vercel.app/",
        },
        { name: "Priyansh Kotak" },
    ],
    category: "education",
    metadataBase: new URL("https://greenfieldcampus.com"),
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "light" },
        { media: "(prefers-color-scheme: dark)", color: "dark" },
    ],
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body className={`font-satoshi ${satoshi.variable}`}>
                <Providers>{children}</Providers>
                <Toaster position="top-center" reverseOrder={false} />
            </body>
        </html>
    );
};

export default RootLayout;
