"use client";

import { Chip } from "@lib/next-ui";
import type { FC } from "react";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";

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
    <ul>
      {categories.map((category) => (
        <Chip
          as={NextLink}
          radius="sm"
          color={category === paramCategory ? "primary" : "default"}
          href={`/school/in-the-news?category=${category}`}
          key={category}
          className="hover:bg-primary lg:text-medium m-1 transition hover:text-slate-100 lg:h-8 lg:px-2"
        >
          {category}
        </Chip>
      ))}
    </ul>
  );
};

export default NewsFilter;
