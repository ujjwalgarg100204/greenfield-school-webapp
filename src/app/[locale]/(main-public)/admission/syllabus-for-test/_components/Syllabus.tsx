import ArticleList from "@/src/components/ArticleList";
import type { FC } from "react";

type Props = {
  syllabus: Record<string, string[]>;
};

const Syllabus: FC<Props> = ({ syllabus }) => {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {Object.entries(syllabus).map(([subject, s]) => (
        <div key={subject} className="space-y-3">
          <h3 className="text-lg font-semibold capitalize">{subject}</h3>
          <ArticleList list={s} />
        </div>
      ))}
    </section>
  );
};

export default Syllabus;
