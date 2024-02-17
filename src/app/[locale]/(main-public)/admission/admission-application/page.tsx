import ArticleHeading from "@/src/app/_components/ArticleHeading";
import { getScopedI18n } from "@/src/app/_locales/server";
import { type NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import { type FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import ApplicaionFormComponent from "./_components/index";

const AdmissionApplicationForm: FC<NextPageProps> = async ({
    params: { locale },
}) => {
    const t = await getScopedI18n(
        "Pages.admission.sub-links.admission-portal.sub-links.admission_application",
    );
    setStaticParamsLocale(locale);

    return (
        <div>
            <ArticlePage
                linkType="admission"
                selected={{ translationKey: "admission-portal" }}
            >
                <ArticleHeading>{t("heading")}</ArticleHeading>
                <ApplicaionFormComponent />
            </ArticlePage>
        </div>
    );
};

export default AdmissionApplicationForm;
