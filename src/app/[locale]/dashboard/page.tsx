import { auth } from "@/app/api/auth/[...nextauth]/route";
import type { FC } from "react";

const Dashboard: FC = async () => {
  const session = await auth();
  console.log("session", JSON.stringify(session, null, 2));

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{JSON.stringify(session, null, 2)}</p>
    </div>
  );
};

export default Dashboard;
