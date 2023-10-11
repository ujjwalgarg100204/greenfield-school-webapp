"use client";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import Image from "next/image";
const Page5 = () => {
  let date = new Date();

  const n = date.getFullYear();

  return (
    <section className="m-5 rounded-xl bg-[#0EE35A]  p-[5%] align-middle md:m-10 md:flex md:justify-between md:p-[5%] md:text-center">
      <section className=" hidden font-bold text-white md:block md:p-[2%] md:text-left">
        <h1 className="md:text-3xl ">{n}</h1>
        <h1 className="md:text-3xl">School</h1>
        <h1 className="md:text-3xl">Admission Open</h1>

        <Button className=" w-full font-bold md:my-5 md:text-xl" color="light">
          Enroll Now
        </Button>
      </section>
      <section className="my-5 text-center align-middle text-xl font-bold text-white md:p-10 md:text-2xl">
        <p>Get your kid the best experience of education at</p>
        <p>Greenfield School, Tamil Nadu. Best for your child</p>
      </section>

      <section className=" font-bold text-white md:p-[2%] md:hidden md:text-left">
        <h1 className="md:text-3xl">{n}</h1>
        <h1 className="md:text-3xl">School</h1>
        <h1 className="md:text-3xl">Admission Open</h1>

        <Button className=" w-full font-bold my-3 md:my-5 md:text-xl" color="light">
          Enroll Now
        </Button>
      </section>
      <section>
        <Image
          // fill
          width={500}
          height={500}
          quality={95}
          src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image Loading"
          className=" hidden rounded-lg object-cover object-top shadow-2xl md:block  md:max-w-sm"
        />
      </section>
    </section>
  );
};

export default Page5;
