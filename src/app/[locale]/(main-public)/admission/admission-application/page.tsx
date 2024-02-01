import { type FC } from "react";
import ApplicaionFormComponent from "./_components/index";
import ArticleHeading from "@/src/components/ArticleHeading";
import { getScopedI18n } from "@/src/locales/server";
import { type NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import { useForm } from "react-hook-form";
import ArticlePage from "../../_components/ArticlePage";

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
