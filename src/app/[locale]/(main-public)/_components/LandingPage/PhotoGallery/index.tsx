import type { FC } from "react";
import PhotoGalleryCard from "./PhotoGalleryCard";
import four from "@/public/images/photo-gallery-landingPage/4.jpg";
import { getScopedI18n } from "@locales/server";
import one from "@/public/images/photo-gallery-landingPage/1.jpg";
import three from "@/public/images/photo-gallery-landingPage/3.jpg";
import two from "@/public/images/photo-gallery-landingPage/2.jpg";

const photoGalleryCards = [
  {
    translationKey: 1,
    image: {
      url: one,
      alt: "adorable dog",
    },
  },
  {
    translationKey: 2,
    image: {
      url: two,
      alt: "boy studying",
    },
  },
  {
    translationKey: 3,
    image: {
      url: three,
      alt: "students in classroom",
    },
  },
  {
    translationKey: 4,
    image: {
      url: four,
      alt: "students in classroom",
    },
  },
] as const;

const PhotoGallery: FC = async () => {
  const t = await getScopedI18n("Pages.home.sub-links.photo-gallery");

  return (
    <section className="space-y-12 rounded-xl bg-slate-100 p-8 md:p-10">
      <header>
        <h1
          className="scroll-mt-24 text-3xl font-bold md:text-4xl"
          id="photo-gallery"
        >
          {t("title")}
        </h1>
      </header>
      <div className="grid max-w-full grid-rows-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {photoGalleryCards.map(card => (
          <PhotoGalleryCard key={card.translationKey} {...card} />
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
