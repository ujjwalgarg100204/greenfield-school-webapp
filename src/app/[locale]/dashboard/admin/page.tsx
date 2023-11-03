import { RedirectType, redirect } from "next/navigation";

import { getServerAuthSession } from "@/src/server/auth";
import { Link } from "@lib/next-ui";
import NextLink from "next/link";

const ParentDashboardPage = async (): Promise<JSX.Element> => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "admin")
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
        <Link href="/" as={NextLink} underline="always">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ParentDashboardPage;
