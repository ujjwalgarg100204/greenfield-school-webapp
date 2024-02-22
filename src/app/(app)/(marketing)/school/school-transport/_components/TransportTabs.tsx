"use client";

import { usePathname } from "next/navigation";
import type { FC } from "react";
import { Link, Tab, Tabs } from "~/app/next-ui";

const TABS = [
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

const TransportTabs: FC = () => {
    const path = usePathname();
    const selectedKey =
        TABS.find(({ href }) => href === path)?.key ?? TABS[0].key;

    return (
        <Tabs
            variant="solid"
            selectedKey={selectedKey}
            color="primary"
            classNames={{
                tabList: "flex-wrap sm:flex-nowrap",
            }}
        >
            {TABS.map(({ title, key, href }) => (
                <Tab key={key} title={title} as={Link} href={href} />
            ))}
        </Tabs>
    );
};

export default TransportTabs;
