import ArticleHeading from "@/src/app/_components/ArticleHeading";
import ArticleList from "@/src/app/_components/ArticleList";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import SinglePageTabs from "../../_components/SinglePageTabs";

const activities = {
    "nursery-to-lower-kg": [
        "Colouring Activity",
        "Rhyme Time",
        "Enacting Activity / Puppet Show",
        "Health And Hygiene Activity",
        "Van Mahotsav",
        "Rakhi Making",
        "Clay Modelling",
        "Painting(Sand/Veg /Thread/Wax etc)",
        "Dance / Music",
        "Our Great National Leaders – A Show",
        "Dramatisation of stories/Fairy Tale",
        "Festival Celebration",
        "Anti Cracker Campaign and Diya decoration",
        "Fancy Dress",
        "Show and Tell",
        "Handwriting Activity",
        "No Fire Cooking",
        "Tearing & Pasting (Paper & Pencil Savings)",
        "Origami",
        "Wrapping Paper Making (Marble Printing)",
        "Guided TV watching",
        "Excursion",
    ],

    "upper-kg": [
        "Fancy Dress",
        "Origami/Cutting and pasting",
        "Rakhi Making",
        "Diya Decoration/Candle Decoration",
        "Card Making",
        "Anti Cracker Campaign",
        "Show and Tell",
        "Rhyme Time/Elocution",
        "Dance/ Music",
        "No fire cooking",
        "Vegetable Printing",
        "Best out of Waste",
        "Races",
        "Doll/Mask/Cap Making",
        "Skit (With Moral Value)",
        "Flower Decoration",
        "Painting – Sand, Vegetable, Thread, Wax etc.",
        "News Paper Activity",
        "Public Speaking/Spell In",
        "Book Reading",
        "Quiz",
        "Vanmahotsav/Save Our Environment",
        "Drawing and Colouring",
        "Festival Celebration",
        "Healthy Eating/Health and Hygiene",
        "Guided Television Watching",
        "Puppet Show",
        "Excursions",
    ],

    "i-x": [
        "Public Speaking",
        "Book reading sessions",
        "Dramatics",
        "Elocution",
        "Art& Craft",
        "Handicraft",
        "No Fire Cooking",
        "Creative writing",
        "Collage Making",
        "Quiz",
        "Social Activities/SUPW",
        "Painting",
        "Music / Dance",
        "Rangoli",
        "Debate",
        "MUN",
    ],

    "xi-xii": [
        "Chemistry Quiz",
        "Physics Quiz",
        "Biology Quiz",
        "Economics Quiz",
        "Mathematics Quiz",
        "English Debate & Elocution",
        "Computer science Quiz",
        "Business Quiz",
        "Collage Making",
        "Movie Shows",
        "Chrysalis-Inter-School fest",
        "Interact club Activities",
        "Eco club Activities",
        "Business Fest",
        "CareerCounselling",
        "MUN",
        "Chemistrt talk by resource persons",
        "Inter-School IR Conference",
        "Panel Discussion",
        "Psychology Seminar",
        "Inter-School Maths and Tech Fest(Logique)",
    ],
};

const activitiesTabs = [
    {
        key: "nursery-to-lower-kg-activities",
        title: "Class Nursery - Lower KG",
        component: <ArticleList list={activities["nursery-to-lower-kg"]} />,
    },
    {
        key: "upper-kg-activities",
        title: "Class UKG",
        component: <ArticleList list={activities["upper-kg"]} />,
    },
    {
        key: "first-to-tenth",
        title: "Class I - X",
        component: <ArticleList list={activities["i-x"]} />,
    },
    {
        key: "eleventh-to-twelfth",
        title: "Class XI - XII",
        component: <ArticleList list={activities["xi-xii"]} />,
    },
] as const;

const CoCurricularActivities: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage
            linkType="student"
            selected={{ translationKey: "activities" }}
        >
            <ArticleHeading>Schools Co-curricular Activities</ArticleHeading>
            <SinglePageTabs
                tabs={activitiesTabs}
                shouldSpanMultipleLinesOnSmallerScreen
                defaultSelectedKey="nursery-to-lower-kg-activities"
            />
        </ArticlePage>
    );
};

export default CoCurricularActivities;
