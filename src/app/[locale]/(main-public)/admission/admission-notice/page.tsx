import { Button, ButtonGroup } from "@lib/next-ui";

import ArticleHeading from "@/src/components/ArticleHeading";
import ArticleList from "@/src/components/ArticleList";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import NextLink from "next/link";
import type { FC } from "react";
import { FiExternalLink } from "react-icons/fi";
import ArticlePage from "../../_components/ArticlePage";
import SinglePageTabs from "../../_components/SinglePageTabs";
import AdmissionNotice from "./_components/AdmissionNotice";

const admissionNoticeList = [
  "Age criteria should be strictly adhered to. If the child’s age does not match the age criteria of the class you cannot proceed further. Please check the age criteria provided by us for selection of class.",
  "Registration does not imply admission, which is subject to assessment procedure and availability of seats.",
  "Application must be complete and information mentioned in the Registration Form should be true. In case of any discrepancy, management holds the right to cancel the Registration Form as well as the admission of the child.",
  "Fees once paid at the time of admission is non refundable, except the Caution Money (Refundable) in case of withdrawal.",
  "The Management reserves the right to have the last word in all matters related to admission.",
  "To apply for Online Admission of Class Nursery to Class – I Click Here",
];

const admissionNoticesTabs = [
  {
    key: "non-greenfield-students",
    title: "Non-Greenfield Students",
    component: <AdmissionNotice type="new" />,
  },
  {
    key: "greenfield-students",
    title: "Greenfield Students",
    component: <AdmissionNotice type="old" />,
  },
] as const;

const AdmissionNoticePage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="admission" selected={{ translationKey: "notice" }}>
      <ArticleHeading>Admission Notice</ArticleHeading>
      <ArticleList list={admissionNoticeList} />
      <div className="pt-4">
        <SinglePageTabs
          tabs={admissionNoticesTabs}
          defaultSelectedKey="non-greenfield-students"
        />
      </div>
      <section>
        <ButtonGroup color="primary">
          <Button
            as={NextLink}
            href="/admission/fee-structure"
            endContent={<FiExternalLink />}
          >
            Fee Structure
          </Button>
          <Button
            as={NextLink}
            href="/admission/portal"
            endContent={<FiExternalLink />}
          >
            Apply <span className="hidden md:block">Online</span>
          </Button>
          <Button
            as={NextLink}
            href="/school/contact-us"
            endContent={<FiExternalLink />}
          >
            <span className="hidden md:block">Admission</span>
            Enquiry
          </Button>
        </ButtonGroup>
      </section>
    </ArticlePage>
  );
};

export default AdmissionNoticePage;
