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

const CommerceSubject: FC<Props> = ({ type }) => {
  return (
    <>
      <section className="space-y-8">
        <h4 className="text-xl font-bold">
          Commerce (With Mathematics): Group - F
        </h4>
        <Table>
          <TableHeader className="divide-y-1.5">
            <tr>
              <TableHeaderCell rowSpan={2}>Stream</TableHeaderCell>
              <TableHeaderCell rowSpan={2}>Group</TableHeaderCell>
              <TableHeaderCell colSpan={3} className="text-center">
                Eligibility Criteria For Admission
              </TableHeaderCell>
            </tr>
            <tr>
              <TableHeaderCell>Aggregate</TableHeaderCell>
              <TableHeaderCell>Mathematics</TableHeaderCell>
              <TableHeaderCell>Other Subjects</TableHeaderCell>
            </tr>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHeaderCell>
                Commerce <br />
                (With Maths)
              </TableHeaderCell>
              <TableCell>F</TableCell>
              <TableCell>
                {type === "old" ? (
                  "≥ 65%"
                ) : (
                  <span>
                    Class IX (Final) & Class X Half Yearly Examination <br /> ≥
                    70%
                  </span>
                )}
              </TableCell>
              <TableCell>≥ {type === "old" ? "65%" : "70%"}</TableCell>
              <TableCell>≥ 40%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section className="space-y-8">
        <h4 className="text-xl font-bold">
          Commerce (Without Mathematics) : Group - I & L
        </h4>
        <Table>
          <TableHeader className="divide-y-1.5">
            <tr>
              <TableHeaderCell rowSpan={2}>Stream</TableHeaderCell>
              <TableHeaderCell rowSpan={2}>Group</TableHeaderCell>
              <TableHeaderCell colSpan={3} className="text-center">
                Eligibility Criteria For Admission
              </TableHeaderCell>
            </tr>
            <tr>
              <TableHeaderCell>Aggregate</TableHeaderCell>
              <TableHeaderCell>Mathematics</TableHeaderCell>
              <TableHeaderCell>Other Subjects</TableHeaderCell>
            </tr>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHeaderCell>
                Commerce <br />
                (Without Maths)
              </TableHeaderCell>
              <TableCell>F</TableCell>
              <TableCell>
                {type === "old" ? (
                  "≥ 65%"
                ) : (
                  <span>
                    Class IX (Final) & Class X Half Yearly Examination <br /> ≥
                    70%
                  </span>
                )}
              </TableCell>
              <TableCell>≥ {type === "old" ? "40%" : "55%"}</TableCell>
              <TableCell>≥ 40%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHeader className="divide-y-1.5">
            <tr>
              <TableHeaderCell>Stream</TableHeaderCell>
              <TableHeaderCell colSpan={3} className="text-center">
                Commerce
              </TableHeaderCell>
            </tr>
            <tr>
              <TableHeaderCell>Group</TableHeaderCell>
              <TableHeaderCell>F</TableHeaderCell>
              <TableHeaderCell>I</TableHeaderCell>
              <TableHeaderCell>L</TableHeaderCell>
            </tr>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHeaderCell>Subjects Offered</TableHeaderCell>
              <TableCell>
                <ArticleList
                  list={[
                    "English Core",
                    "Accountancy",
                    "Economics",
                    "Business Studies",
                    "Mathematics",
                  ]}
                />
              </TableCell>
              <TableCell>
                <ArticleList
                  list={[
                    "English Core",
                    "Accountancy",
                    "Economics",
                    "Business Studies",
                    "Computer Science",
                  ]}
                />
              </TableCell>
              <TableCell>
                <ArticleList
                  list={[
                    "English Core",
                    "Accountancy",
                    "Economics",
                    "Business Studies",
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
                Entrepreneurship, Legal Studies, Painting, Psychology,
                Mathematics, Physical Education
              </TableCell>
              <TableCell>
                Computer Science, Entrepreneurship, Legal Studies, Painting,
                Psychology
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
                        "English - 25 Marks",
                        "General Awareness - 25 Marks",
                      ]}
                    />
                  </TableCell>
                  <TableCell>
                    <ArticleList
                      list={[
                        "Mathematics - 50 Marks",
                        "English - 25 Marks",
                        "General Awareness - 25 Marks",
                      ]}
                    />
                  </TableCell>
                  <TableCell>
                    <ArticleList
                      list={[
                        "Mathematics - 50 Marks",
                        "English - 25 Marks",
                        "General Awareness - 25 Marks",
                      ]}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Duration of Written Test</TableHeaderCell>
                  <TableCell>2 Hours</TableCell>
                  <TableCell>2 Hours</TableCell>
                  <TableCell>2 Hours</TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </section>
    </>
  );
};

export default CommerceSubject;
