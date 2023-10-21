import ArticlePage from "../../_components/ArticlePage";
import { FC } from "react";
import { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";

const StudentCounsil: FC<NextPageProps> = async ({ params: { locale } }) => {
  return (
    <ArticlePage linkType="student" selected={{ translationKey: "council" }}>
      <SectionHeading>Student Counsil</SectionHeading>
      <ul className=" list-disc space-y-6">
        <li className=" text-justify"></li>
        <li className=" text-justify"></li>
        <li className=" text-justify"></li>
      </ul>
    </ArticlePage>
  );
};

export default StudentCounsil;
