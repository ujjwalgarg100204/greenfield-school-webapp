import { RedirectType, redirect } from "next/navigation";
import type { FC, ReactNode } from "react";

import { getServerAuthSession } from "@/src/server/auth";
import ParentDrawer from "./_components/ParentDrawer";

type Props = { children: ReactNode };

const ParentDashboardLayout: FC<Props> = async ({ children }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "parent")
    redirect("/login", RedirectType.replace);

  return (
    <>
      <ParentDrawer />
      {children}
    </>
  );
};

export default ParentDashboardLayout;
