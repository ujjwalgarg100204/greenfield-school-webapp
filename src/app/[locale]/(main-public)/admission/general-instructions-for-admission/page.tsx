import ArticleHeading from "@/src/components/ArticleHeading";
import ArticleList from "@/src/components/ArticleList";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";

const instructions = [
  "Parents/Guardians should upload only the Birth Certificate issued by Municipal Corporation or the DOB shown in the Passport and Aadhar card. Please do not upload Birth Certificates issued by the Nursing Home/Hospital.",
  "Please upload the latest Passport sized coloured photographs of the student, parents or guardian (if applicable) on the designated place of the Application Form.",
  "Take the printouts of the Admit Card on clean white A4 sheet paper.",
  "The date of assessment /observation/interaction/interview will be mentioned in the Admit Card and to be mailed shortly after submitting the Application Form.",
  "During assessment/observation/interaction/Interview Admit Card (printout taken by parents) has to be produced.",
  "There will be an assessment on the intimated date for students seeking admission to Class I onwards. During the evaluation, the presence of both parents will be mandatory.",
  "For admission to Nursery & LKG, the teacher only observes and interacts with the child and the parents, and both parents must accompany the child.",
  "For admission to UKG, there will be an observation and interaction for assessment. Both parents must accompany the child.",
  "No request for any change of dates for assessment/observation/interaction/Interview will be entertained.",
] as const;

const GeneralInstructionsForAdmissionPage: FC<NextPageProps> = ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage
      linkType="admission"
      selected={{ translationKey: "instructions" }}
    >
      <ArticleHeading>General Instructions For Admission Page</ArticleHeading>
      <ArticleList list={instructions} containerClassName="space-y-2.5" />
    </ArticlePage>
  );
};

export default GeneralInstructionsForAdmissionPage;
