/* eslint-disable @next/next/no-img-element */
"use client";

import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Page6() {
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    // Function to update isSmallerScreen based on window width
    const updateIsSmallerScreen = () => {
      setIsSmallerScreen(window.innerWidth <= 769);
    };

    // Add event listener to window resize
    window.addEventListener("resize", updateIsSmallerScreen);

    // Initial call to set isSmallerScreen
    updateIsSmallerScreen();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateIsSmallerScreen);
    };
  }, []);
  return (
    <section className="m-5 my-10 rounded-xl bg-slate-100 md:m-10">
      {isSmallerScreen ? (
        <>
          <section>
            <h1 className="my-4 p-3 text-3xl font-bold md:text-3xl">
              Premium Facilities
            </h1>
          </section>
          <section>
            <Carousel className=" relative top-0 my-3 h-52 bg-slate-400 md:relative md:top-0 md:h-[30rem]">
              <img
                alt="..."
                className="md:w-full"
                src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                alt="..."
                className="md:w-full"
                src="https://images.pexels.com/photos/5088021/pexels-photo-5088021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                className="md:w-full"
                alt="..."
                src="https://images.pexels.com/photos/4219521/pexels-photo-4219521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </Carousel>
          </section>
        </>
      ) : (
        <>
          <section>
            <h1 className="my-4 p-3 text-3xl font-bold md:text-3xl">
              Premium Facilities
            </h1>
          </section>
          <section>
            <Carousel className=" relative top-0 h-52  md:relative md:top-0 md:h-[20rem]">
              <div className="flex h-full items-center justify-between  p-[10%] dark:bg-gray-700 dark:text-white">
                <img
                  src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="max-w-sm"
                  alt="Slide 1"
                />
                <img
                  src="https://images.pexels.com/photos/5088021/pexels-photo-5088021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="max-w-sm"
                  alt="Slide 2"
                />
                <img
                  src="https://images.pexels.com/photos/4219521/pexels-photo-4219521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="max-w-sm"
                  alt="Slide 3"
                />
              </div>
              <div className="flex h-full items-center justify-between  p-[10%] dark:bg-gray-700 dark:text-white">
                <img
                  src="https://images.pexels.com/photos/3859917/pexels-photo-3859917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Slide 1"
                  className="max-w-sm"
                />
                <img
                  src="https://images.pexels.com/photos/3042432/pexels-photo-3042432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Slide 2"
                  className="max-w-sm"
                />
                <img
                  src="https://images.pexels.com/photos/3114072/pexels-photo-3114072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Slide 3"
                  className="max-w-sm"
                />
              </div>
              <div className="flex h-full items-center justify-between p-[10%] dark:bg-gray-700 dark:text-white">
                <img
                  src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Slide 1"
                  className="max-w-sm"
                />
                <img
                  src="https://images.pexels.com/photos/6209356/pexels-photo-6209356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Slide 2"
                  className="max-w-sm"
                />
                <img
                  src="https://images.pexels.com/photos/5554289/pexels-photo-5554289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Slide 3"
                  className="max-w-sm"
                />
              </div>
            </Carousel>
          </section>
        </>
      )}
    </section>
  );
}
