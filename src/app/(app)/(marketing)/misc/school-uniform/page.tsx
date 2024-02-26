import StaticList from "~/app/_components/ui/StaticList";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const UNIFORM_RULES = [
    "As long as a student he /she is obliged to wear school uniform even on birthday",
    "For more details on uniform and size of uniform, kindly align with school  administration office",
] as const;

const SchoolUniformPage = () => {
    return (
        <TwoSectionPage linkTitle="Campus Life" currentLink="Uniform">
            <H1>School Uniform</H1>
            <StaticList list={UNIFORM_RULES} containerClassName="space-y-1" />
            <p className="hidden">
                <strong className="font-bold">Important: </strong>
                Please send an extra pair of undergarments and a set of clothes
                in the child{"'"}s bag regularly.
            </p>
        </TwoSectionPage>
    );
};

export default SchoolUniformPage;
