"use client";

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Link,
    User,
} from "~/app/next-ui";

import type { FC } from "react";
import { type User as TUser } from "~/server/model/User";

type Props = {
    user: Pick<TUser, "role" | "username">;
    logoutHandler: () => Promise<void>;
};

const AccountDropdown: FC<Props> = ({ user, logoutHandler }) => {
    const logoutBtnClickHandler = async () => {
        try {
            await logoutHandler();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <User
                    as="button"
                    avatarProps={{
                        isBordered: true,
                        color: "primary",
                        name: user.username,
                    }}
                    className="transition-transform"
                    description={`${user.role}`}
                    name={`Mr. ${user.username}`}
                    classNames={{
                        name: "font-semibold capitalize",
                        description:
                            "uppercase tracking-wider text-[0.7rem] leading-4",
                    }}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{user.username}</p>
                </DropdownItem>
                <DropdownItem
                    key="settings"
                    as={Link}
                    href={`/dashboard/${user.role}`}
                >
                    Dashboard
                </DropdownItem>
                <DropdownItem key="team_settings">My Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                    Help & Feedback
                </DropdownItem>
                <DropdownItem
                    key="logout"
                    color="danger"
                    className="text-danger"
                    onClick={logoutBtnClickHandler}
                    description="Log out of your account"
                >
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default AccountDropdown;
