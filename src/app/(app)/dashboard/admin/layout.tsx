import type { FC, ReactNode } from "react";
import AdminDrawer from "./_components/AdminDrawer";

const AdminDashboardLayout: FC<{ children: ReactNode }> = async ({
    children,
}) => {
    return (
        <>
            <AdminDrawer />
            {children}
        </>
    );
};

export default AdminDashboardLayout;
