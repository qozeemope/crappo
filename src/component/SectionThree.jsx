import React from "react";
import Convert from "./Convert";

function SectionThree() {
  return (
    <div className="mt-[100px] text-center h-[50vh] mb-[64px] ">
      <h1 className="font-bold text-4xl">Check how much you can earn</h1>
      <p className="w-[622px] mx-auto text-lg text-[#E0E0E0] mt-[24px] ">
        Let’s check your hash rate to see how much you will earn today,
        Exercitation veniam consequat sunt nostrud amet.
      </p>
      <div>
        <Convert />
      </div>
    </div>
  );
}

export default SectionThree;
