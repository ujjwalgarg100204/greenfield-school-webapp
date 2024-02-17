import ArticleHeading from "@/src/app/_components/ArticleHeading";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import NewsletterAccordion from "./_components/NewsletterAccordion";

const NewsletterPage: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage
            linkType="school"
            selected={{ translationKey: "news-letter" }}
        >
            <ArticleHeading>Newsletter</ArticleHeading>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                magnam hic eveniet totam accusantium modi iusto nemo dolor,
                veniam eos aspernatur possimus voluptate aperiam laudantium
                deleniti suscipit alias tempore fuga?
            </p>
            <NewsletterAccordion />
        </ArticlePage>
    );
};

export default NewsletterPage;
