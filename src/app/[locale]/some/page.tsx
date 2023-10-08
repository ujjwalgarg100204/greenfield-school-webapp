import { PageProps } from "@/types";
import LocaleSwitcher from "@components/ui/LanguageSwither";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function SomePage({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Some");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <p>Text: {t("text")}</p>
      <LocaleSwitcher />
    </main>
  );
}
