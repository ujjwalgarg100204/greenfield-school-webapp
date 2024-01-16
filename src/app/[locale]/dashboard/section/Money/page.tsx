"use client";

import BarGraph from "./_component/BarGraphMontly";
import BarGraphTotal from "./_component/BarGraphTotal";
import Header from "./_component/Header";
import useNav from "@/src/hooks/useNav";

const Money = () => {
  const MoneyRef = useNav("Money");
  return (
    <section ref={MoneyRef} id="moneySection">
      <div>
        <Header />
      </div>
      <div className="md:w-full" >
        <BarGraph />
        <BarGraphTotal />
      </div>
    </section>
  );
};

export default Money;
