import type { FC } from "react";
import React from "react";
import Navbar from "./_components/Navbar";
type Props = { children: React.ReactNode };

const DashboardLayout: FC<Props> = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex flex-grow">{children}</div>
        </div>
    );
};

export default DashboardLayout;
