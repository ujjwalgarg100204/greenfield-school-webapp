import type { FC, ReactNode } from "react";

import type { Props as SideNavbarProps } from "./Navbar/SideNavbar";
import SideNavbar from "./Navbar/SideNavbar";

type Props = { children: ReactNode } & SideNavbarProps;

const ArticlePage: FC<Props> = ({ children, ...sideNavbarProps }) => {
  return (
    <div className="container mx-auto my-12 flex justify-between gap-16 px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="w-2/3 flex-grow">
        <section className="max-w-xl space-y-6 lg:max-w-4xl">
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
