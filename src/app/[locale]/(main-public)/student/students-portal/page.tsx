import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const StudentPortal = (): null => {
  const session = auth();
  if (session !== null) {
    redirect("/dashboard");
  } else redirect("/login");
};

export default StudentPortal;
