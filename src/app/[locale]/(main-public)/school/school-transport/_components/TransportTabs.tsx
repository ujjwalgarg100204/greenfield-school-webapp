"use client";

import { Link, Tab, Tabs } from "@lib/next-ui";

import { usePathname } from "next/navigation";
import type { FC } from "react";

const tabs = [
    {
        title: "Transport",
        key: "transport",
        href: "/school/school-transport",
    },
    {
        title: "Bus Rules",
        key: "bus-rules",
        href: "/school/school-transport/rules",
    },
    {
        title: "Bus Fees",
        key: "bus-fees",
        href: "/school/school-transport/fees",
    },
    {
        title: "Bus Routes(Tentative)",
        key: "bus-routes",
        href: "/school/school-transport/routes",
    },
] as const;

const getCurrentTab = (path: string) => {
    const currentTab = tabs.find(({ href }) => href === path);
    return currentTab ? currentTab.key : tabs[0].key;
};

const TransportTabs: FC = () => {
    const path = usePathname();
    const selectedKey = getCurrentTab(path);

    return (
        <Tabs
            variant="solid"
            selectedKey={selectedKey}
            color="primary"
            classNames={{
                tabList: "flex-wrap sm:flex-nowrap",
            }}
        >
            {tabs.map(({ title, key, href }) => (
                <Tab key={key} title={title} as={Link} href={href} />
            ))}
        </Tabs>
    );
};

export default TransportTabs;
