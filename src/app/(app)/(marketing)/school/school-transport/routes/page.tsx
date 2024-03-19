import type { FC } from "react";

import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "School Transport Routes",
    description:
        "Our school provides best School transport facility. Though our school is in prime locality with well knitted public transport and accessibility, we provide school transportation for easy access and Parents comfort. The School supervises for smooth & hassle-free service. The parent/ guardian should coordinate with the school office regarding the pick-up and drop-off location of the student. All the School buses follow the latest guidelines of transportation rules and are equipped with CCTV cameras & connected electronically to the control room through a GPS tracking system installed in the buses. The Buses are also equipped with first aid boxes & fire extinguishers. A lady attendant accompanies the junior most students in the vehicle for their proper care.",
    keywords: [
        "School transport facility",
        "Prime locality",
        "Public transport",
        "Accessibility",
        "Parents comfort",
        "Supervised transportation",
        "Hassle-free service",
        "Pick-up and drop-off",
        "Transportation rules",
        "CCTV cameras",
        "GPS tracking system",
        "First aid boxes",
        "Fire extinguishers",
        "Lady attendant",
        "Student safety",
    ],
};

const SchoolTransportRoutesPage: FC = () => {
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

export default SchoolTransportRoutesPage;
