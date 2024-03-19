"use client";

import { usePathname } from "next/navigation";
import type { FC } from "react";
import { Link, Tab, Tabs } from "~/app/next-ui";

import { type Metadata } from "next";


export const metadata: Metadata = {
    title: "School Transport",
    description:
        "Our school provides best School transport facility. Though our school is in prime locality with well knitted public transport and accessibility, we provide school transportation for easy access and Parents comfort. The School supervises for smooth & hassle-free service. The parent/ guardian should coordinate with the school office regarding the pick-up and drop-off location of the student. All the School buses follow the latest guidelines of transportation rules and are equipped with CCTV cameras & connected electronically to the control room through a GPS tracking system installed in the buses. The Buses are also equipped with first aid boxes & fire extinguishers. A lady attendant accompanies the junior most students in the vehicle for their proper care.",
    keywords: [
        "School transport facility",
        "Prime locality",
        "Public transport",
        "Accessibility",
        "Parents comfort",
        "Supervised transportation",
        "Hassle-free service",
        "Pick-up and drop-off",
        "Transportation rules",
        "CCTV cameras",
        "GPS tracking system",
        "First aid boxes",
        "Fire extinguishers",
        "Lady attendant",
        "Student safety       ",
    ],
};

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
        title: "Bus Routes",
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
