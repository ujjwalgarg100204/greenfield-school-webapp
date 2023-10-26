"use client";

import { Tab, Tabs } from "@/src/lib/next-ui";
import type { FC, ReactNode } from "react";

type Props = {
  newAdmissionsNotice: ReactNode;
  oldAdmissionsNotice: ReactNode;
};

const NoticeTabs: FC<Props> = ({
  newAdmissionsNotice,
  oldAdmissionsNotice,
}) => {
  return (
    <Tabs variant="solid" defaultSelectedKey="new-admission" color="primary">
      <Tab key="new-admission" title="New Admissions">
        {newAdmissionsNotice}
      </Tab>
      <Tab key="old-admission" title="Old Admissions">
        {oldAdmissionsNotice}
      </Tab>
    </Tabs>
  );
};

export default NoticeTabs;
