"use client";

import { useSearchParams } from "next/navigation";
import type { FC } from "react";
import NewsCard from "./NewsCard";
import NewsFilter from "./NewsFilter";

const news = [
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

const NewsSection: FC = () => {
  const params = useSearchParams();
  const currCategory = params.get("category") ?? "All";
  const newsToShow = news.filter(({ categories }) =>
    currCategory === "All" ? true : categories.includes(currCategory),
  );

  return (
    <section className="space-y-8">
      <NewsFilter />
      {newsToShow.length === 0 ? (
        <p className="text-danger-600 text-lg font-semibold">
          Oops, no news find for this filter
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
          {newsToShow.map((newsItem) => (
            <NewsCard key={newsItem.heading} {...newsItem} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default NewsSection;
