"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const UserAuthenticated = (): null => {
  const { status } = useSession();

  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      router.refresh();
      router.push("dashboard/student");
    }
  }, [status]);
  return null;
};

export default UserAuthenticated;
