import ArticleHeading from "@components/ArticleHeading";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import { Image } from "@lib/next-ui";
import NextImage from "next/image";
import type { NextPageProps } from "@/src/types";
import { getScopedI18n } from "@locales/server";
import { setStaticParamsLocale } from "next-international/server";

const MissionAndVisionPage: FC<NextPageProps> = async ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("Pages.school.sub-links.mission");

  return (
    <ArticlePage linkType="school" selected={{ translationKey: "mission" }}>
      <section className="space-y-6">
        <ArticleHeading>{t("title")}</ArticleHeading>
        <div className="space-y-4">
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start">
            <p className="flex-grow md:flex-grow-0 md:text-justify">
              Our mission is Education for All, so we promote a calm,
              energizing, and intellectually stimulating environment where every
              student stands an equal chance to showcase their talents. Every
              child is born with a unique potential & ability and does not
              necessarily have to follow in the footsteps of others. We need to
              support them as they cultivate and harness the inherent strength
              they are blessed with.
            </p>
            <Image
              isBlurred
              src="/images/school-pages/mission-and-vision/mission.jpg"
              alt="Greenfield mission"
              as={NextImage}
              className="object-cover object-center md:w-[120rem]"
              height={500}
              width={500}
              quality={95}
              priority
            />
          </div>
          <p>We strengthen our mission through the following practices:</p>
          <ul className="list-inside list-decimal space-y-2">
            <li className="pl-3">
              Giving the young learners individualized attention and recognizing
              their latent talent.
            </li>
            <li className="pl-3">
              Emphasizing holistic development as we ensure a healthy balance
              between academic, co-curricular, and extra-curricular activities.
            </li>
            <li className="pl-3">
              Catering to the students’ queries, raising the degree of
              inquisitiveness in them.
            </li>
            <li className="pl-3">
              Creating and sustaining an environment of self-learning,
              analytical thinking and practising social skills.
            </li>
            <li className="pl-3">
              Igniting conscience and propensity in the students towards the
              conservation of nature, maintaining harmony and giving back to the
              communities
            </li>
          </ul>
        </div>
      </section>
      <section className="space-y-6">
        <ArticleHeading>Vision</ArticleHeading>
        <div className="space-y-4">
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row-reverse md:items-start">
            <p className="flex-grow text-justify md:flex-grow-0">
              {t("content.para-1")}
            </p>
            <Image
              isBlurred
              src="/images/school-pages/mission-and-vision/vision.jpg"
              alt="Greenfield vision"
              as={NextImage}
              className="object-cover object-center md:w-[120rem]"
              height={500}
              width={500}
              quality={95}
              priority
            />
          </div>
          <p className="text-justify">{t("content.para-2")}</p>
        </div>
      </section>
    </ArticlePage>
  );
};

export default MissionAndVisionPage;
