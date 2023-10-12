"use client";
import { Card } from "@nextui-org/react";
import React, { useRef } from "react";
const Page4_Card = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <section className=" m-4 my-10 rounded-xl bg-slate-100 p-3 md:m-9 md:my-20">
      <header>
        <h1 className="my-4 text-3xl font-bold md:text-3xl">
          Key differentiating characteristics of the School
        </h1>
      </header>

      <section className=" p-4 md:flex md:justify-between md:p-4">
        <Card className="hover my-4 flex max-w-xs justify-center p-3 hover:bg-gray-100 md:p-3">
          <section className=" flex justify-center ">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/3b570408-327f-41f4-9f50-27d9f9babb65/ZkWM5SdPGZ.json"
              style={{ width: "10rem", height: "10rem" }}
            ></lottie-player>
          </section>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Tomorrow’s Leaders
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here with us, students develop a sense of self, social skills, and
            independence, preparing them to take on leadership roles in the
            future.
          </p>
        </Card>

        <Card className="hover my-4 flex max-w-sm justify-center p-3 hover:bg-gray-100">
          <section className=" flex justify-center ">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/0965ef1d-8246-43c7-83a2-aad231cb117e/T5DIee22dX.json"
              style={{ width: "10rem", height: "10rem" }}
            ></lottie-player>{" "}
          </section>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Noteworthy technology acquisitions 2021 {/* Removed <p> */}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>

        <Card className="hover my-4 flex max-w-sm justify-center p-3 hover:bg-gray-100">
          <section className=" flex justify-center ">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/57a7603e-9f49-41f9-b8b0-84f27dec2d1b/DHSDaYQzrH.json"
              style={{ width: "10rem", height: "10rem" }}
            ></lottie-player>{" "}
          </section>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Noteworthy technology acquisitions 2021 {/* Removed <p> */}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>

        <Card className="hover my-4 flex max-w-sm justify-center p-3 hover:bg-gray-100">
          <section className=" flex justify-center ">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/c1935571-8ef7-45f2-8365-66687e1646b9/vVo20iC8Vl.json"
              style={{ width: "5rem", height: "5rem" }}
            ></lottie-player>{" "}
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
