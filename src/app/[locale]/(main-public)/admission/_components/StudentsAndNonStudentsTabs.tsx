"use client";

import { Tab, Tabs } from "@/src/lib/next-ui";
import type { FC, ReactNode } from "react";

type Props = {
  nonGreenfieldStudents: ReactNode;
  greenFieldStudents: ReactNode;
};

const StudentsAndNonStudentsTabs: FC<Props> = ({
  nonGreenfieldStudents,
  greenFieldStudents,
}) => {
  return (
    <Tabs
      variant="solid"
      defaultSelectedKey="non-greenfield-students"
      color="primary"
    >
      <Tab key="non-greenfield-students" title="Non Greenfield Students">
        {nonGreenfieldStudents}
      </Tab>
      <Tab key="greenfield-students" title="Greenfield Students">
        {greenFieldStudents}
      </Tab>
    </Tabs>
  );
};

export default StudentsAndNonStudentsTabs;
