"use client";

import { type AcademicYear } from "@prisma/client";
import React, {
    type FC,
    type ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { useAllAcademicYrCtx } from "./AllAcademicYrCtx";
import { getLatestAcademicYear } from "../admin/administration/academic-year/utils";

type SelectedAcademicYrCtx = {
    selectedAcademicYr: AcademicYear;
    setSelectedAcademicYr: (yr: AcademicYear) => void;
} | null;

const SelectedAcademicYrCtx = createContext<SelectedAcademicYrCtx>(null);

export const SelectecdAcademicYrCtxProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const { allAcademicYrs } = useAllAcademicYrCtx();
    const [selectedAcademicYr, setSelectedAcademicYr] = useState(() => {
        return getLatestAcademicYear(allAcademicYrs);
    });

    useEffect(() => {
        // selected academic year is not present in allAcademicYrs
        // then selecte the latest among the available
        setSelectedAcademicYr(yr => {
            const exists = allAcademicYrs.some(y => y.id === yr.id);
            if (!exists) {
                return getLatestAcademicYear(allAcademicYrs);
            }
            return yr;
        });
    }, [allAcademicYrs]);

    return (
        <SelectedAcademicYrCtx.Provider
            value={{ selectedAcademicYr, setSelectedAcademicYr }}
        >
            {children}
        </SelectedAcademicYrCtx.Provider>
    );
};

export const useSelectedAcademicYrCtx = () => {
    const ctx = useContext(SelectedAcademicYrCtx);
    if (!ctx)
        throw new Error("Wrap this component in SelectedAcademicYrCtxProvider");
    return ctx;
};
