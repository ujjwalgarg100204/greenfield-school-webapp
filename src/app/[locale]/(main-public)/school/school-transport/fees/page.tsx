import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import FeeTable from "./_components/FeeTable";

const SchoolTransportFeesPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const currYear = new Date().getFullYear();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Academic Session {currYear} – {currYear + 1}
      </h2>
      <div className="space-y-12">
        <p>
          This gives an idea of various important bus points and same can change
          without any further explanations. Even, the bus routes may differ for
          Junior School and High School and the exact bus pickup & drop point
          shall be determined and informed only after the beginning of the
          Academic Session {currYear}-{currYear + 1}. Bus charges (subject to
          change due to fuel price, etc.), are mentioned here in below:
        </p>
        <FeeTable />
        <p>
          One time administrative Charges of Rs. 500/- shall have to be paid in
          addition to bus charges at the beginning of each academic year. Fees
          will be charged for all 12 months. A parent who withdraws the
          transport facility before the vacations and rejoins after the
          vacations, may not be given the transport facility. The amount is
          payable along with the school fees on a quarterly basis.
        </p>
      </div>
    </div>
  );
};

export default SchoolTransportFeesPage;
