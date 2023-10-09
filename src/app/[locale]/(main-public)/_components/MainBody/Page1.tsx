/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Button, Carousel } from "flowbite-react";
const Page1 = () => {
  return (
    <Carousel className=" relative top-0 my-3 h-52 bg-slate-400 md:relative md:top-0 md:h-[30rem]">
      <img
        alt="..."
        className="md:w-full"
        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
      />
      <img
        alt="..."
        className="md:w-full"
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1864&q=80"
      />
      <img
        className="md:w-full"
        alt="..."
        src="https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
      />
      <img
        className="md:w-full"
        alt="..."
        src="https://images.unsplash.com/photo-1615988938302-bd2a5a7023bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
      />
      <img
        className="md:w-full"
        alt="..."
        src="https://images.unsplash.com/photo-1503676685182-2531a01b5b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
      />
    </Carousel>
  );
};

export default Page1;
