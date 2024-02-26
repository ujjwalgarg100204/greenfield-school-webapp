import { type FC } from "react";
import H1 from "../_components/H1";
import AdmissionApplicationForm from "./_components/AdmissionApplicationForm";

const AdmissionApplicationPage: FC = () => {
    return (
        <section className="container my-12 max-w-xl space-y-6 px-6 lg:max-w-4xl lg:px-8 xl:px-12 2xl:px-16">
            <H1>Application for Admission</H1>
            <div className="space-y-4">
                {/* General Instruction */}
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
        </section>
    );
};

export default AdmissionApplicationPage;
