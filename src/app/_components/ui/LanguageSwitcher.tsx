"use client";

import useResponsiveScreen from "@/src/app/_hooks/useResponsiveScreen";
import type { Locale } from "@/src/app/_locales";
import { useChangeLocale, useCurrentLocale } from "@/src/app/_locales/client";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@lib/next-ui";
import type { FC } from "react";
import { useTransition } from "react";
import { IoLanguageSharp } from "react-icons/io5";

const LOCALES = [
    { localeCode: "en", localeName: "English" },
    { localeCode: "hi", localeName: "Hindi" },
    { localeCode: "ta", localeName: "Tamil" },
    { localeCode: "te", localeName: "Telugu" },
] as const;

const LanguageSwitcher: FC = () => {
    const changeLocale = useChangeLocale();
    const locale = useCurrentLocale();
    const [isPending, startTransition] = useTransition();

    const screen = useResponsiveScreen();

    const handleLangChange = (locale: Locale): void => {
        startTransition(() => {
            changeLocale(locale);
        });
    };

    const currentLocaleName = LOCALES.find(
        ({ localeCode }) => localeCode === locale,
    );
    if (currentLocaleName === undefined) throw new Error("Invalid locale code");

    return (
        <Dropdown>
            <DropdownTrigger>
                {screen === "sm" ? (
                    <Button
                        color="primary"
                        variant="bordered"
                        isDisabled={isPending}
                        size="sm"
                        isIconOnly
                    >
                        <IoLanguageSharp size={15} />
                    </Button>
                ) : (
                    <Button
                        color="primary"
                        variant="bordered"
                        startContent={<IoLanguageSharp size={23} />}
                        isDisabled={isPending}
                        className="font-semibold"
                    >
                        {currentLocaleName.localeName}
                    </Button>
                )}
            </DropdownTrigger>

            <DropdownMenu aria-label="Static Actions" className="text-center">
                {LOCALES.map(({ localeCode, localeName }) => (
                    <DropdownItem
                        key={localeCode}
                        onClick={handleLangChange.bind(null, localeCode)}
                    >
                        {localeName}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default LanguageSwitcher;
