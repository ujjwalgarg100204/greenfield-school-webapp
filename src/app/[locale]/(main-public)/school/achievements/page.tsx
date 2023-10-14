"use client";

import { Accordion, AccordionItem } from "@lib/next-ui";

import SectionHeading from "@/components/ui/SectionHeading";
import type { FC } from "react";
import SideNavbar from "../../_components/Navbar/SideNavbar";

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
    <div className="container mx-auto my-12 flex justify-between gap-16 px-6 lg:px-8 xl:px-12 2xl:px-16">
      <section className="w-2/3 max-w-xl flex-grow space-y-6 lg:max-w-3xl">
        <SectionHeading>Our Achievements</SectionHeading>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magnam
          hic eveniet totam accusantium modi iusto nemo dolor, veniam eos
          aspernatur possimus voluptate aperiam laudantium deleniti suscipit
          alias tempore fuga?
        </p>
        <Accordion
          variant="splitted"
          defaultExpandedKeys={[achievementsData[0].title]}
        >
          {achievementsData.map(({ title, content }) => (
            <AccordionItem key={title} title={title}>
              {content}
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <div className="hidden w-1/5 lg:block">
        <SideNavbar
          linkType="school"
          selected={{ translationKey: "achievements" }}
        />
      </div>
    </div>
  );
};

export default AchievementsPage;
