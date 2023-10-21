import SectionHeading from "@/components/ui/SectionHeading";
import { type NextPageProps } from "@/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const SchoolTransferCertificate: FC<NextPageProps> = ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);
  return (
    <ArticlePage
      linkType="student"
      selected={{ translationKey: "certificate" }}
    >
      <SectionHeading>Students Trancfer certificate</SectionHeading>
      <ul className="list-disc space-y-6">
        <li className="text-justified">Transfer Certificat</li>
        <li className="text-justified">Transfer Certificat</li>
        <li className="text-justified">Transfer Certificate</li>
      </ul>
    </ArticlePage>
  );
};

export default SchoolTransferCertificate;
