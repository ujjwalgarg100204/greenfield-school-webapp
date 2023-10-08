"use client";

import { ChangeEvent, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

import clsx from "clsx";
import { locales } from "@/i18n";

const LocaleSwitcher = () => {
    const t = useTranslations("LocaleSwitcher");
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <label
            className={clsx(
                "relative rounded-lg bg-blue-500 px-4 text-white hover:bg-blue-700",
                isPending && "transition-opacity [&:disabled]:opacity-30",
            )}
        >
            <p className="sr-only">{t("label")}</p>
            <select
                className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
                defaultValue={locale}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {locales.map(cur => (
                    <option key={cur} value={cur}>
                        {t("locale", { locale: cur })}
                    </option>
                ))}
            </select>
            <span className="pointer-events-none absolute right-2 top-[8px]">
                ⌄
            </span>
        </label>
    );
};

export default LocaleSwitcher;
