import type { FC, ReactNode } from "react";

import ArticleHeading from "@/src/components/ArticleHeading";
import ArticlePage from "../../_components/ArticlePage";
import TransportTabs from "./_components/TransportTabs";

type Props = { children: ReactNode };
const SchoolTransportPageLayout: FC<Props> = ({ children }) => {
  return (
    <ArticlePage linkType="school" selected={{ translationKey: "transport" }}>
      <ArticleHeading>School Transport</ArticleHeading>
      <TransportTabs />
      {children}
    </ArticlePage>
  );
};

export default SchoolTransportPageLayout;
