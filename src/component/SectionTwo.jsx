import React from "react";
import stats from "../assets/stats-Icon.svg";
import world from "../assets/world-icon.svg";
import illustrations from "../assets/Illustrations.svg";
import user from "../assets/user.svg";
import Button from "./sub-component/Button";

function SectionTwo() {
  return (
    <div className="h-screen mx-[120px] mt-[100px]">
      <div className="flex gap-[99px] items-center ">
        <div className="flex items-center gap-[24px] ">
          <div className="flex">
            <img src={stats} alt="" className="w-[80px] h-[80px] " />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl">$30B</h1>
            <h6 className="text-[#E0E0E0] ">Digital Currency Exchanged</h6>
          </div>
        </div>

        <div className="flex items-center gap-[24px] ">
          <div className="flex">
            <img src={user} alt="" className="w-[80px] h-[80px] " />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl">10M+</h1>
            <h6 className="text-[#E0E0E0] ">Trusted Wallets Investor</h6>
          </div>
        </div>

        <div className="flex items-center gap-[24px] ">
          <div className="flex">
            <img src={world} alt="" className="w-[80px] h-[80px] " />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl">100</h1>
            <h6 className="text-[#E0E0E0] ">Countries Supported</h6>
          </div>
        </div>
      </div>
      <div className="flex mt-[100px] gap-[70px] items-center">
        <div className="">
          <img src={illustrations} alt="" />
        </div>
        <div>
          <h1 className="font-bold text-4xl w-[480px] ">
            Why you should choose CRAPPO
          </h1>
          <p className="w-[408px] mt-[23px] mb-[31px] text-[#E0E0E0] ">
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
