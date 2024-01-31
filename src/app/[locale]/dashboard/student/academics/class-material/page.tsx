import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import DashboardPageInDevelopment from "../../../_components/AdminDashboardPageInDevelopment";

const ClassMaterialPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return <DashboardPageInDevelopment />;
};

export default ClassMaterialPage;
