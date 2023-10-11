"use client";

import { NAV_LINKS, NAV_LINK_TYPES } from "@/lib/frontend-data";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  linkType: (typeof NAV_LINK_TYPES)[number];
};
const LinksNavbarItem = ({ linkType }: Props) => {
  const t = useTranslations(`Pages.${linkType}`);

  return (
    <Dropdown radius="sm">
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            endContent={<BsChevronDown />}
            className="bg-transparent p-0 text-xs data-[hover=true]:bg-transparent sm:text-sm md:text-base"
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
            className="data-[hover=true]:bg-transparent data-[hover=true]:text-primary data-[hover=true]:underline"
          >
            {t(`sub-links.${translationKey}.title`)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LinksNavbarItem;
