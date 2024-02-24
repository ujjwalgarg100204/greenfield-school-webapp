import StaticList from "~/app/_components/ui/StaticList";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const INSTRUCTIONS = [
    "Parents/Guardians should upload only the Birth Certificate issued by Municipal Corporation or the DOB shown Aadhar card. Please do not upload Birth Certificates issued by the Nursing Home/Hospital.",
    "Please upload the latest Passport sized coloured photographs of the student, parents or guardian (if applicable) on the designated place of the Application Form.",
    "Take the printouts of the Admit Card on clean white A4 sheet paper.",
    "The date of assessment /observation/interaction/interview will be mentioned in the Admit Card and to be mailed shortly after submitting the Application Form.",
    "During assessment/observation/interaction/Interview Admit Card (printout taken by parents) has to be produced.",
    "There will be an assessment on the intimated date for students seeking admission to Class I onwards. During the evaluation, the presence of both parents will be mandatory.",
    "For admission to Nursery & LKG, the teacher only observes and interacts with the child and the parents, and both parents must accompany the child.",
    "For admission to 9th to 12th, there will be an observation and interaction for assessment. Both parents must accompany the child.",
    "No request for any change of dates for assessment/observation/interaction/Interview will be entertained.",
] as const;

const GeneralInstructionsForAdmissionPage = () => {
    return (
        <TwoSectionPage
            linkTitle="Admission"
            currentLink="General Instructions for Admission"
        >
            <H1>General Instructions for Admission</H1>
            <StaticList list={INSTRUCTIONS} />
        </TwoSectionPage>
    );
};

export default GeneralInstructionsForAdmissionPage;