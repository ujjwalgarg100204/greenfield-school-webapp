"use client";

import {
    type FC,
    type ReactNode,
    createContext,
    useState,
    useContext,
} from "react";

type TCurrAcademicYearContext =
    | {
          currAcademicYear: string;
          updateAcademicYear: (academicYear: string) => void;
      }
    | undefined;
const CurrAcademicYearContext =
    createContext<TCurrAcademicYearContext>(undefined);

const getInitialCurrAcademicYear = (): string => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month index
    const currentYear = today.getFullYear();
    let academicYear: string;

    // Check if the current month is before April (start of academic year)
    if (currentMonth < 4) {
        academicYear = `${currentYear - 1}-${currentYear}`;
    } else {
        academicYear = `${currentYear}-${currentYear + 1}`;
    }

    return academicYear;
};

export const CurrAcademicYearProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [currAcademicYear, setCurrAcademicYear] = useState<string>(
        getInitialCurrAcademicYear,
    );
    const updateAcademicYear = (academicYear: string) => {
        setCurrAcademicYear(academicYear);
    };

    return (
        <CurrAcademicYearContext.Provider
            value={{ currAcademicYear, updateAcademicYear }}
        >
            {children}
        </CurrAcademicYearContext.Provider>
    );
};

export const useCurrAcademicYear = () => {
    const currAcademicYearCtx = useContext(CurrAcademicYearContext);
    if (!currAcademicYearCtx) {
        throw new Error(
            "CurrAcademicYearContextProvider not found, wrap this component in CurrAcademicYearContextProvider",
        );
    }
    return currAcademicYearCtx;
};
