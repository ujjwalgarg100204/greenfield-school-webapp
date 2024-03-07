"use client";

import { Button, Card, CardBody, CardHeader, Link } from "~/app/next-ui";
import { useAllAcademicYrCtx } from "../../../_contexts/AllAcademicYrCtx";

const AcademicYearCRUDPage = () => {
    const { allAcademicYrs } = useAllAcademicYrCtx();

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold">
                All Academic years of the school
            </h3>
            <div className="flex gap-4">
                {allAcademicYrs.map((yr, i) => (
                    <Card key={yr.id}>
                        <CardHeader className="text-lg font-semibold">
                            Academic Year #{i + 1}
                        </CardHeader>
                        <CardBody className="grid grid-cols-2 gap-x-2 gap-y-1">
                            <span className="font-semibold">Start Date: </span>
                            <span>
                                {yr.startDate.toLocaleDateString("en-US", {})}
                            </span>
                            <span className="font-semibold">End Date: </span>
                            <span>
                                {yr.endDate.toLocaleDateString("en-US", {})}
                            </span>
                            <div className="col-span-2">
                                <Button
                                    as={Link}
                                    color="primary"
                                    className="my-2 w-full"
                                    href={`/dashboard/admin/administration/academic-year/update?id=${yr.id}`}
                                >
                                    Update
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AcademicYearCRUDPage;
