import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const ParentDashboard = async (): Promise<JSX.Element> => {
  const session = await auth();
  if (session === null || session?.user.role !== "parent") redirect("/login");

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

export default ParentDashboard;
