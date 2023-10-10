"use client";

import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";

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

      <section>
        <Page5 />
      </section>

      <section>
        <Page6 />
      </section>
    </>
  );
};

export default Main;
