import { RedirectType, redirect } from "next/navigation";

import { getServerAuthSession } from "@/src/server/auth";
import { Link } from "@lib/next-ui";
import AdminDrawer from "./_components/AdminDrawer";

const ParentDashboardPage = async (): Promise<JSX.Element> => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "admin")
    redirect("/login", RedirectType.replace);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="h-10 bg-slate-200">Navbar</header>
      <div className="flex flex-grow">
        <AdminDrawer />
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

export default ParentDashboardPage;
