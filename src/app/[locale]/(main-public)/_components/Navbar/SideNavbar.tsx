import { Button, Divider } from "@lib/next-ui";

import { useTranslations } from "next-intl";
import NextLink from "next/link";
import { type FC } from "react";
import type { NAV_LINK_TYPES } from "../../../../../lib/frontend-data";
import { NAV_LINKS } from "../../../../../lib/frontend-data";

type Props = {
  linkType: (typeof NAV_LINK_TYPES)[number];
  selected: Pick<
    (typeof NAV_LINKS)[keyof typeof NAV_LINKS][number],
    "translationKey"
  >;
};

const SideNavbar: FC<Props> = ({ linkType, selected }) => {
  const t = useTranslations(`Pages.${linkType}`);
  const tDict = useTranslations("Dictionary");

  return (
    <aside className="sticky top-16 ml-auto w-full max-w-xs space-y-3 rounded-lg border-2 bg-white p-4">
      <h3 className="text-lg font-semibold capitalize">
        {tDict("other")} {t("title")} {tDict("links")}
      </h3>
      <Divider className="h-0.5 rounded-full" />
      <nav>
        <ul className="space-y-0.5">
          {NAV_LINKS[linkType].map(({ link, translationKey }) => (
            <li key={translationKey}>
              {selected.translationKey === translationKey ? (
                <Button
                  variant="solid"
                  color="primary"
                  className="w-full justify-start "
                  radius="sm"
                >
                  {t(`sub-links.${translationKey}.title`)}
                </Button>
              ) : (
                <Button
                  as={NextLink}
                  href={link}
                  variant="light"
                  color="default"
                  className="w-full justify-start"
                  radius="sm"
                >
                  {t(`sub-links.${translationKey}.title`)}
                </Button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavbar;
