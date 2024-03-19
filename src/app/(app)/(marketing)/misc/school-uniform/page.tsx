import StaticList from "~/app/_components/ui/StaticList";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";
import { type Metadata } from "next";

const UNIFORM_RULES = [
    "As long as a student he/she is obliged to wear school uniform. An exception only on Birthday",
    "For more details on uniform and size of uniform, kindly align with school  administration office",
] as const;

export const metadata: Metadata = {
    title: "School Uniform",
    description:
        "Discover the rules and guidelines for wearing the school uniform, ensuring uniformity and adherence to dress code policies. Get details on uniform sizes and administration procedures.",
    keywords: [
        "school uniform rules",
        "school dress code",
        "school uniform guidelines",
        "school uniform sizes",
        "school uniform administration",
        "school uniform policy",
        "school attire regulations",
    ],
};

const SchoolUniformPage = () => {
    return (
        <TwoSectionPage linkTitle="Campus Life" currentLink="Uniform">
            <H1>School Uniform</H1>
            <StaticList list={UNIFORM_RULES} containerClassName="space-y-1" />
            <p className="hidden">
                <strong className="font-bold">Important: </strong>
                Please send an extra pair of undergarments and a set of clothes
                in the child&apos;s bag regularly.
            </p>
        </TwoSectionPage>
    );
};

export default SchoolUniformPage;
