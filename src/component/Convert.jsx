import React from "react";
import Button from "./sub-component/Button";

function Convert() {
  return (
    <div className="convert bg-white w-[942px] h-[371px] rounded-lg mx-auto mt-[64px]  p-[48px] text-[#0D0D2B] ">
      <div className="flex gap-[48px] items-center mb-[103px] ">
        <input
          type="number"
          placeholder="Enter your hash rate"
          className="text-xl border-b border-b-[2px] border-b-[#E0E0E0] placeholder:text-[#0d0d2b] w-[403px] h-[38px] "
        />
        <select
          name=""
          id=""
          className="text-xl border-b border-b-[2px] border-b-[#E0E0E0] w-[200px] h-[38px] "
        >
          <option value="">TH/s</option>
        </select>
        <div className="text-white">
          <Button>Calculate</Button>
        </div>
      </div>
      <div className="text-start">
        {" "}
        <h1 className=" font-medium text-[#3671E9] mb-[16px] ">
          ESTIMATED 24 HOUR REVENUE:
        </h1>
        <h3 className="text-3xl font-bold">
          0.055 130 59 ETH <span className="text-[#3671e9] ">($1275)</span>
        </h3>
        <h6 className="text-[#828282] ">
          Revenue will change based on mining difficulty and Ethereum price.
        </h6>
      </div>
    </div>
  );
}

export default Convert;
