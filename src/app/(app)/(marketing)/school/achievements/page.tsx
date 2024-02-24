import { type FC } from "react";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";
import AchievementsAccordion from "./_components/AchievementsAccordion";

const ACHIEVEMENTS = [
    {
        title: "2020",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magnam hic eveniet totam accusantium modi iusto nemo dolor, veniam eos aspernatur possimus voluptate aperiam laudantium deleniti suscipit alias tempore fuga?",
    },

    {
        title: "2021",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magnam hic eveniet totam accusantium modi iusto nemo dolor, veniam eos aspernatur possimus voluptate aperiam laudantium deleniti suscipit alias tempore fuga?",
    },
    {
        title: "2023",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magnam hic eveniet totam accusantium modi iusto nemo dolor, veniam eos aspernatur possimus voluptate aperiam laudantium deleniti suscipit alias tempore fuga?",
    },
    {
        title: "2024",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magnam hic eveniet totam accusantium modi iusto nemo dolor, veniam eos aspernatur possimus voluptate aperiam laudantium deleniti suscipit alias tempore fuga?",
    },
    {
        title: "2025",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magnam hic eveniet totam accusantium modi iusto nemo dolor, veniam eos aspernatur possimus voluptate aperiam laudantium deleniti suscipit alias tempore fuga?",
    },
];

const AchievementsPage: FC = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="Achievements">
            <H1>Our Achievements</H1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                magnam hic eveniet totam accusantium modi iusto nemo dolor,
                veniam eos aspernatur possimus voluptate aperiam laudantium
                deleniti suscipit alias tempore fuga?
            </p>
            {/*FIXME: put some images similar to infrastructure page*/}
            <p className="text-rose-400">
                FIXME: put some images similar to infrastructure page
            </p>
        </TwoSectionPage>
    );
};

export default AchievementsPage;
