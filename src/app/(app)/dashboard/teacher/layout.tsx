import type { FC, ReactNode } from "react";
import TeacherDrawer from "./_components/TeacherDrawer";

type Props = { children: ReactNode };

const TeacherDashboardLayout: FC<Props> = async ({ children }) => {
    return (
        <>
            <TeacherDrawer />
            {children}
        </>
    );
};

export default TeacherDashboardLayout;
