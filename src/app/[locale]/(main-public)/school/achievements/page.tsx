import ArticleHeading from "@components/ArticleHeading";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import AchievementsAccordion from "./_components/AchievementsAccordion";

const AchievementsPage: FC = () => {
    return (
        <ArticlePage
            linkType="school"
            selected={{ translationKey: "achievements" }}
        >
            <ArticleHeading>Our Achievements</ArticleHeading>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                magnam hic eveniet totam accusantium modi iusto nemo dolor,
                veniam eos aspernatur possimus voluptate aperiam laudantium
                deleniti suscipit alias tempore fuga?
            </p>
            <AchievementsAccordion />
        </ArticlePage>
    );
};

export default AchievementsPage;
