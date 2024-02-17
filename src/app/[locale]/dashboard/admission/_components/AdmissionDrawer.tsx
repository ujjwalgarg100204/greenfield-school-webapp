"use client";

import { BiHome, BiSolidPencil } from "react-icons/bi";
import { FaQuestion, FaQuoteLeft } from "react-icons/fa";
import { HiMiniDocumentDuplicate, HiMiniDocumentPlus } from "react-icons/hi2";
import { RiParentFill } from "react-icons/ri";

import type { DrawerItem } from "@/src/app/_components/Drawer";
import Drawer from "@/src/app/_components/Drawer";
import type { FC } from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const drawerItems: DrawerItem[] = [
    {
        title: "Home",
        href: "/dashboard/admission",
        icon: <BiHome className="h-[1.265rem] w-[1.265rem]" />,
    },
    {
        title: "New Admission",
        icon: <HiMiniDocumentPlus className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/admission/new",
    },
    {
        title: "Track Status",
        icon: <FaQuestion className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/admission/track-status",
    },
    {
        title: "Edit Application",
        icon: <BiSolidPencil className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/admission/edit",
    },
    {
        title: "All Applications",
        icon: <HiMiniDocumentDuplicate className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/admission/all",
    },
    {
        title: "Parent Dashboard",
        icon: <RiParentFill className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/parent",
    },
    {
        title: "FAQs",
        icon: <FaQuoteLeft className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/admission/faqs",
    },
    {
        title: "Contact Us",
        icon: (
            <BsFillTelephoneForwardFill className="h-[1.265rem] w-[1.265rem]" />
        ),
        href: "/dashboard/admission/contact-us",
    },
];

const AdmissionDrawer: FC = () => {
    return <Drawer items={drawerItems} />;
};

export default AdmissionDrawer;
