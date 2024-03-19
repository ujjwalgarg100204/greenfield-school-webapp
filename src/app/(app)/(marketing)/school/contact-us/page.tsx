import { type FC } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import GreenfieldLocation from "~/app/_components/GreenfieldLocation";
import { Link } from "~/app/next-ui";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";
import ContactUsForm from "./_components/ContactUsForm";

import { type Metadata } from "next";


export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Reception Contact: - +91 98943 76100, email address:- campusgreenfield@gmail.com" ,
    keywords: [
        "Reception contact",
        "Phone number",
        "Email address",
        "Contact details",
        "Reception phone",
        "Contact information",
        "Customer service",
        "Inquiry line",
        "Helpline",
        "Communication",
        "Campus contact",
        "Reception email",
        "Contact phone",
        "Contact email",
        "Campus information",
    ],
};

const ContactUsPage: FC = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="Contact Us">
            <H1>Contact Us</H1>
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <h2 className="text-lg font-semibold">Reception Contact</h2>
                    <p className="mt-6 flex items-center gap-5">
                        <FaPhoneAlt className="h-5 w-5 fill-primary" />
                        <Link href="tel://+919894376100">+91 98943 76100</Link>
                    </p>
                    <p className="mt-2 flex items-center gap-4">
                        <HiMail className="h-7 w-7 fill-primary" />
                        <Link href="mailto://campusgreenfield@gmail.com">
                            campusgreenfield@gmail.com
                        </Link>
                    </p>
                </div>
                <div className="space-y-6">
                    <h2 className="text-lg font-semibold">Map location</h2>
                    <GreenfieldLocation className="w-3/4" />
                </div>
            </section>
            <ContactUsForm />
        </TwoSectionPage>
    );
};

export default ContactUsPage;
