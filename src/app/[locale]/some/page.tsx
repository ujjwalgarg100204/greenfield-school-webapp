"use client";

import { useTranslations } from "next-intl";

export default function SomePage() {
    const t = useTranslations("Some");
    const handleChangeLanguage = () => {};
    return (
        <main className="flex h-screen flex-col items-center justify-center gap-4">
            <p>Text: {t("text")}</p>
            <button
                onClick={handleChangeLanguage}
                className="rounded-md bg-blue-500 p-4 text-white hover:bg-blue-700"
            >
                Change Language
            </button>
        </main>
    );
}
