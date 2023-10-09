"use client";

import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

const Main = () => {
  return (
    <>
      <section>
        <Page1 />
      </section>

      <section>
        <Page2 />
      </section>

      <section>
        <Page3 />
      </section>

      <section>
        <Page4 />
      </section>
    </>
  );
};

export default Main;
