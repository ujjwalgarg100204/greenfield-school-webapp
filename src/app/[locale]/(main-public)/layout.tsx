import type { FC } from "react";
import Footer from "./_components/Footer";
import LinksNavbar from "./_components/Navbar/LinksNavbar";
import MainNavbar from "./_components/Navbar/MainNavbar";
import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { useRouter } from "next/router";

type Props = { children: React.ReactNode };

const MainSiteLayout: FC<Props> = async ({ children }) => {
  return (
    <div>
      <MainNavbar />
      <LinksNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainSiteLayout;
