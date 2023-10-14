import AchievementsAccordion from "./_components/AchievementsAccordion";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const achievementsData = [
  {
    title: "2020",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus officiis architecto, incidunt nam, neque laudantium consequuntur fugiat doloremque laborum, eligendi quibusdam accusantium excepturi consequatur! Sapiente necessitatibus eveniet recusandae sit.",
  },
  {
    title: "2021",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus officiis architecto, incidunt nam, neque laudantium consequuntur fugiat doloremque laborum, eligendi quibusdam accusantium excepturi consequatur! Sapiente necessitatibus eveniet recusandae sit.",
  },
  {
    title: "2022",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus officiis architecto, incidunt nam, neque laudantium consequuntur fugiat doloremque laborum, eligendi quibusdam accusantium excepturi consequatur! Sapiente necessitatibus eveniet recusandae sit.",
  },
  {
    title: "2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus officiis architecto, incidunt nam, neque laudantium consequuntur fugiat doloremque laborum, eligendi quibusdam accusantium excepturi consequatur! Sapiente necessitatibus eveniet recusandae sit.",
  },
];

const AchievementsPage: FC = () => {
  return (
    <ArticlePage
      linkType="school"
      selected={{ translationKey: "achievements" }}
    >
      <SectionHeading>Our Achievements</SectionHeading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magnam
        hic eveniet totam accusantium modi iusto nemo dolor, veniam eos
        aspernatur possimus voluptate aperiam laudantium deleniti suscipit alias
        tempore fuga?
      </p>
      <AchievementsAccordion achievements={achievementsData} />
    </ArticlePage>
  );
};

export default AchievementsPage;
