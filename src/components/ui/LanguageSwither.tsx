"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

import useResponsiveScreen from "@/hooks/useResponsiveScreen";
import { locales } from "@/i18n";
import type { FC } from "react";
import { useTransition } from "react";
import { MdLanguage } from "react-icons/md";

const LanguageSwitcher: FC = () => {
  const t = useTranslations("Root.LocaleSwitcher");
  const locale = useLocale() as (typeof locales)[number];
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const screen = useResponsiveScreen();

  const handleLangChange = (locale: (typeof locales)[number]): void => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

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
            <MdLanguage />
          </Button>
        ) : (
          <Button
            color="primary"
            variant="bordered"
            startContent={<MdLanguage />}
            isDisabled={isPending}
            className="font-semibold"
          >
            {t("locale", { locale })}
          </Button>
        )}
      </DropdownTrigger>

      <DropdownMenu aria-label="Static Actions" className="text-center">
        {locales.map(locale => (
          <DropdownItem
            key={locale}
            onClick={handleLangChange.bind(null, locale)}
          >
            {t("locale", { locale })}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
