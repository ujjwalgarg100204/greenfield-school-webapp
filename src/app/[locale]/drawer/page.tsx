"use client";

import { BiHome, BiUserCircle } from "react-icons/bi";
import { LiaChalkboardTeacherSolid, LiaMoneyBillSolid } from "react-icons/lia";
import { PiExamLight, PiUserListBold } from "react-icons/pi";
import { TbLamp2, TbReportAnalytics } from "react-icons/tb";

import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar2Check } from "react-icons/bs";
import Drawer from "@/src/components/Drawer";
import type { DrawerItem } from "@/src/components/Drawer";
import type { FC } from "react";
import { FaUserClock } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GoNumber } from "react-icons/go";
import { GrMoney } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import type { NextPageProps } from "@/src/types";
import { RiSettings2Line } from "react-icons/ri";

const drawerItems: DrawerItem[] = [
  {
    title: "Home",
    href: "/drawer",
    icon: <BiHome className="h-[1.265rem] w-[1.265rem]" />,
  },
  {
    title: "Academics",
    icon: <TbLamp2 className="h-[1.265rem] w-[1.265rem]" />,
    subItems: [
      {
        title: "Attendance",
        icon: <FaUserClock className="h-[1.265rem] w-[1.265rem]" />,
        href: "/drawer/academics/attendance",
      },
      {
        title: "Timetable",
        icon: <AiOutlineClockCircle className="h-[1.265rem] w-[1.265rem]" />,
        href: "/drawer/academics/timetable",
      },
      {
        title: "Class Material",
        icon: <FiFolder className="h-[1.265rem] w-[1.265rem]" />,
        href: "/drawer/academics/class-material",
      },
      {
        title: "Academic Calendar",
        icon: <BsCalendar2Check className="h-[1.265rem] w-[1.265rem]" />,
        href: "/drawer/academics/academic-calendar",
      },
      {
        title: "Home Work",
        icon: <MdWorkOutline className="h-[1.265rem] w-[1.265rem]" />,
        href: "/drawer/academics/homework",
      },
      {
        title: "Teacher Info",
        icon: (
          <LiaChalkboardTeacherSolid className="h-[1.265rem] w-[1.265rem]" />
        ),
        href: "/drawer/academics/teacher-info",
      },
    ],
  },
  {
    title: "Exams",
    icon: <PiExamLight className="h-[1.265rem] w-[1.265rem]" />,
    subItems: [
      {
        title: "Schedule",
        icon: <AiOutlineClockCircle className="h-[1.265rem] w-[1.265rem]" />,
        href: "/drawer/exams/schedule",
      },
      {
        title: "Marks",
        icon: <GoNumber className="h-[1.265rem] w-[1.265rem]" />,
        href: "/drawer/exams/marks",
      },
      {
        title: "Report Card",
        icon: <TbReportAnalytics className="h-[1.265rem] w-[1.265rem]" />,
        href: "/drawer/exams/report-card",
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
        href: "/drawer/money/fees",
      },
      {
        title: "Fines",
        icon: <GrMoney className="h-[1.265rem] w-[1.265rem]" />,
        href: "/drawer/money/fines",
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
        href: "/drawer/profile/personal-info",
      },
      {
        title: "Settings",
        icon: <RiSettings2Line className="h-[1.265rem] w-[1.265rem]" />,
        href: "/drawer/profile/settings",
      },
    ],
  },
];

const DrawerTestingPage: FC<NextPageProps> = ({ params: { locale } }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="h-20 bg-slate-500">Navbar</header>
      <div className="flex flex-grow">
        <Drawer items={drawerItems} />
        <main className="w-full bg-rose-300">Main Content</main>
      </div>
      <footer className="h-20 bg-slate-500">Footer</footer>
    </div>
  );
};

export default DrawerTestingPage;
