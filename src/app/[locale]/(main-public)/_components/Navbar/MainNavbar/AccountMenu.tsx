"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@lib/next-ui";
import { signOut, useSession } from "next-auth/react";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import type { FC } from "react";

const AccountMenu: FC = () => {
  const router = useRouter();
  const { status, data } = useSession();

  const signOutHandler = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <Dropdown placement="bottom-end" isDisabled={status === "loading"}>
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          color="primary"
          name={data?.user.username}
          className="transition-transform"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{data?.user.username}</p>
        </DropdownItem>
        <DropdownItem
          key="settings"
          as={NextLink}
          href={`/dashboard/${data?.user.role}`}
        >
          Dashboard
        </DropdownItem>
        <DropdownItem key="team_settings">My Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          className="text-danger"
          onClick={signOutHandler}
          description="Log out of your account"
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AccountMenu;
