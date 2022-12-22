import React from "react";
import illustration from "../assets/Illustration.svg";
import Button from "./sub-component/Button";
import arrow from "../assets/Arrow Right.svg";

function Hero() {
  return (
    <div className="h-screen justify-between flex  mx-[120px]">
      <div className=" mt-[131px] flex flex-col gap-[24px] ">
        <div className="w-[365px] h-[40px] bg-[#FFFFFF10] rounded-full flex gap-[16px] items-center pl-[2px] ">
          <h6 className="text-[#0D0D2B] bg-white rounded-full px-[16px] py-[4px] font-bold">
            75% SAVE
          </h6>
          <h6>For the Black Friday weekend</h6>
        </div>
        <h1 className="font-bold text-6xl w-[588px] ">
          Fastest & secure platform to invest <br />
          in crypto
        </h1>
        <div className="mt-[32px] ">
          {" "}
          <Button>
            <div className="flex items-center  gap-[24px] ">
              <h1>Try for free</h1>
              <img src={arrow} alt="" />
            </div>
          </Button>
        </div>
      </div>
      <div className="mt-[86px] ">
        <img src={illustration} alt="" />
      </div>
    </div>
  );
}

export default Hero;
