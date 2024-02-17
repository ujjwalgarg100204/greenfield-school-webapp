"use client";

import { Tabs as NextUITabs, Tab } from "@/src/app/_lib/next-ui";
import type { TabItemProps, TabsProps } from "@nextui-org/react";
import type { FC, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

type Props = TabsProps & {
    tabs: ReadonlyArray<{ key: string; title: string; component: ReactNode }>;
    shouldSpanMultipleLinesOnSmallerScreen?: boolean;
    tabProps?: Omit<TabItemProps, "key" | "title">;
};

const SinglePageTabs: FC<Props> = ({
    tabs,
    shouldSpanMultipleLinesOnSmallerScreen,
    classNames,
    tabProps,
    ...props
}) => {
    return (
        <NextUITabs
            variant="solid"
            color="primary"
            classNames={{
                ...classNames,
                tabList: twMerge(
                    classNames?.tabList,
                    shouldSpanMultipleLinesOnSmallerScreen
                        ? "flex-wrap sm:flex-nowrap"
                        : "",
                ),
            }}
            {...props}
        >
            {tabs.map(({ key, title, component }) => (
                <Tab key={key} title={title} {...tabProps}>
                    {component}
                </Tab>
            ))}
        </NextUITabs>
    );
};

export default SinglePageTabs;
