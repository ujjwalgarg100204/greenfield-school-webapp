"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@lib/next-ui";

import useResponsiveScreen from "@/hooks/useResponsiveScreen";
import type { Locale } from "@/locales";
import type { FC } from "react";
import { useTransition } from "react";
import Lottie from "./Lottie";

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
              src="https://lottie.host/1afca697-eafa-49ec-acd4-799d4e67bb66/qGhFOY2OJm.json"
              className="w-9"
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
                src="https://lottie.host/1afca697-eafa-49ec-acd4-799d4e67bb66/qGhFOY2OJm.json"
                className="w-11"
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
