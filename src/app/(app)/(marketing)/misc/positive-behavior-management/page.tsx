import StaticList from "~/app/_components/ui/StaticList";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";
import { type Metadata } from "next";

const POSITIVE_BEHAVIOR_POINTS = [
    "Oral warning and counselling",
    "Written warning",
    "Detention during the break or on working Saturdays & or denial of school bus service upto 30 days.",
    "Suspension",
    "Transfer Certificate from the school.",
] as const;

export const metadata: Metadata = {
    title: "Positive Behavior Management",
    description:
        "Explore the disciplinary actions and consequences outlined in our school's code of conduct. From oral warnings to suspension, learn about the steps taken to maintain a positive learning environment.",
    keywords: [
        "school disciplinary actions",
        "disciplinary consequences",
        "school warning system",
        "student detention",
        "school suspension policy",
        "transfer certificate process",
        "disciplinary measures",
        "school punishment",
        "disciplinary procedures",
        "disciplinary protocol",
        "disciplinary consequences for students",
        "school code of conduct consequences",
    ],
};

const PositiveBehaviorManagementPage = () => {
    return (
        <TwoSectionPage
            linkTitle="Campus Life"
            currentLink="Positive Behavior Management"
        >
            <H1>Positive Behavior Management</H1>
            {POSITIVE_BEHAVIOR_POINTS.length > 0 ? (
                <StaticList list={POSITIVE_BEHAVIOR_POINTS} />
            ) : (
                <p className="text-lg font-semibold text-danger-600">
                    Oops, no rules found
                </p>
            )}
        </TwoSectionPage>
    );
};

export default PositiveBehaviorManagementPage;
