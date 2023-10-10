/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";

const Page5 = () => {
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
    <section className="m-5 rounded-xl bg-[#0EE35A]  p-[5%] align-middle md:m-10 md:flex md:justify-between md:p-[5%] md:text-center">
      {isSmallerScreen ? (
        <>
          <section>
            <img
              src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image Loading"
              className=" my-4 rounded-lg "
            />
          </section>
          <section>
            <section className=" font-bold text-white md:p-[2%] md:text-left">
              <Button
                className=" w-full font-bold md:my-5 md:text-xl"
                color="light"
              >
                Enroll Now
              </Button>
            </section>
          </section>
        </>
      ) : (
        <>
          <section className=" font-bold text-white md:p-[2%] md:text-left">
            <h1 className="md:text-3xl">2024</h1>
            <h1 className="md:text-3xl">School</h1>
            <h1 className="md:text-3xl">Admission Open</h1>

            <Button
              className=" w-full font-bold md:my-5 md:text-xl"
              color="light"
            >
              Enroll Now
            </Button>
          </section>
          <section className="text-center align-middle text-2xl font-bold text-white md:p-10">
            <p>Get your kid the best experience of education at</p>
            <p>Greenfield School, Tamil Nadu. Best for your child</p>
          </section>
          <section>
            <img
              src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image Loading"
              className=" max-w-sm rounded-lg"
            />
          </section>
        </>
      )}
    </section>
  );
};

export default Page5;
