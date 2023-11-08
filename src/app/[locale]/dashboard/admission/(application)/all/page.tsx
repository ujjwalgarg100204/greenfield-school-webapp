import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import DashboardPageInDevelopment from "../../../_components/DashboardPageInDevelopment";

const AllAdmissionApplicationsPage: FC<NextPageProps> = ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);

  return <DashboardPageInDevelopment />;
};

export default AllAdmissionApplicationsPage;
