"use client";

import { type AcademicYear } from "@prisma/client";
import { type FC, type ReactNode, createContext, useContext } from "react";
import { api } from "~/trpc/react";

type AllAcademicYrCtx = { allAcademicYrs: AcademicYear[] } | null;

const AllAcademicYrCtx = createContext<AllAcademicYrCtx>(null);

export const AllAcademicYrCtxProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const { data, isError, isLoading, error } =
        api.academicYear.getAll.useQuery();
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        console.error(error);
        return (
            <p>
                Some error occurred, please reload the website or check your
                internet connection
            </p>
        );
    }
    return (
        <AllAcademicYrCtx.Provider value={{ allAcademicYrs: data }}>
            {children}
        </AllAcademicYrCtx.Provider>
    );
};

export const useAllAcademicYrCtx = () => {
    const ctx = useContext(AllAcademicYrCtx);
    if (!ctx) {
        throw new Error("Wrap this component in AllAcademicYrCtxProvider");
    }

    return ctx;
};
