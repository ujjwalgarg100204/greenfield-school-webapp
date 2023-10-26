import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@ui/Table";

import ArticleList from "@/src/components/ArticleList";
import type { FC } from "react";

type Props = {
  type: "new" | "old";
};

const ScienceSubject: FC<Props> = ({ type }) => {
  return (
    <section className="space-y-8">
      <h4 className="text-xl font-bold">Science : Group - A, B, C, D & E</h4>
      <Table>
        <TableHeader className="divide-y-1.5">
          <tr>
            <TableHeaderCell rowSpan={2}>Stream</TableHeaderCell>
            <TableHeaderCell rowSpan={2}>Group</TableHeaderCell>
            <TableHeaderCell colSpan={3} className="text-center">
              Eligibility Criteria for Admission
            </TableHeaderCell>
          </tr>
          <tr>
            <TableHeaderCell>Aggregate</TableHeaderCell>
            <TableHeaderCell>Mathematics & Science</TableHeaderCell>
            <TableHeaderCell>Other Subjects</TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell>Science with Maths</TableHeaderCell>
            <TableCell>A, C, D & E</TableCell>
            <TableCell>
              {type === "old" ? (
                "≥ 70%"
              ) : (
                <span>
                  Class IX (Final) & Class X Half Yearly Examination <br /> ≥
                  75%
                </span>
              )}
            </TableCell>
            <TableCell>
              {type === "old" ? "≥ 70% (in each)" : "≥ 75%"}
            </TableCell>
            <TableCell>≥ 40%</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>Science without Maths</TableHeaderCell>
            <TableCell>B</TableCell>
            <TableCell>
              {type === "old" ? (
                "≥ 70%"
              ) : (
                <span>
                  Class IX (Final) & Class X Half Yearly Examination <br /> ≥
                  75%
                </span>
              )}
            </TableCell>
            <TableCell>
              ≥ 65% in Maths <br /> & <br /> ≥ {type === "old" ? "70%" : "75%"}{" "}
              in Science
            </TableCell>
            <TableCell>≥ 40%</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader className="divide-y-1.5">
          <tr>
            <TableHeaderCell>Stream</TableHeaderCell>
            <TableHeaderCell colSpan={5} className="text-center">
              Science
            </TableHeaderCell>
          </tr>
          <tr>
            <TableHeaderCell>Group</TableHeaderCell>
            <TableHeaderCell>A</TableHeaderCell>
            <TableHeaderCell>B</TableHeaderCell>
            <TableHeaderCell>C</TableHeaderCell>
            <TableHeaderCell>D</TableHeaderCell>
            <TableHeaderCell>E</TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell>Subjects Offered</TableHeaderCell>
            <TableCell>
              <ArticleList
                list={[
                  "English Core",
                  "Chemistry",
                  "Physics",
                  "Mathematics",
                  "Computer Science",
                ]}
              />
            </TableCell>
            <TableCell>
              <ArticleList
                list={[
                  "English Core",
                  "Chemistry",
                  "Physics",
                  "Biology",
                  "Physical Education",
                ]}
              />
            </TableCell>
            <TableCell>
              <ArticleList
                list={[
                  "English Core",
                  "Chemistry",
                  "Physics",
                  "Mathematics",
                  "Biology",
                ]}
              />
            </TableCell>
            <TableCell>
              <ArticleList
                list={[
                  "English Core",
                  "Chemistry",
                  "Physics",
                  "Mathematics",
                  "Physical Education",
                ]}
              />
            </TableCell>
            <TableCell>
              <ArticleList
                list={[
                  "English Core",
                  "Chemistry",
                  "Physics",
                  "Mathematics",
                  "Economics",
                ]}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              6<sup>th</sup> Subjects (Optional)
            </TableCell>
            <TableCell>
              Economics, Entrepreneurship, Painting, Psychology, Physical
              Education, Legal Studies
            </TableCell>
            <TableCell>
              Computer Science, Economics, Entrepreneurship, Legal Studies,
              Mathematics, Painting, Psychology
            </TableCell>
            <TableCell>
              Computer Science, Economics, Entrepreneurship, Legal Studies,
              Painting, Psychology, Physical Education
            </TableCell>
            <TableCell>
              Computer Science, Economics, Entrepreneurship, Legal Studies,
              Painting, Psychology
            </TableCell>
            <TableCell>
              Computer Science, Entrepreneurship, Legal Studies, Painting,
              Psychology, Physical Education
            </TableCell>
          </TableRow>
          {type === "new" && (
            <>
              <TableRow>
                <TableHeaderCell>Subjects For Admission Test</TableHeaderCell>
                <TableCell>
                  <ArticleList
                    list={[
                      "Mathematics - 50 Marks",
                      "Physics - 25 Marks",
                      "Chemistry - 25 Marks",
                    ]}
                  />
                </TableCell>
                <TableCell>
                  <ArticleList
                    list={[
                      "Biology - 50 Marks",
                      "Physics - 25 Marks",
                      "Chemistry - 25 Marks",
                    ]}
                  />
                </TableCell>
                <TableCell>
                  <ArticleList
                    list={[
                      "Mathematics - 50 Marks",
                      "Physics - 25 Marks",
                      "Chemistry - 25 Marks",
                      "Biology - 25 Marks",
                    ]}
                  />
                </TableCell>
                <TableCell>
                  <ArticleList
                    list={[
                      "Mathematics - 50 Marks",
                      "Physics - 25 Marks",
                      "Chemistry - 25 Marks",
                    ]}
                  />
                </TableCell>
                <TableCell>
                  <ArticleList
                    list={[
                      "Mathematics - 50 Marks",
                      "Physics - 25 Marks",
                      "Chemistry - 25 Marks",
                      "Economics - 25 Marks",
                    ]}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Duration of Written Test</TableHeaderCell>
                <TableCell>2 Hours</TableCell>
                <TableCell>2 Hours</TableCell>
                <TableCell>2 Hours 30 Minutes</TableCell>
                <TableCell>2 Hours</TableCell>
                <TableCell>2 Hours 30 Minutes</TableCell>
              </TableRow>
            </>
          )}
        </TableBody>
      </Table>
    </section>
  );
};

export default ScienceSubject;
