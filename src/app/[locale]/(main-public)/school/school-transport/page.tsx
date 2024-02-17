import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";

const SchoolTransportPage: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <p>
            The transport service provider extends the School transport
            facility; the School only supervises & supports for smooth &
            hassle-free service. The School can neither guarantee the
            availability of seats in the School Bus nor guarantee the pick-up or
            drop by the school bus at any specified location near your
            residence. The parent/ guardian should coordinate with the bus
            service provider regarding the pick-up and drop-off location of the
            student. Currently, the School buses provided by the transporter to
            support the school transport system are all EURO Complianced. Buses
            used for transporting students who have opted for bus facility cover
            Kolkata, Howrah & 24 Parganas. All vehicles are equipped with CCTV
            cameras & connected electronically to the control room through a GPS
            tracking system installed in the buses. The Buses are also equipped
            with first aid boxes & fire extinguishers. A lady attendant
            accompanies the junior most students in the vehicle for their proper
            care. The parents get an SMS alert approximately 10 minutes before
            the arrival of the school bus while dropping off the student.
        </p>
    );
};

export default SchoolTransportPage;
