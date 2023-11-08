import { RedirectType, redirect } from "next/navigation";
import type { FC, ReactNode } from "react";

import { getServerAuthSession } from "@/src/server/auth";
import TeacherDrawer from "./_components/TeacherDrawer";

type Props = { children: ReactNode };

const TeacherDashboardLayout: FC<Props> = async ({ children }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "teacher")
    redirect("/login", RedirectType.replace);

  return (
    <>
      <TeacherDrawer />
      {children}
    </>
  );
};

export default TeacherDashboardLayout;
