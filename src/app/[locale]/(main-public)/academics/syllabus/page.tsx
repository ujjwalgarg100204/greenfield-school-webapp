import ArticleHeading from "@/src/app/_components/ArticleHeading";
import DownloadablePdfCard from "@/src/app/_components/DownloadablePdfCard";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const syllabus = [
    { title: "Class I Syllabus", link: "/syllabus/class-i.pdf" },
    { title: "Class II Syllabus", link: "/syllabus/class-ii.pdf" },
    { title: "Class III Syllabus", link: "/syllabus/class-iii.pdf" },
    { title: "Class IV Syllabus", link: "/syllabus/class-iv.pdf" },
    { title: "Class V Syllabus", link: "/syllabus/class-v.pdf" },
    { title: "Class VI Syllabus", link: "/syllabus/class-vi.pdf" },
    { title: "Class VII Syllabus", link: "/syllabus/class-vii.pdf" },
    { title: "Class VIII Syllabus", link: "/syllabus/class-viii.pdf" },
    { title: "Class IX Syllabus", link: "/syllabus/class-ix.pdf" },
    { title: "Class X Syllabus", link: "/syllabus/class-x.pdf" },
    { title: "Class XI Syllabus", link: "/syllabus/class-xi.pdf" },
    { title: "Class XII Syllabus", link: "/syllabus/class-xii.pdf" },
] as const;

const SyllabusPage: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage
            linkType="academic"
            selected={{ translationKey: "syllabus" }}
        >
            <ArticleHeading>Class vise Syllabus</ArticleHeading>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {syllabus.map(s => (
                    <DownloadablePdfCard key={s.title} {...s} />
                ))}
            </ul>
        </ArticlePage>
    );
};

export default SyllabusPage;
