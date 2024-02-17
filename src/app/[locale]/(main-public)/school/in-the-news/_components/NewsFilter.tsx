"use client";

import { Chip, Link } from "@/src/app/_lib/next-ui";

import { useSearchParams } from "next/navigation";
import type { FC } from "react";

const categories = [
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

const NewsFilter: FC = () => {
    const params = useSearchParams();
    const paramCategory = params.get("category") ?? "All";

    return (
        <menu role="list">
            {categories.map(category => (
                <Chip
                    as={Link}
                    radius="sm"
                    color={category === paramCategory ? "primary" : "default"}
                    href={`/school/in-the-news?category=${category}`}
                    key={category}
                    className="m-1 transition hover:bg-primary hover:text-slate-100 lg:h-8 lg:px-2 lg:text-medium"
                >
                    {category}
                </Chip>
            ))}
        </menu>
    );
};

export default NewsFilter;
