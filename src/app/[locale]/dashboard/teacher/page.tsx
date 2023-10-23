import { RedirectType, redirect } from "next/navigation";

import { getServerAuthSession } from "@/src/server/auth";
import type { FC } from "react";

const TeacherDashboardPage: FC = async () => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "teacher")
    redirect("/login", RedirectType.replace);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl md:text-4xl">
          Welcome {session.user.username} to your dashboard
        </h1>
        <div>
          <p>Your Details as received by client:</p>
          <p>{JSON.stringify(session, null, 2)}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboardPage;
