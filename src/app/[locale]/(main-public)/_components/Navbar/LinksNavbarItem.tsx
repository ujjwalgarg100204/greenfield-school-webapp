"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";

import { BsChevronDown } from "react-icons/bs";
import { LINKS } from "./LinksNavbar";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NAV_LINKS = {
  school: {
    about: "/about-us",
    mission: "/mission-and-vision",
    infrastructure: "/infrastructure",
    achievements: "/achievements",
    gallery: "/gallery",
    news: "/in-the-news",
    transport: "/school-transport",
    pledges: "/our-pledges",
    "news-letter": "/newsletter",
    admissions: "/admissions",
    contact: "/contact-us",
  },
  admission: {
    notice: "/admission-notice",
    prospectus: "/prospectus",
    procedure: "/admission-procedure",
    instructions: "/general-instructions-for-admission",
    age: "/age-criteria",
    fee: "/fee-structure",
    orientation: "/orientation",
    registration: "/online-registration",
  },
  academic: {
    result: "/result-analysis",
    syllabus: "/syllabus",
    "book-list": "/book-list",
    holiday: "/holiday-list",
    "block-holidays": "/block-holidays",
    fees: "/fees-structure",
  },
  student: {
    portal: "/students-portal",
    council: "/student-council",
    activities: "/co-curricular-activities",
    timings: "/school-timings",
    certificate: "/transfer-certificate",
    prayer: "/school-prayer",
    trips: "/trips-and-excursions",
    cc: "/code-of-conduct",
    "s-rules": "/special-rules",
    "l-rules": "/library-rules",
    "c-rules": "/canteen-rules",
    "+ve-behavior-manage": "/positive-behavior-management",
    cce: "/continuous-and-comprehensive-evaluation",
  },
  parent: {
    dispersal: "/student-dispersal",
    uniform: "/school-uniform",
    hours: "/visiting-hours",
    guidelines: "/general-guidelines",
    absence: "/absence-leave-late-arrival-in-school",
    infirmary: "/school-infirmary",
    report: "/progress-report",
    fee: "/pay-fee-online",
    login: "/parents-login",
  },
} as const;

const LinksNavbarItem = ({ link }: { link: (typeof LINKS)[number] }) => {
  const t = useTranslations(`Root.links-navbar.${link}`);
  const subLinks = useTranslations(`Root.links-navbar.${link}.sub-links`);

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
        {Object.entries(NAV_LINKS[link]).map(([key, subLink]) => (
          <DropdownItem
            key={subLink}
            href={subLink}
            as={Link}
            className="data-[hover=true]:bg-transparent data-[hover=true]:text-primary data-[hover=true]:underline"
          >
            {/* @ts-ignore next line */}
            {subLinks(`${key}`)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LinksNavbarItem;
