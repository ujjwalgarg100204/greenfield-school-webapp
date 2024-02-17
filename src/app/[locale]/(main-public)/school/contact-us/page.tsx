import ArticleHeading from "@/src/app/_components/ArticleHeading";
import GreenfieldLocation from "@/src/app/_components/GreenfieldLocation";
import { Link } from "@/src/app/_lib/next-ui";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import ArticlePage from "../../_components/ArticlePage";
import QueryForm from "./_components/QueryForm";

const SchoolContactPage: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage linkType="school" selected={{ translationKey: "contact" }}>
            <ArticleHeading>Contact Us</ArticleHeading>
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <h2 className="text-lg font-semibold">Reception Contact</h2>
                    <p className="mt-6 flex items-center gap-5">
                        <FaPhoneAlt className="h-5 w-5 fill-primary" />
                        <span>+91 98943 76100</span>
                    </p>
                    <p className="mt-2 flex items-center gap-4">
                        <HiMail className="h-7 w-7 fill-primary" />
                        <Link href="mailto:greenfieldschool@gmail.com">
                            greenfieldschool@gmail.com
                        </Link>
                    </p>
                </div>
                <div className="space-y-6">
                    <h2 className="text-lg font-semibold">Map location</h2>
                    <GreenfieldLocation className="w-3/4" />
                </div>
            </section>
            <QueryForm />
        </ArticlePage>
    );
};

export default SchoolContactPage;
