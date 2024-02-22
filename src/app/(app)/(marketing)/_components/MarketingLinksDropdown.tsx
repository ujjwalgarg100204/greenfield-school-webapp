"use client";

import Link from "next/link";
import { type FC } from "react";
import { BsChevronDown } from "react-icons/bs";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    NavbarItem,
} from "~/app/next-ui";

type Props = {
    title: string;
    links: ReadonlyArray<{ title: string; link: string }>;
};
const MarketingLinksDropdown: FC<Props> = ({ title, links }) => {
    return (
        <Dropdown radius="sm">
            <NavbarItem>
                <DropdownTrigger>
                    <Button
                        disableRipple
                        endContent={<BsChevronDown />}
                        className="bg-slate-400 bg-transparent p-0 text-xs data-[hover=true]:bg-transparent sm:text-sm md:text-base"
                    >
                        {title}
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                className="w-max text-left"
                itemClasses={{
                    base: "gap-4",
                }}
            >
                {links.map(({ title, link }) => (
                    <DropdownItem
                        key={title}
                        href={link}
                        as={Link}
                        className="text-foreground data-[hover=true]:bg-transparent data-[hover=true]:text-primary data-[hover=true]:underline"
                    >
                        {title}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default MarketingLinksDropdown;
