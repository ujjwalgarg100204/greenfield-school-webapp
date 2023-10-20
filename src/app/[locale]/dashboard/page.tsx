import type { FC } from "react";
import { auth } from "@/app/api/auth/[...nextauth]/route";

const Dashboard: FC = async () => {
  const session = await auth();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl md:text-4xl">
          Welcome {session?.user.username} to your dashboard
        </h1>
        <div>
          <p>Your Details as received by client:</p>
          <p>{JSON.stringify(session, null, 2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
