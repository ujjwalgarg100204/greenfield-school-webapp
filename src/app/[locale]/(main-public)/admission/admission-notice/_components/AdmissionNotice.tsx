"use client";

import { Divider } from "@lib/next-ui";
import type { FC } from "react";
import CommerceSubject from "./CommerceSubject";
import HumanitiesSubject from "./HumanitiesSubject";
import Rules from "./Rules";
import ScienceSubject from "./ScienceSubject";

type Props = {
  type: "new" | "old";
};

const AdmissionNotice: FC<Props> = ({ type }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">
        Admission to Class XI for SCIENCE / COMMERCE / HUMANITIES ( For{" "}
        {type === "new" && "Non - "}
        Greenfield International Students )
      </h3>
      <Divider className="my-3" />
      <p className="text-sm font-semibold text-slate-700/80">
        Please go through the Eligibility Criteria and make a careful selection
        of Subject Group. Note that the ADMISSION will be considered on the
        basis of your FIRST CHOICE.
      </p>
      <div className="my-6 space-y-12">
        <ScienceSubject type={type} />
        <CommerceSubject type={type} />
        <HumanitiesSubject type={type} />
      </div>
      <Rules type={type} />
    </div>
  );
};

export default AdmissionNotice;
