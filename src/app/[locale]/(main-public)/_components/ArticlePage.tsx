import type { FC, ReactNode } from "react";

import SideNavbar from "./Navbar/SideNavbar";
import type { Props as SideNavbarProps } from "./Navbar/SideNavbar";

type Props = { children: ReactNode } & SideNavbarProps;

const ArticlePage: FC<Props> = ({ children, ...sideNavbarProps }) => {
  return (
    <div className="container mx-auto my-12 flex justify-between gap-16 px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="w-2/3 flex-grow space-y-12">
        <section className="max-w-xl space-y-6 lg:max-w-3xl">
          {children}
        </section>
      </div>

      <div className="hidden w-1/3 lg:block">
        <SideNavbar {...sideNavbarProps} />
      </div>
    </div>
  );
};

export default ArticlePage;
