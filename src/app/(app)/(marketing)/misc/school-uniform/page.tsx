import StaticList from "~/app/_components/ui/StaticList";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";
import UniformAccordion from "./_components/UniformAccordion";
import { UNIFORM_RULES, UNIFORMS } from "./data";

const SchoolUniformPage = () => {
    return (
        <TwoSectionPage linkTitle="Campus Life" currentLink="Uniform">
            <H1>School Uniform</H1>
            <StaticList list={UNIFORM_RULES} containerClassName="space-y-1" />
            <p>
                <strong className="font-bold">Important: </strong>
                Please send an extra pair of undergarments and a set of clothes
                in the child{"'"}s bag regularly.
            </p>
            <UniformAccordion uniforms={UNIFORMS} />
        </TwoSectionPage>
    );
};

export default SchoolUniformPage;
