import LocaleSwitcher from "@/components/ui/LanguageSwither";
import { useTranslations } from "next-intl";

export default function SomePage() {
    const t = useTranslations("Some");
    // const handleChangeLanguage = () => {};
    return (
        <main className="flex h-screen flex-col items-center justify-center gap-4">
            <p>Text: {t("text")}</p>
            <LocaleSwitcher />
        </main>
    );
}
