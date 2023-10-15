import { Button } from "@lib/next-ui";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import admissionImage from "@/../public/images/Screenshot_5.png"
import { getScopedI18n } from "@/locales/server";

const AdmissionOpen: FC =async () => {
  const currYear = new Date().getFullYear();
  const t = await getScopedI18n("Root.LandingPage.admission");
  return (
    <section className="grid grid-cols-1 gap-6 rounded-xl bg-primary-400 p-8 text-slate-50 sm:grid-flow-row sm:grid-cols-2 md:p-10 lg:grid-flow-col lg:grid-cols-3 lg:items-center lg:gap-x-16">
      <h3 className="order-1 text-3xl font-bold lg:self-end lg:text-4xl">
        {currYear} {t("title")}
      </h3>
      <Button
        as={Link}
        href="#"
        color="secondary"
        variant="shadow"
        className="order-3 font-bold text-amber-950 lg:order-2"
      >
        {t("button")}
      </Button>

      <div className="order-2 w-full self-end justify-self-end text-center font-semibold sm:row-span-2 sm:self-center lg:order-3 lg:text-lg lg:font-normal">
        {t("para1")}
      </div>

      <Image
        width={500}
        height={500}
        quality={95}
        src= {admissionImage}
        alt="Students Studying"
        className="order-4 row-span-2 ml-auto hidden max-w-xs rounded-lg object-cover object-center shadow-2xl lg:block"
      />
    </section>
  );
};

export default AdmissionOpen;
