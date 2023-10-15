import type { FC } from "react";
import React from "react";
import Footer from "./_components/Footer";
import LinksNavbar from "./_components/Navbar/LinksNavbar";
import MainNavbar from "./_components/Navbar/MainNavbar";

type Props = { children: React.ReactNode };

const MainSiteLayout: FC<Props> = ({ children }) => {
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
