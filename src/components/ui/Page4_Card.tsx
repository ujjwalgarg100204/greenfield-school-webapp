/* eslint-disable @next/next/no-img-element */
"use client";
import { Card } from "flowbite-react";
import React from "react";
import Image from "next/image";
import Bulb from "../../../public/images/animation_lnj1lri7_small.gif";
import browse from "../../../public/images/animation_lnj6gii3_small.gif";
import yoga from "../../../public/images/animation_lnj6ilj1_small.gif";
import award from "../../../public/images/trophy.gif"

const Page4_Card = () => {
  return (
    <section className=" m-4 my-10 rounded-xl bg-slate-100 p-3 md:m-9 md:my-20">
      <header>
        <h1 className="my-4 text-3xl font-bold md:text-3xl">
          Key differentiating characteristics of the School
        </h1>
      </header>

      <section className=" p-4 md:flex md:justify-between md:p-4">
        <Card className="hover my-4 flex max-w-xs justify-center hover:bg-gray-100">
          <section className=" flex justify-center ">
            <Image className="w-[30%]" w-5 src={Bulb} alt="Bulb" />{" "}
          </section>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Tomorrow’s Leaders {/* Removed <p> */}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here with us, students develop a sense of self, social skills, and
            independence, preparing them to take on leadership roles in the
            future.
          </p>
        </Card>

        <Card className="hover my-4 flex max-w-sm justify-center hover:bg-gray-100">
          <section className=" flex justify-center ">
            <Image className="w-[30%]" w-5 src={browse} alt="Bulb" />{" "}
          </section>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Noteworthy technology acquisitions 2021 {/* Removed <p> */}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>

        <Card className="hover my-4 flex max-w-sm justify-center hover:bg-gray-100">
          <section className=" flex justify-center ">
            <Image className="w-[30%]" w-5 src={yoga} alt="Bulb" />{" "}
          </section>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Noteworthy technology acquisitions 2021 {/* Removed <p> */}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>

        <Card className="hover my-4 flex max-w-sm justify-center hover:bg-gray-100">
          <section className=" flex justify-center ">
            <Image className="w-[20%]" w-5 src={award} alt="Bulb" />{" "}
          </section>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Noteworthy technology acquisitions 2021 {/* Removed <p> */}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </section>
    </section>
  );
};

export default Page4_Card;
