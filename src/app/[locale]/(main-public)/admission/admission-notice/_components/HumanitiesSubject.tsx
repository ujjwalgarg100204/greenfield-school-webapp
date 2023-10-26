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
  type: "old" | "new";
};

const HumanitiesSubject: FC<Props> = ({ type }) => {
  return (
    <>
      <section className="space-y-8">
        <h4 className="text-xl font-bold">
          Humanities (With Mathematics) : Group - M
        </h4>
        <Table>
          <TableHeader className="divide-y-1.5">
            <tr>
              <TableHeaderCell rowSpan={2}>Stream</TableHeaderCell>
              <TableHeaderCell rowSpan={2}>Group</TableHeaderCell>
              <TableHeaderCell colSpan={4} className="text-center">
                Eligibility Criteria For Admission
              </TableHeaderCell>
            </tr>
            <tr>
              <TableHeaderCell>Aggregate</TableHeaderCell>
              <TableHeaderCell>Mathematics</TableHeaderCell>
              {type === "old" && <TableHeaderCell>Science</TableHeaderCell>}
              <TableHeaderCell>Other Subjects</TableHeaderCell>
            </tr>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHeaderCell>
                Humanities <br /> (With Maths)
              </TableHeaderCell>
              <TableCell>M</TableCell>
              <TableCell>
                {type === "new" ? (
                  <span>
                    Class IX (Final) & Class X* Half Yearly Examination ≥ 65%
                  </span>
                ) : (
                  "≥ 60%"
                )}
              </TableCell>
              <TableCell>≥ 65%</TableCell>
              {type === "old" && <TableCell>≥ 40%</TableCell>}
              <TableCell>≥ {type === "new" ? "40%" : "50%"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section className="space-y-8">
        <h4 className="text-xl font-bold">
          Humanities (Without Maths) : Group - N
        </h4>
        <Table>
          <TableHeader className="divide-y-1.5">
            <tr>
              <TableHeaderCell rowSpan={2}>Stream</TableHeaderCell>
              <TableHeaderCell rowSpan={2}>Group</TableHeaderCell>
              <TableHeaderCell colSpan={4} className="text-center">
                Eligibility Criteria For Admission
              </TableHeaderCell>
            </tr>
            <tr>
              <TableHeaderCell>Aggregate</TableHeaderCell>
              {type === "old" && (
                <>
                  <TableHeaderCell>Mathematics</TableHeaderCell>
                  <TableHeaderCell>Science</TableHeaderCell>
                </>
              )}
              <TableHeaderCell>Other Subjects</TableHeaderCell>
            </tr>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHeaderCell>
                Humanities <br /> (Without Maths)
              </TableHeaderCell>
              <TableCell>N</TableCell>

              {type === "old" ? (
                <>
                  <TableCell>≥ 60%</TableCell>
                  <TableCell>≥ 40%</TableCell>
                  <TableCell>≥ 40%</TableCell>
                  <TableCell>≥ 50%</TableCell>
                </>
              ) : (
                <>
                  <TableCell>
                    Class IX (Final) & Class X Half Yearly Examination ≥ 65%
                  </TableCell>
                  <TableCell>≥ 40%</TableCell>
                </>
              )}
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHeader className="divide-y-1.5">
            <tr>
              <TableHeaderCell>Stream</TableHeaderCell>
              <TableHeaderCell colSpan={2} className="text-center">
                HUMANITIES
              </TableHeaderCell>
            </tr>
            <tr>
              <TableHeaderCell>Group</TableHeaderCell>
              <TableHeaderCell>M</TableHeaderCell>
              <TableHeaderCell>N</TableHeaderCell>
            </tr>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHeaderCell>Subjects Offered</TableHeaderCell>
              <TableCell>
                <ArticleList
                  list={[
                    "English Core",
                    "Political Science",
                    "Economics",
                    "Geography",
                    "Mathematics",
                  ]}
                />
              </TableCell>
              <TableCell>
                <ArticleList
                  list={[
                    "English Core",
                    "Political Science",
                    "History",
                    "Psychology",
                    "Physical Education",
                  ]}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                6<sup>th</sup> Subjects (Optional)
              </TableCell>
              <TableCell>
                Computer Science, Entrepreneurship, Legal Studies, Painting,
                Psychology, Physics, Physical Education
              </TableCell>
              <TableCell>
                Computer Science, Economics, Legal Studies, Entrepreneurship,
                Painting
              </TableCell>
            </TableRow>
            {type === "new" && (
              <>
                <TableRow>
                  <TableHeaderCell>Subjects For Admission Test</TableHeaderCell>
                  <TableCell>
                    <ArticleList
                      list={[
                        "English - 25 Marks",
                        "Economics - 25 marks",
                        "Geography - 25 Marks",
                        "Mathematics - 25 Marks",
                      ]}
                    />
                  </TableCell>
                  <TableCell>
                    <ArticleList
                      list={["English - 50 Marks", "History - 25 Marks"]}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Duration of Written Test</TableHeaderCell>
                  <TableCell>2 Hours 30 Minutes</TableCell>
                  <TableCell>1 Hour 30 Minutes</TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </section>
    </>
  );
};

export default HumanitiesSubject;
