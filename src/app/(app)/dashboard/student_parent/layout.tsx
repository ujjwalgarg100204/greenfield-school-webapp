import type { FC, ReactNode } from "react";
import StudentDrawer from "./_components/StudentDrawer";

type Props = { children: ReactNode };
const StudentDashboardLayout: FC<Props> = async ({ children }) => {
    return (
        <>
            <StudentDrawer />
            {children}
        </>
    );
};

export default StudentDashboardLayout;
