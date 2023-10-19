"use client";

import { useEffect } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserAuthenticated = () => {
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
