"use client";
import LanguageSwitcher from "@/components/ui/LanguageSwither";
import { Button } from "flowbite-react";
import Image from "next/image";

const Page2 = () => {
  return (
    <section className=" mx-3  my-16 rounded-lg border border-gray-200 bg-white p-4 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:m-16 md:max-w-full  ">
      <section className="flex flex-col-reverse md:flex md:flex-row    ">
        <div className="p-10 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome to Greenfield International School
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
            massa sapien faucibus et. Lectus quam id leo in vitae turpis massa
            sed. Bibendum arcu vitae elementum curabitur vitae nunc. Ut lectus
            arcu bibendum at varius. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Egestas quis ipsum suspendisse ultrices
            gravida. Tellus elementum sagittis vitae et leo duis ut diam quam.
          </p>
          <button className="mt-4 text-center">
            <Button href="/about-us" gradientDuoTone="greenToBlue">
              About us
            </Button>
          </button>
        </div>
        <Image
          // className=" h-72 w-full rounded-t-lg object-cover  transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          src="https://images.pexels.com/photos/4144036/pexels-photo-4144036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="adorable dob"
          className="object-cover object-top"
          width={500}
          height={500}
          quality={95}
          // fill
          priority
        />
      </section>
    </section>
  );
};

export default Page2;
