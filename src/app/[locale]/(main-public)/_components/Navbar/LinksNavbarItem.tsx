"use client";

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Link,
    NavbarItem,
} from "@/src/app/_lib/next-ui";

import { BsChevronDown } from "react-icons/bs";
import type { FC } from "react";
import { NAV_LINKS } from "@/src/app/_lib/frontend-data";
import { useScopedI18n } from "@/src/app/_locales/client";

type Props = {
    linkType: keyof typeof NAV_LINKS;
};

const LinksNavbarItem: FC<Props> = ({ linkType }) => {
    const t = useScopedI18n(`Pages.${linkType}`);

    return (
        <Dropdown radius="sm">
            <NavbarItem>
                <DropdownTrigger>
                    <Button
                        disableRipple
                        endContent={<BsChevronDown />}
                        className="bg-slate-400 bg-transparent p-0 text-xs data-[hover=true]:bg-transparent sm:text-sm md:text-base"
                    >
                        {t("title")}
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                className="w-max text-left"
                itemClasses={{
                    base: "gap-4",
                }}
            >
                {NAV_LINKS[linkType].map(({ translationKey, link }) => (
                    <DropdownItem
                        key={translationKey}
                        href={link}
                        as={Link}
                        className="text-foreground data-[hover=true]:bg-transparent data-[hover=true]:text-primary data-[hover=true]:underline"
                    >
                        {t(`sub-links.${translationKey}.title`)}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default LinksNavbarItem;
