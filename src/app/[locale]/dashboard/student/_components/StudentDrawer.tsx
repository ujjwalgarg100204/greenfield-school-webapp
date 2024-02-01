"use client";

import { BiHome, BiUserCircle } from "react-icons/bi";
import { LiaChalkboardTeacherSolid, LiaMoneyBillSolid } from "react-icons/lia";
import { PiExamLight, PiUserListBold } from "react-icons/pi";
import { TbLamp2, TbReportAnalytics } from "react-icons/tb";

import type { DrawerItem } from "@/src/app/_components/Drawer";
import Drawer from "@/src/app/_components/Drawer";
import type { FC } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar2Check } from "react-icons/bs";
import { FaUserClock } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GoNumber } from "react-icons/go";
import { GrMoney } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { RiSettings2Line } from "react-icons/ri";

const drawerItems: DrawerItem[] = [
    {
        title: "Home",
        href: "/dashboard/student",
        icon: <BiHome className="h-[1.265rem] w-[1.265rem]" />,
    },
    {
        title: "Academics",
        icon: <TbLamp2 className="h-[1.265rem] w-[1.265rem]" />,
        subItems: [
            {
                title: "Attendance",
                icon: <FaUserClock className="h-[1.265rem] w-[1.265rem]" />,
                href: "/dashboard/student/academics/attendance",
            },
            {
                title: "Timetable",
                icon: (
                    <AiOutlineClockCircle className="h-[1.265rem] w-[1.265rem]" />
                ),
                href: "/dashboard/student/academics/timetable",
            },
            {
                title: "Class Material",
                icon: <FiFolder className="h-[1.265rem] w-[1.265rem]" />,
                href: "/dashboard/student/academics/class-material",
            },
            {
                title: "Academic Calendar",
                icon: (
                    <BsCalendar2Check className="h-[1.265rem] w-[1.265rem]" />
                ),
                href: "/dashboard/student/academics/academic-calendar",
            },
            {
                title: "Home Work",
                icon: <MdWorkOutline className="h-[1.265rem] w-[1.265rem]" />,
                href: "/dashboard/student/academics/homework",
            },
            {
                title: "Teacher Info",
                icon: (
                    <LiaChalkboardTeacherSolid className="h-[1.265rem] w-[1.265rem]" />
                ),
                href: "/dashboard/student/academics/teacher-info",
            },
        ],
    },
    {
        title: "Exams",
        icon: <PiExamLight className="h-[1.265rem] w-[1.265rem]" />,
        subItems: [
            {
                title: "Schedule",
                icon: (
                    <AiOutlineClockCircle className="h-[1.265rem] w-[1.265rem]" />
                ),
                href: "/dashboard/student/exams/schedule",
            },
            {
                title: "Marks",
                icon: <GoNumber className="h-[1.265rem] w-[1.265rem]" />,
                href: "/dashboard/student/exams/marks",
            },
            {
                title: "Report Card",
                icon: (
                    <TbReportAnalytics className="h-[1.265rem] w-[1.265rem]" />
                ),
                href: "/dashboard/student/exams/report-card",
            },
        ],
    },
    {
        title: "Money",
        icon: <LiaMoneyBillSolid className="h-[1.265rem] w-[1.265rem]" />,
        subItems: [
            {
                title: "Fees",
                icon: <GiTakeMyMoney className="h-[1.265rem] w-[1.265rem]" />,
                href: "/dashboard/student/money/fees",
            },
            {
                title: "Fines",
                icon: <GrMoney className="h-[1.265rem] w-[1.265rem]" />,
                href: "/dashboard/student/money/fines",
            },
        ],
    },
    {
        title: "Profile",
        icon: <BiUserCircle className="h-[1.265rem] w-[1.265rem]" />,
        subItems: [
            {
                title: "Personal Info",
                icon: <PiUserListBold className="h-[1.265rem] w-[1.265rem]" />,
                href: "/dashboard/student/profile/personal-info",
            },
            {
                title: "Settings",
                icon: <RiSettings2Line className="h-[1.265rem] w-[1.265rem]" />,
                href: "/dashboard/student/profile/settings",
            },
        ],
    },
];

const StudentDrawer: FC = () => {
    return <Drawer items={drawerItems} />;
};

export default StudentDrawer;
