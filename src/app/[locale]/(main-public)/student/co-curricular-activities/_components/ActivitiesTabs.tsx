"use client";

import { Tab, Tabs } from "@/src/lib/next-ui";
import type { FC, ReactNode } from "react";

type Props = {
  nurseryToLowerKGActivities: ReactNode;
  upperKgActivities: ReactNode;
  firstToTenth: ReactNode;
  eleventhToTwelfth: ReactNode;
};

const ActivitiesTabs: FC<Props> = ({
  nurseryToLowerKGActivities,
  upperKgActivities,
  firstToTenth,
  eleventhToTwelfth,
}) => {
  return (
    <Tabs
      variant="solid"
      defaultSelectedKey="nursery-to-lower-kg-activities"
      color="primary"
      classNames={{
        tabList: "flex-wrap sm:flex-nowrap",
      }}
    >
      <Tab
        key="nursery-to-lower-kg-activities"
        title="Class Nursery - Lower KG"
      >
        {nurseryToLowerKGActivities}
      </Tab>
      <Tab key="upper-kg-activities" title="Class UKG">
        {upperKgActivities}
      </Tab>
      <Tab key="first-to-tenth" title="Class I - X">
        {firstToTenth}
      </Tab>
      <Tab key="eleventh-to-twelfth" title="Class XI - XII">
        {eleventhToTwelfth}
      </Tab>
    </Tabs>
  );
};

export default ActivitiesTabs;
