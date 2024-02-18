import { Button, Link } from "@/src/app/_lib/next-ui";

import ArticleHeading from "@/src/app/_components/ArticleHeading";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import { getScopedI18n } from "@/src/app/_locales/server";
import { setStaticParamsLocale } from "next-international/server";

const AdmissionPortal: FC<NextPageProps> = async ({ params: { locale } }) => {
    setStaticParamsLocale(locale);
    const t = await getScopedI18n(
        "Pages.admission.sub-links.admission-portal.sub-links.index",
    );

    return (
        <ArticlePage
            linkType="admission"
            selected={{ translationKey: "admission-portal" }}
        >
            <ArticleHeading>{t("heading")}</ArticleHeading>
            <div className="space-y-4">
                <p>{t("para-1")}</p>
                <p>{t("para-2")}</p>
            </div>
            <Button
                size="md"
                radius="sm"
                as={Link}
                color="primary"
                href="/admission/admission-application"
                className="w-full font-semibold"
            >
                {t("button-text")}
            </Button>
        </ArticlePage>
    );
};

export default AdmissionPortal;
