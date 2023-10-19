import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const Page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl">
          Welcome {session?.user?.email} to your dashboard
        </h1>
      </div>
    </div>
  );
};

export default Page;
