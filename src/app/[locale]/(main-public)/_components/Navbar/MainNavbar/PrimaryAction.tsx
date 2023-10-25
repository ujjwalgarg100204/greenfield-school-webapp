"use client";

import { Button, CircularProgress } from "@lib/next-ui";

import { useScopedI18n } from "@/src/locales/client";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import type { FC } from "react";
import AccountMenu from "./AccountMenu";

const PrimaryAction: FC = () => {
  const { status } = useSession();
  const t = useScopedI18n("Root.main-navbar");

  if (status === "loading")
    return <CircularProgress aria-label="Loading..." color="primary" />;
  else if (status === "authenticated") return <AccountMenu />;
  else
    return (
      <>
        <Button
          as={NextLink}
          href="/login"
          color="primary"
          variant="solid"
          className="font-semibold text-white sm:hidden"
          radius="sm"
          size="sm"
        >
          {t("login")}
        </Button>

        <Button
          as={NextLink}
          href="/login"
          color="primary"
          variant="solid"
          className="hidden font-semibold text-white sm:flex"
          radius="sm"
        >
          {t("login")}
        </Button>
      </>
    );
};

export default PrimaryAction;
