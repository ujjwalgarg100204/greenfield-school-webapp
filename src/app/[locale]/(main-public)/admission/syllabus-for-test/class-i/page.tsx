import ArticleHeading from "@/src/components/ArticleHeading";
import type { NextPageProps } from "@/src/types";
import type { FC } from "react";
import ArticlePage from "../../../_components/ArticlePage";
import Syllabus from "../_components/Syllabus";

const syllabus = {
  english: [
    "Writing a few lines on normal daily routine of a child like 'My School', 'My Pet', 'My Self', etc. Picture Comprehension, Make Sentences",
    "Rhyming words, concept of 'in', 'on', 'under', 'behind', 'near', one/many, (with 's' only) opposite concept of 'a', 'an', action words, naming words, this/that, is/are, these/those, describing words, unscramble the letters to make a word (3 & 4 letter words only - Sight words and Phonics)",
  ],
  mathematics: [
    "Counting and writing numbers from 1 to 100. After number (1- 100), Before numbers (100-1), In between numbers (1-100)",
    "Number names 1 to 100, Greater than and lesser than (1-100), Single digit addition and subtraction. Count and write, Shapes (Flat Shapes), Ascending Decsending order, Expansion and Mental sums",
  ],
};

const ClassISyllabusPage: FC<NextPageProps> = ({ params: { locale } }) => {
  // setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="admission" selected={{ translationKey: "syllabus" }}>
      <ArticleHeading>Class I Syllabus</ArticleHeading>
      <Syllabus syllabus={syllabus} />
    </ArticlePage>
  );
};

export default ClassISyllabusPage;
