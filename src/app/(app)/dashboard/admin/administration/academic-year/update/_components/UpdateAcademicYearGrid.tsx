"use client";

import { useSearchParams } from "next/navigation";
import AcademicYearUpdateForm from "./AcademicYearUpdateForm";
import { type FC } from "react";
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { api } from "~/trpc/react";
import { getAcademicStr } from "../../utils";

const UpdateAcademicYearGrid: FC = () => {
    const params = useSearchParams();
    const {
        isLoading,
        isSuccess,
        isError,
        data: academicYrs,
        refetch,
    } = api.academicYear.getAll.useQuery();
    // render academic year update form if correct id is provided
    const academicYrId = params.get("id");
    if (academicYrId && isSuccess) {
        const academicYr = academicYrs.find(yr => yr.id === academicYrId);
        if (academicYr) {
            return <AcademicYearUpdateForm academicYr={academicYr} />;
        }
    }
    const tryAgainClickHandler = async () => {
        await refetch();
    };

    return (
        <section className="space-y-4">
            <h3>Click on the academic year you want to update</h3>
            <ul className="flex gap-4">
                {isLoading && <p>Loading...</p>}
                {isSuccess &&
                    academicYrs.map(yr => (
                        <Card
                            key={yr.id}
                            as={Link}
                            href={`/dashboard/admin/administration/academic-year/update?id=${yr.id}`}
                        >
                            <CardBody>{getAcademicStr(yr)}</CardBody>
                        </Card>
                    ))}
                {isError && (
                    <div>
                        <p>Oops, could not load academic years</p>
                        <Button onClick={tryAgainClickHandler}>
                            Try Again
                        </Button>
                    </div>
                )}
            </ul>
        </section>
    );
};

export default UpdateAcademicYearGrid;
