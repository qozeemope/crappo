import React from "react";
import chart from "../assets/Chart.svg";
import Button from "./sub-component/Button";
import stats from "../assets/Statistic.svg";
import table from "../assets/Table.svg";

function SectionFive() {
  return (
    <div className="bg-[#2B076E] pt-[100px] ">
      <h1 className="font-bold text-center mx-auto text-4xl w-[758px] mb-[100px] ">
        Market sentiments, portfolio, and run the infrastructure of your choice
      </h1>
      {/* invest */}
      <div className="flex items-center justify-center gap-[146px] ">
        <div>
          <h1 className="font-bold text-3xl">Invest Smart</h1>
          <p className="w-[408px] mt-[24px] mb-[32px] text-[#E0E0E0] ">
            Get full statistic information about the behaviour of buyers and
            sellers will help you to make the decision.{" "}
          </p>
          <Button>Learn More</Button>
        </div>
        <img src={chart} alt="" />
      </div>
      {/* stats */}
      <div className="flex items-center  gap-[91px]  mt-[120px] ">
        <img src={stats} alt="" className="w-[710px] h-[453px] " />
        <div className="">
          <h1 className="font-bold text-3xl">Detailed Statistics</h1>
          <p className="w-[408px] mt-[24px] mb-[32px] text-[#E0E0E0] text-justify ">
            View all mining related information in realtime, at any point at any
            location and decide which polls you want to mine in.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
      {/* table */}
      <div className="flex flex-row-reverse items-center justify-center gap-[64px] mt-[120px] mx-[120px] ">
        <img src={table} alt="" />
        <div>
          <h1 className="font-bold text-3xl">
            Grow your profit and track your investments
          </h1>
          <p className="w-[408px] mt-[24px] mb-[32px] text-[#E0E0E0] ">
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
