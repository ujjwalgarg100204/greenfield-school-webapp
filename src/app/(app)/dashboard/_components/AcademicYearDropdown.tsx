"use client";

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    type Selection,
} from "~/app/next-ui";
import { type FC } from "react";
import { getAcademicStr } from "../admin/administration/academic-year/utils";
import { useAllAcademicYrCtx } from "../_contexts/AllAcademicYrCtx";
import { useSelectedAcademicYrCtx } from "../_contexts/SelectedAcademicYrCtx";

const getSelectedValue = (keys: Selection): string => {
    return Array.from(keys).join(", ").replaceAll("_", " ");
};

const AcademicYearDropdown: FC = () => {
    const { allAcademicYrs } = useAllAcademicYrCtx();
    const { selectedAcademicYr, setSelectedAcademicYr } =
        useSelectedAcademicYrCtx();
    const selectionChangeHandler = (keys: Selection) => {
        if (typeof keys !== "string") {
            const selectedAcademicYrId = getSelectedValue(keys);
            const chosenYr = allAcademicYrs.find(
                yr => yr.id === selectedAcademicYrId,
            )!;
            return setSelectedAcademicYr(chosenYr);
        }

        console.info("Invalid value selected in Academic Year Dropdown", keys);
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="capitalize"
                    color="primary"
                >
                    {getAcademicStr(selectedAcademicYr)}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={new Set([selectedAcademicYr.id])}
                onSelectionChange={selectionChangeHandler}
                color="primary"
                items={allAcademicYrs.map(yr => ({
                    key: yr.id,
                    label: getAcademicStr(yr),
                }))}
            >
                {[...allAcademicYrs]
                    .sort((a, b) => b.endDate.getTime() - a.endDate.getTime())
                    .map(yr => (
                        <DropdownItem key={yr.id}>
                            {getAcademicStr(yr)}
                        </DropdownItem>
                    ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default AcademicYearDropdown;
