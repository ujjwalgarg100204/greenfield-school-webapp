"use client";

import { BiHome, BiUserCircle } from "react-icons/bi";
import { LiaChalkboardTeacherSolid, LiaMoneyBillSolid } from "react-icons/lia";
import { PiExamLight, PiStudentBold, PiUserListBold } from "react-icons/pi";
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
import { RiSettings2Line } from "react-icons/ri";

const drawerItems: DrawerItem[] = [
  {
    title: "Home",
    href: "/dashboard/parent",
    icon: <BiHome className="h-[1.265rem] w-[1.265rem]" />,
  },
  {
    title: "Admission Dashboard",
    href: "/dashboard/admission",
    icon: <PiStudentBold className="h-[1.265rem] w-[1.265rem]" />,
  },
  {
    title: "Academics",
    icon: <TbLamp2 className="h-[1.265rem] w-[1.265rem]" />,
    subItems: [
      {
        title: "Attendance",
        icon: <FaUserClock className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/parent/academics/attendance",
      },
      {
        title: "Timetable",
        icon: <AiOutlineClockCircle className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/parent/academics/timetable",
      },
      {
        title: "Class Material",
        icon: <FiFolder className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/parent/academics/class-material",
      },
      {
        title: "Academic Calendar",
        icon: <BsCalendar2Check className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/parent/academics/academic-calendar",
      },
      {
        title: "Home Work",
        icon: <MdWorkOutline className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/parent/academics/homework",
      },
      {
        title: "Teacher Info",
        icon: (
          <LiaChalkboardTeacherSolid className="h-[1.265rem] w-[1.265rem]" />
        ),
        href: "/dashboard/parent/academics/teacher-info",
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
        href: "/dashboard/parent/exams/schedule",
      },
      {
        title: "Marks",
        icon: <GoNumber className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/parent/exams/marks",
      },
      {
        title: "Report Card",
        icon: <TbReportAnalytics className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/parent/exams/report-card",
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
        href: "/dashboard/parent/money/fees",
      },
      {
        title: "Fines",
        icon: <GrMoney className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/parent/money/fines",
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
        href: "/dashboard/parent/profile/personal-info",
      },
      {
        title: "Settings",
        icon: <RiSettings2Line className="h-[1.265rem] w-[1.265rem]" />,
        href: "/dashboard/parent/profile/settings",
      },
    ],
  },
];

const ParentDrawer: FC = () => {
  return <Drawer items={drawerItems} />;
};

export default ParentDrawer;
