"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

import type { FC } from "react";
import type { Locale } from "@/locales";
import Lottie from "./Lottie";
import useResponsiveScreen from "@/hooks/useResponsiveScreen";
import { useTransition } from "react";

const locales = [
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

  const currentLocaleName = locales.find(
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
            <Lottie
              src="https://lottie.host/6db4a0f8-7c19-4219-9ec0-f2b41439a5c4/6mgmoTYbay.json"
              className="h-7 w-7"
              autoplay
              loop
            />
          </Button>
        ) : (
          <Button
            color="primary"
            variant="bordered"
            startContent={
              <Lottie
                src="https://lottie.host/6db4a0f8-7c19-4219-9ec0-f2b41439a5c4/6mgmoTYbay.json"
                className="h-10 w-8"
                autoplay
                loop
              />
            }
            isDisabled={isPending}
            className="font-semibold"
          >
            {currentLocaleName.localeName}
          </Button>
        )}
      </DropdownTrigger>

      <DropdownMenu aria-label="Static Actions" className="text-center">
        {locales.map(({ localeCode, localeName }) => (
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
