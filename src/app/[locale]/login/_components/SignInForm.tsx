"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

const SignInForm = () => {
  const router = useRouter();
  const { status } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("Signing in .....");

    try {
      const signInRsponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!signInRsponse || signInRsponse.ok !== true) {
        setMessage("Invalid credentials");
      } else {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }

    setMessage(message);
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.refresh();
      router.push("/");
    }
  }, [status]);

  return (
    <div className="flex flex-col gap-4 bg-gray-400 p-4">
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Sign in</button>

      <p>{message}</p>
    </div>
  );
};

export default SignInForm;
