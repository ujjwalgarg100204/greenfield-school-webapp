import { getServerAuthSession } from "@/src/server/auth";
import { Link } from "@lib/next-ui";
import type { FC } from "react";

const DashboardPageInDevelopment: FC = async () => {
  const session = (await getServerAuthSession())!;

  return (
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
  );
};

export default DashboardPageInDevelopment;
