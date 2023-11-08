import { RedirectType, redirect } from "next/navigation";
import type { FC, ReactNode } from "react";

import { getServerAuthSession } from "@/src/server/auth";
import AdmissionDrawer from "./_components/AdmissionDrawer";

type Props = { children: ReactNode };

const AdmissionDashboardLayout: FC<Props> = async ({ children }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "parent")
    redirect("/login", RedirectType.replace);

  return (
    <>
      <AdmissionDrawer />
      {children}
    </>
  );
};

export default AdmissionDashboardLayout;
