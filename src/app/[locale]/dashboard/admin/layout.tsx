import { RedirectType, redirect } from "next/navigation";

import { getServerAuthSession } from "@/src/server/auth";
import type { LayoutProps } from "@/src/types";
import type { FC } from "react";
import AdminDrawer from "./_components/AdminDrawer";

const AdminDashboardLayout: FC<LayoutProps> = async ({ children }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "admin")
    redirect("/login", RedirectType.replace);

  return (
    <>
      <AdminDrawer />
      {children}
    </>
  );
};

export default AdminDashboardLayout;
