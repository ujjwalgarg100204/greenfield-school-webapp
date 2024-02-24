import type { FC } from "react";
import StaticList from "../../../../../_components/ui/StaticList";

const DEMO_RULES = [
    "The fee for the school bus must aligning with school fees guidelines.",
    "No withdrawal of transport fees will be allowed during the Academic Session, except for the Transfer Cases.",
    "A parent should not try to overtake and stop the school bus to board the child, as this may lead to an accident with the bus or put the boarders in danger.",
    "Parents are refrained from getting inside the school buses to pick up and drop off their children.",
    "Students should never stay inside the buses parked on school grounds during school hours or wander behind or under them.",
    "Under no circumstances students should touch the instrument panel of the buses.",
    "A student who avail the school bus should arrive at the bus stop at least 10 minutes before the arrival time of the school bus. The scheduled pick-up time is available with the transport department at the School. The School reserves the right to alter the timings, routes and stoppages as and when necessary.",
    "Students must display their ID card at all times.",
    "The student must board the right bus and must remain present at the exact location for availing of the bus service.",
    "No alteration of the norms mentioned above will be entertained unless permission for the same is obtained from the school authorities.",
    "If a student misses his/her allotted bus, he/she should not try to board any other school bus. The parents’ responsibility is to drop off their wards at the School. The buses will not wait for latecomers.",
    "The buses will not wait for latecomers.",
    "Students should only come near the entry door of the bus once it comes to a complete halt. The front door of the bus is the only authorized entrance and exit.",
    "Students must occupy vacant seats immediately after boarding their respective buses. ",
    "Reservation of seats for co – commuters are not allowed under any circumstances.",
    "No student should travel standing on the footboard.",
    "Students must not move around in the bus when it is in motion. The students must ensure that the aisle of the bus is clear and that school bags and other belongings are placed correctly.",
    "Students must not put any part of their body outside the bus, even their hands to wave.",
    "No object should be discarded inside or thrown outside the bus. This act would lead to the strict disciplinary action.",
    "Consumption of edibles is not permitted on the buses.",
    "Unruly behavior like shrieking, shouting and playing foul inside is strictly prohibited. Courteous behavior is expected at all time.",
    "The driver’s attention must not be distracted for any reason.",
    "The drivers are instructed to stop buses at the designated stops only. The list of stops is prepared to keep the convenience and safety of all bus commuters in view and is always subject to change.",
    "In case of any change, of temporary or permanent nature in transport pick-up/ drop point or transport route contact school administation office",
    "Parents have to ensure that their wards do not go to and fro from bus stops unescorted.",
];

const SchoolTransportRulesPage: FC = () => {
    return DEMO_RULES.length > 0 ? (
        <StaticList list={DEMO_RULES} />
    ) : (
        <p className="text-lg font-semibold text-danger-600">
            Oops, no bus routes found
        </p>
    );
};

export default SchoolTransportRulesPage;
