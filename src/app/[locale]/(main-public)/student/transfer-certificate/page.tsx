import React, { FC } from "react";

import ArticlePage from "../../_components/ArticlePage";
import { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { setStaticParamsLocale } from "next-international/server";

const SchoolTransferCertificate: FC<NextPageProps> = ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);
  return (
    <ArticlePage
      linkType="student"
      selected={{ translationKey: "certificate" }}
    >
      <SectionHeading>Child's Trancfer certificate</SectionHeading>
      <ul className="list-disc space-y-6">
        <li className="text-justified">
          Transfer Certificat className="list-disc space-y-6"e
        </li>
        <li className="text-justified">
          Transfer Certificat className="list-disc space-y-6"e
        </li>
        <li className="text-justified">Transfer Certificate</li>
      </ul>
    </ArticlePage>
  );
};

export default SchoolTransferCertificate;
