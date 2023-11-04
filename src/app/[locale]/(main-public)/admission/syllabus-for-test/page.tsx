import { Card, CardBody, Link } from "@lib/next-ui";

import ArticleHeading from "@/src/components/ArticleHeading";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";

export const classesInSchool = [
  "i",
  "ii",
  "iii",
  "iv",
  "v",
  "vi",
  "vii",
  "viii",
  "ix",
  "x",
  "xi",
] as const;

const SyllabusForAdmissionTestPage: FC<NextPageProps> = ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="admission" selected={{ translationKey: "syllabus" }}>
      <ArticleHeading>Syllabus for Assessment</ArticleHeading>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {classesInSchool.map(c => (
          <Card
            key={c}
            isPressable
            shadow="sm"
            as={Link}
            href={`/admission/syllabus-for-test/${c}`}
          >
            <CardBody className="grid aspect-square h-[140px] place-content-center text-xl font-bold text-primary-400">
              Class {c.toUpperCase()}
            </CardBody>
          </Card>
        ))}
      </ul>
    </ArticlePage>
  );
};

export default SyllabusForAdmissionTestPage;
