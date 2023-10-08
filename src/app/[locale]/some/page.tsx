import LocaleSwitcher from "@/components/ui/LanguageSwither";
import { PageProps } from "@/types";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

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
