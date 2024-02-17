"use client";

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@/src/app/_lib/next-ui";
import { MdNotifications, MdNotificationsActive } from "react-icons/md";

import type { Notification } from "@/src/types";
import type { FC } from "react";
import NotificationCard from "./NotificationCard";

const sampleNotifications: Notification[] = [
    {
        title: "Sample Notification",
        description: "This is a sample notification",
        isUrgent: false,
    },
    {
        title: "Sample Notification",
        description: "This is a sample notification",
        isUrgent: false,
    },
    {
        title: "Sample Notification",
        description: "This is a sample notification",
        isUrgent: true,
    },
];

const notificationUnRead = Math.random() < 0.5;

const NotificationButton: FC = () => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button isIconOnly color="primary" variant="light">
                    {notificationUnRead ? (
                        <MdNotificationsActive className="h-6 w-6" />
                    ) : (
                        <MdNotifications className="h-6 w-6" />
                    )}
                </Button>
            </DropdownTrigger>
            <DropdownMenu emptyContent={<p>🥳 All caught up 🥳!</p>}>
                {sampleNotifications.map(notification => (
                    <DropdownItem
                        key={notification.title}
                        className="bg-white p-0 data-[hover=true]:bg-transparent data-[selectable=true]:focus:bg-transparent data-[selectable=true]:focus:text-default-foreground"
                    >
                        <NotificationCard {...notification} />
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default NotificationButton;
