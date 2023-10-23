import { Card, CardBody, CardHeader } from "@lib/next-ui";

import { getScopedI18n } from "@locales/server";
import Lottie from "@ui/Lottie";
import type { FC } from "react";

const keyCharacteristicsCards = [
  {
    translationKey: 1,
    lottie:
      "https://lottie.host/3b570408-327f-41f4-9f50-27d9f9babb65/ZkWM5SdPGZ.json",
  },
  {
    translationKey: 2,
    lottie:
      "https://lottie.host/57a7603e-9f49-41f9-b8b0-84f27dec2d1b/DHSDaYQzrH.json",
  },
  {
    translationKey: 3,
    lottie:
      "https://lottie.host/0965ef1d-8246-43c7-83a2-aad231cb117e/T5DIee22dX.json",
  },
  {
    translationKey: 4,
    lottie:
      "https://lottie.host/c1935571-8ef7-45f2-8365-66687e1646b9/vVo20iC8Vl.json",
  },
] as const;

const KeyCharacteristics: FC = async () => {
  const t = await getScopedI18n("Pages.home.sub-links.key-features.content");

  return (
    <section className="space-y-12 rounded-xl bg-slate-100 p-8 md:p-10">
      <h2
        id="key-features"
        className="scroll-mt-24 text-3xl font-bold md:text-3xl"
      >
        {t("heading")}
      </h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {keyCharacteristicsCards.map(({ translationKey, lottie }) => (
          <Card
            as={"li"}
            key={translationKey}
            className="hover:bg-gray-100 md:p-3"
          >
            <CardHeader className="justify-center">
              <Lottie src={lottie} className="h-32 w-32" autoplay loop />
            </CardHeader>
            <CardBody className="space-y-4 text-center">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {t(`cards.${translationKey}.heading`)}
              </h5>
              <p className="text-center text-sm font-normal text-gray-700 dark:text-gray-400 lg:text-justify">
                {t(`cards.${translationKey}.body`)}
              </p>
            </CardBody>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default KeyCharacteristics;
