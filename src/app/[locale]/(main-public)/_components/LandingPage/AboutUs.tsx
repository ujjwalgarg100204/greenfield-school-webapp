import { Button, Link } from "@/src/app/_lib/next-ui";

import { NAV_LINKS } from "@/src/app/_lib/frontend-data";
import { getScopedI18n } from "@/src/app/_locales/server";
import Image from "next/image";
import type { FC } from "react";

const AboutUs: FC = async () => {
    const t = await getScopedI18n("Pages.home.sub-links.hero.content");

    const aboutUsLink = NAV_LINKS.school.find(
        link => link.translationKey === "about",
    )!;

    return (
        <section className="gap-20 rounded-lg border border-gray-200 bg-white p-8 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex md:max-w-full md:items-center md:p-10">
            <div className="flex-grow space-y-6 text-center lg:max-w-md lg:text-left xl:max-w-xl 2xl:max-w-3xl">
                <h5
                    id="about-us"
                    className="mb-2 scroll-mt-24 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl"
                >
                    {t("heading")}
                </h5>
                <p className="mb-3 text-justify font-normal text-gray-700 dark:text-gray-400">
                    {t("para-1")}
                </p>
                <Button
                    as={Link}
                    size="lg"
                    color="primary"
                    variant="shadow"
                    className="font-bold"
                    href={aboutUsLink.link}
                >
                    {t("button-text")}
                </Button>
            </div>
            <Image
                priority
                quality={95}
                width={500}
                height={500}
                src={"/images/landing-page-about-us.png"}
                alt="Girl Studying in Greenfield school"
                className="hidden h-72 w-full rounded-lg object-cover lg:block"
            />
        </section>
    );
};

export default AboutUs;
