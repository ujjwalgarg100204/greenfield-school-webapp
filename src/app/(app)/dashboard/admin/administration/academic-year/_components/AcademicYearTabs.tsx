"use client";

import { usePathname } from "next/navigation";
import type { FC } from "react";
import { Link, Tab, Tabs } from "~/app/next-ui";

const TABS = [
    {
        title: "All Years",
        key: "all-years",
        href: "/dashboard/admin/administration/academic-year",
    },
    {
        title: "Create",
        key: "create",
        href: "/dashboard/admin/administration/academic-year/create",
    },
    {
        title: "Update",
        key: "update",
        href: "/dashboard/admin/administration/academic-year/update",
    },
    {
        title: "Delete",
        key: "delete",
        href: "/dashboard/admin/administration/academic-year/delete",
    },
] as const;

const AcademicYearTabs: FC = () => {
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

export default AcademicYearTabs;
