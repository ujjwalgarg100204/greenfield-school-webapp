"use client";

import LoadingSpinner from "@/src/components/ui/LoadingSpinner";
import { useScopedI18n } from "@/src/locales/client";
import { Button } from "@lib/next-ui";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import type { FC } from "react";
import AccountMenu from "./AccountMenu";

const PrimaryAction: FC = () => {
  const { status, data } = useSession();
  const t = useScopedI18n("Root.main-navbar");

  if (status === "loading") return <LoadingSpinner />;

  // if  logged in, show account menu
  if (data) return <AccountMenu />;

  //if user is not logged in then show login button
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
