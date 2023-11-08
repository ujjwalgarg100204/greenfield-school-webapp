import { RedirectType, redirect } from "next/navigation";
import type { FC, ReactNode } from "react";

import { getServerAuthSession } from "@/src/server/auth";
import StudentDrawer from "./_components/StudentDrawer";

type Props = { children: ReactNode };

const StudentDashboardLayout: FC<Props> = async ({ children }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "student")
    redirect("/login", RedirectType.replace);

  return (
    <>
      <StudentDrawer />
      {children}
    </>
  );
};

export default StudentDashboardLayout;
