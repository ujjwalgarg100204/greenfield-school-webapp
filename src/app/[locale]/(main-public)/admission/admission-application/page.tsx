import { Button, Link } from "@lib/next-ui";
import React, { type FC } from "react";

import ArticleHeading from "@/src/components/ArticleHeading";
import ArticlePage from "../../_components/ArticlePage";
import { type NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import { getScopedI18n } from "@locales/server";
import { useForm } from "react-hook-form";

const AdmissionApplicationForm: FC<NextPageProps> = async ({
  params: { locale },
}) => {
  const t = await getScopedI18n(
    "Pages.admission.sub-links.admission-portal.sub-links.admission_application",
  );
  setStaticParamsLocale(locale);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset, getValues
  } = useForm();

  return (
    <div>
      <ArticlePage
        linkType="admission"
        selected={{ translationKey: "admission-portal" }}
      >
        <ArticleHeading>{t("heading")}</ArticleHeading>
        <form>
            
        </form>
      </ArticlePage>
    </div>
  );
};

export default AdmissionApplicationForm;
