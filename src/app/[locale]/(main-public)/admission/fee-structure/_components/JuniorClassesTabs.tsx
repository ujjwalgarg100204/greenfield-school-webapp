"use client";

import { Tab, Tabs } from "@/src/lib/next-ui";
import type { FC, ReactNode } from "react";

type Props = {
  nurseryToUkg: ReactNode;
  firstToFifth: ReactNode;
  sixthToTenth: ReactNode;
};

const JuniorClassesTabs: FC<Props> = ({
  nurseryToUkg,
  firstToFifth,
  sixthToTenth,
}) => {
  return (
    <Tabs variant="solid" defaultSelectedKey="nursery-ukg" color="primary">
      <Tab key="nursery-ukg" title="Class Nursery - UKG">
        {nurseryToUkg}
      </Tab>
      <Tab key="first-to-fifth" title="Class I - V">
        {firstToFifth}
      </Tab>
      <Tab key="sixth-to-tenth" title="Class VI - X">
        {sixthToTenth}
      </Tab>
    </Tabs>
  );
};

export default JuniorClassesTabs;
