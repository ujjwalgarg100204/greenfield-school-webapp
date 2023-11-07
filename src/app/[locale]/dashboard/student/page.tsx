import { RedirectType, redirect } from "next/navigation";

import type { FC } from "react";
import { Link } from "@/src/lib/next-ui";
import StudentDrawer from "./_components/StudentDrawer";
import { getServerAuthSession } from "@/src/server/auth";

const StudentDashboardPage: FC = async () => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "student")
    redirect("/login", RedirectType.replace);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="h-10 bg-slate-200">Navbar</header>
      <div className="flex flex-grow">
        <StudentDrawer />
        <main className="grid w-full place-content-center">
          <div className="space-y-4 text-center">
            <h1 className="text-2xl md:text-4xl">
              Welcome {session.user.username} to your dashboard
            </h1>
            <div>
              <p>Your Details as received by client:</p>
              <p>{JSON.stringify(session, null, 2)}</p>
            </div>
            <Link href="/" underline="always">
              Go to Home
            </Link>
          </div>
        </main>
      </div>
      <footer className="h-10 bg-slate-200">Footer</footer>
    </div>
  );
};

export default StudentDashboardPage;
