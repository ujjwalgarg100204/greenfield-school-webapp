"use client";

import { Chip, Link } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { type FC } from "react";
import NewsCard from "./NewsCard";

const DEMO_NEWS = [
    {
        image: {
            src: "/images/school-pages/in-the-news/news-1.jpg",
            alt: "Webb Senior, Junior Visual Art Students Earn National Art Honor Society Membership",
        },
        categories: ["Academic News", "Student Achievements", "Student News"],
        heading:
            "Webb Senior, Junior Visual Art Students Earn National Art Honor Society Membership",
        date: "Oct 18 2023",
    },
    {
        image: {
            src: "/images/school-pages/in-the-news/news-2.jpg",
            alt: "Twenty-Five Spartan Seniors Named to Mu Alpha Theta Honor Society for Excellence in Math",
        },
        categories: ["Academic News", "Student Achievements", "Student News"],
        heading:
            "Twenty-Five Spartan Seniors Named to Mu Alpha Theta Honor Society for Excellence in Math",
        date: "Oct 18 2023",
    },
    {
        image: {
            src: "/images/school-pages/in-the-news/news-3.jpg",
            alt: "Fifteen Spartan Seniors Recognized in National Merit Scholarship Program",
        },
        categories: ["Academic News", "Student Achievements", "Student News"],
        heading:
            "Fifteen Spartan Seniors Recognized in National Merit Scholarship Program",
        date: "Sep 26 2023",
    },
    {
        image: {
            src: "/images/school-pages/in-the-news/news-4.jpg",
            alt: "Webb Students Selected to National Achievers Honor Society",
        },
        categories: [
            "Academic News",
            "Alumni News",
            "Student Achievements",
            "Student News",
        ],
        heading: "Webb Students Selected to National Achievers Honor Society",
        date: "Sep 19 2023",
    },
    {
        image: {
            src: "/images/school-pages/in-the-news/news-5.jpg",
            alt: "Webb’s Amelia Tharp Named a Scholastic Art & Writing Awards National Medalist",
        },
        categories: ["Academic News", "Student Achievements", "Student News"],
        heading:
            "Webb’s Amelia Tharp Named a Scholastic Art & Writing Awards National Medalist",
        date: "Sep 5 2023",
    },
    {
        image: {
            src: "/images/school-pages/in-the-news/news-6.jpg",
            alt: "College Board Awards AP Scholar Praise to Over 100 Spartan Students",
        },
        categories: ["Academic News", "Student Achievements", "Student News"],
        heading:
            "College Board Awards AP Scholar Praise to Over 100 Spartan Students",
        date: "Aug 24 2023",
    },
    {
        image: {
            src: "/images/school-pages/in-the-news/news-7.jpg",
            alt: "Convocation 2023 Celebrates New Beginnings, Highlights Webb’s Spirit of Community, Connection, Care",
        },
        categories: ["Academic News", "School Events", "Student News"],
        heading:
            "Convocation 2023 Celebrates New Beginnings, Highlights Webb’s Spirit of Community, Connection, Care",
        date: "Aug 22 2023",
    },
    {
        image: {
            src: "/images/school-pages/in-the-news/news-8.jpg",
            alt: "Spartan French Students Merit Medals, Earn National, State Rankings on Le Grand Concours",
        },
        categories: ["Academic News", "Student Achievements", "Student News"],
        heading:
            "Spartan French Students Merit Medals, Earn National, State Rankings on Le Grand Concours",
        date: "Jun 30 2023",
    },
];

const NEWS_CATEGORIES = [
    "All",
    "Academic News",
    "Alumni News",
    "Athletics",
    "Faculty/Staff Achievements",
    "Faculty/Staff Awards",
    "School Events",
    "Student Achievements",
    "Student News",
] as const;

const NewsSection: FC = () => {
    const params = useSearchParams();
    const newsCategory = params.get("category") ?? "All";
    const filteredNews = DEMO_NEWS.filter(({ categories }) =>
        newsCategory === "All" ? true : categories.includes(newsCategory),
    );

    return (
        <section className="space-y-8">
            <menu role="list">
                {NEWS_CATEGORIES.map(category => (
                    <Chip
                        as={Link}
                        radius="sm"
                        color={
                            category === newsCategory ? "primary" : "default"
                        }
                        href={`/school/in-the-news?category=${category}`}
                        key={category}
                        className="m-1 transition hover:bg-primary hover:text-slate-100 lg:h-8 lg:px-2 lg:text-medium"
                    >
                        {category}
                    </Chip>
                ))}
            </menu>
            {filteredNews.length === 0 ? (
                <p className="text-lg font-semibold text-danger-600">
                    Oops, no news find for this filter
                </p>
            ) : (
                <ul className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
                    {filteredNews.map(newsItem => (
                        <NewsCard key={newsItem.heading} {...newsItem} />
                    ))}
                </ul>
            )}
        </section>
    );
};

export default NewsSection;
