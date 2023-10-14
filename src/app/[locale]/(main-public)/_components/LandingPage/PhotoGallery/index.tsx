import { getScopedI18n } from "@/locales/server";
import type { FC } from "react";
import PhotoGalleryCard from "./PhotoGalleryCard";

const photoGalleryCards = [
  {
    translationKey: "first",
    image: {
      url: "https://picsum.photos/id/1025/1920/1080",
      alt: "adorable dog",
    },
  },
  {
    translationKey: "second",
    image: {
      url: "https://images.pexels.com/photos/5212344/pexels-photo-5212344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "boy studying",
    },
  },
  {
    translationKey: "third",
    image: {
      url: "https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "students in classroom",
    },
  },
  {
    translationKey: "forth",
    image: {
      url: "https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "students in classroom",
    },
  },
] as const;

const PhotoGallery: FC = async () => {
  const t = await getScopedI18n("Root.LandingPage.photogallery");

  return (
    <section className="space-y-12 rounded-xl bg-slate-100 p-8 md:p-10">
      <header>
        <h1 className="text-3xl font-bold md:text-4xl">{t("title")}</h1>
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
