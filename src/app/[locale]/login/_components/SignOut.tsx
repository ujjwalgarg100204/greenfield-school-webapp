"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

const SignOut = (): null => {
  useEffect(() => {
    const signOutChecking = async (): Promise<undefined> => {
      await signOut({
        callbackUrl: "/",
        redirect: true,
      });
    };

    void signOutChecking();
  }, []);

  return null;
};

export default SignOut;
