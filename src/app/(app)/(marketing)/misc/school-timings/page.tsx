import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";
import SchoolTimingsTabs from "./_components/SchoolTimingsTabs";

const SchoolTimingsPage = () => {
    return (
        <TwoSectionPage linkTitle="Miscellaneous" currentLink="Timings">
            <H1>School Timings</H1>
            <SchoolTimingsTabs />
            <p>
                The management reserves the right to change the school timing as
                well as location of classes as and when deemed necessary.
            </p>
        </TwoSectionPage>
    );
};

export default SchoolTimingsPage;
