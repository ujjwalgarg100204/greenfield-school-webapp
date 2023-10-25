import ArticleList from "@/src/components/ArticleList";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";

const rules = [
  "The fee for the school bus must be paid annually in advance; PO, in favour of Delhi Public School Ruby Park, Kolkata. The transport service charges for the scheduled route/routes will be as per notification. Fees will be charged for all 12 months.",
  "No withdrawal of transport fees will be allowed during the Academic Session, except for the Transfer Cases. (Applicable for Class 11 and 12).",
  "A parent should not try to overtake and stop the school bus to board the child, as this may lead to an accident with the bus or put the boarders in danger.",
  "Parents are refrained from getting inside the school buses to pick up and drop off their children.",
  "Parents should refrain from arguing with the bus driver, conductor, or the teachers present inside the bus. Kindly contact the administration office of the School if you have any concerns. ",
  "Students should never stay inside the buses parked on school grounds during school hours or wander behind or under them.",
  "Under no circumstances students should touch the instrument panel of the buses.",
  "A student who avail the school bus should arrive at the bus stop at least 10 minutes before the arrival time of the school bus. The scheduled pick-up time is available with the transport department at the School. The School reserves the right to alter the timings, routes and stoppages as and when necessary.",
  "Students are issued a ID Card displaying the Bus Route number. While returning home, the student is strictly advised to wear the ID Card till the bus reaches their drop-off location.",
  "The student must board the right bus and must remain present at the exact location for availing of the bus service and stay away from the main road.",
  "No alteration of the norms mentioned above will be entertained unless permission for the same is obtained from the school authorities. ",
  "If a student misses his/her allotted bus, he/she should not try to board any other school bus. The parents’ responsibility is to drop off their wards at the School.",
  "The School will not be held responsible for any lapse in the bus services. In case of any discrepancy, parents may meet the Transport-In-Charge. ",
  "The buses will not wait for latecomers.",
  "Students should only come near the entry door of the bus once it comes to a complete halt. The front door of the bus is the only authorized entrance and exit.",
  "Boarding and alighting from buses should be done in silence and an orderly manner.",
  "Students must occupy vacant seats immediately after boarding their respective buses. Reservation of seats for co – commuters are not allowed under any circumstances.",
  "No student should travel standing on the footboard.",
  "Students must not move around in the bus when it is in motion. The students must ensure that the aisle of the bus is clear and that school bags and other belongings are placed correctly.",
  "Students must not put any part of their body outside the bus, even their hands to wave. ",
  "No object should be discarded inside or thrown outside the bus. This act should lead to the strict disciplinary action.",
  "Consumption of edibles is not permitted on the buses.",
  "Unruly behavior like shrieking, shouting and playing foul inside is strictly prohibited. Courteous behavior is expected at all time.",
  "The driver’s attention must not be distracted for any reason.",
  "The drivers are instructed to stop buses at the designated stops only. The list of stops is prepared to keep the convenience and safety of all bus commuters in view and is always subject to change.",
  "The bus monitor on duty is responsible for maintaining discipline in the buses. Any severe offense must be reported to the coordinator immediately.",
  "In case of any change, of temporary or permanent nature, in transport pick-up/ drop point or transport route, permission for the same has to be sought by applying to the Transport department at the school office. In case of permanent change of transport route. The application must be filed paying an administrative charge of Rs: 50/- (Rupee Fifty Only) at the School Office.",
  "Parents have to ensure that their wards do not go to and fro from bus stops unescorted.",
  "Parents (or whoever is authorized by the parents) have to produce the Escort Card at the bus stop to receive their wards from the respective bus drop points, falling which the student will be brought back to the School and later, will be handed over to the concerned person based on Escort Card.",
] as const;

const SchoolTransportRulesPage: FC<NextPageProps> = ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);

  return <ArticleList list={rules} />;
};

export default SchoolTransportRulesPage;
