import StaticList from "~/app/_components/ui/StaticList";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const DEMO_POINTS = [
    "Oral warning and counselling",
    "Written warning",
    "Detention during the break or on working Saturdays & or denial of school bus service upto 30 days.",
    "Suspension",
    "Transfer Certificate from the school.",
];

const PositiveBehaviorManagementPage = () => {
    return (
        <TwoSectionPage
            linkTitle="Miscellaneous"
            currentLink="Positive Behavior Management"
        >
            <H1>Positive Behavior Management</H1>
            {DEMO_POINTS.length > 0 ? (
                <StaticList list={DEMO_POINTS} />
            ) : (
                <p className="text-lg font-semibold text-danger-600">
                    Oops, no rules found
                </p>
            )}
        </TwoSectionPage>
    );
};

export default PositiveBehaviorManagementPage;
