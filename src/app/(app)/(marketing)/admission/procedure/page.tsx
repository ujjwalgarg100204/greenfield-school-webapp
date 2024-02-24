import StaticList from "~/app/_components/ui/StaticList";
import H1 from "../../_components/H1";
import TwoSectionAdmissionPage from "../_components/TwoSectionAdmissionPage";

const PROCEDURE = [
    "The Admission procedure will be intimated to the parents of the selected candidates. It is mandatory for both the parents and local / legal guardian to be present to complete various admission formalities.",
    "For students seeking admission to Class I onwards, it is mandatory to submit the Original Transfer Certificate from the last school attended.",
    "Fees once paid at the time of admission is non refundable, except the Caution Money (Refundable) in case of withdrawal.",
    "Please check the dates for the admission procedure and adhere to them strictly.",
    "The Management reserves the right to have the last word in all matters related to admission.",
] as const;

const AdmissionProcedurePage = () => {
    return (
        <TwoSectionAdmissionPage highlightedLink="Admission Procedure">
            <H1>Admission Procedure</H1>
            <StaticList list={PROCEDURE} />
        </TwoSectionAdmissionPage>
    );
};

export default AdmissionProcedurePage;
