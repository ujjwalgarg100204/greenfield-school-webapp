import type { FC } from "react";

const SchoolTransportFeesPage: FC = () => {
    const currYear = new Date().getFullYear();

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">
                Academic Session {currYear} – {currYear + 1}
            </h2>
            <p>Contact School Administration office for the latest updates.</p>
        </div>
    );
};

export default SchoolTransportFeesPage;
