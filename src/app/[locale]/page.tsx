import { PageProps } from "@/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = useTranslations("index");

  return <h1>{t("title")}</h1>;
}
