"use client";

import { NAV_LINKS } from "@/lib/frontend-data";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const AboutUs: FC = () => {
  const aboutUsLink = NAV_LINKS.school.find(
    link => link.translationKey === "about",
  );
  if (aboutUsLink === undefined) throw new Error("About us link not found");

  return (
    <section className="gap-20 rounded-lg border border-gray-200 bg-white p-8 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex md:max-w-full md:items-center md:p-10">
      <div className="flex-grow space-y-6 text-center lg:max-w-md lg:text-left xl:max-w-xl 2xl:max-w-3xl">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
          Welcome to Greenfield International School
        </h5>
        <p className="mb-3 text-justify font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
          massa sapien faucibus et. Lectus quam id leo in vitae turpis massa
          sed. Bibendum arcu vitae elementum curabitur vitae nunc. Ut lectus
          arcu bibendum at varius. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Egestas quis ipsum suspendisse ultrices gravida. Tellus
          elementum sagittis vitae et leo duis ut diam quam.
        </p>
        <Button
          as={Link}
          href={aboutUsLink.link}
          color="primary"
          variant="shadow"
          className="font-bold"
          size="lg"
        >
          About us
        </Button>
      </div>
      <Image
        className="hidden h-72 w-full rounded-lg object-cover lg:block"
        src="https://images.pexels.com/photos/4144036/pexels-photo-4144036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Girl Studying in Greenfield school"
        width={500}
        height={500}
        quality={95}
        priority
      />
    </section>
  );
};

export default AboutUs;
