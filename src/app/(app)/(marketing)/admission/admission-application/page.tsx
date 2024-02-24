import { type FC } from "react";
import H1 from "../../_components/H1";
import TwoSectionAdmissionPage from "../_components/TwoSectionAdmissionPage";
import AdmissionApplicationForm from "./_components/AdmissionApplicationForm";

const AdmissionApplicationPage: FC = () => {
    return (
        <TwoSectionAdmissionPage highlightedLink="Admission Portal">
            <H1>Application for Admission</H1>
            <div className="space-y-4">
                {/* General instruction */}
                <section className="rounded-sm border-3">
                    <h2 className="border-3 bg-green-50 py-2 pl-2 text-lg font-bold text-danger-500 md:text-base">
                        Please Note :-
                    </h2>
                    <ul className="list-disc py-4 pl-7 text-sm md:text-base">
                        <li>Registration does not guarantee admission.</li>
                        <li>
                            Application will not be considered on First Come
                            First Served basis.
                        </li>
                        <li className="font-bold">
                            <span className="text-base text-rose-500 md:text-lg">
                                *
                            </span>{" "}
                            indicates mandatory fields
                        </li>
                    </ul>
                </section>
                <AdmissionApplicationForm />
            </div>
        </TwoSectionAdmissionPage>
    );
};

export default AdmissionApplicationPage;
