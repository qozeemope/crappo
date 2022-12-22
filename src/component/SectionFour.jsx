import React from "react";
import bitcoin from "../assets/bitcoin.svg";
import Button from "./sub-component/Button";
import arrow from "../assets/Arrow Right.svg";
import eth from "../assets/eth.svg";
import litecoin from "../assets/litecoin.svg";

function SectionFour() {
  return (
    <div className=" bg-white pt-[300px] pb-[100px]  ">
      <h1 className="text-center  text-[#0D0D2B] text-4xl  font-bold mb-[72px] ">
        Trade securely and market the high
        <br /> growth cryptocurrencies.
      </h1>
      <div className="flex justify-center gap-[52px] ">
        {/* flex 1 */}
        <div className="w-[370px] h-[433px] bg-[#2B076E] rounded-lg flex flex-col items-center py-[48px] ">
          <img src={bitcoin} alt="" className="w-[80px] mb-[48px] " />
          <div className="flex items-center gap-[2px] mb-[16px] ">
            <h1 className="mb-[16px] font-bold text-3xl ">Bitcoin</h1>
            <small className="font-medium text-sm text-[#ffffff80]">BTC</small>
          </div>
          <p className="w-[322px] text-center mb-[25px] ">
            Digital currency in which a record of transactions is maintained.
          </p>
          <div>
            {" "}
            <Button>
              <div className="flex items-center  gap-[24px] ">
                <h1>Start mining</h1>
                <img src={arrow} alt="" />
              </div>
            </Button>
          </div>
        </div>
        {/* flex two */}
        <div className="w-[370px] h-[433px]  rounded-lg flex flex-col items-center py-[48px] text-[#828282] ">
          <img src={eth} alt="" className="w-[80px] mb-[48px] " />
          <div className="flex items-center gap-[2px] mb-[16px] ">
            <h1 className="mb-[16px] text-[#0D0D2B] font-bold text-3xl ">
              Ethereum
            </h1>
            <small className="font-medium text-sm text-[#ffffff80]">ETH</small>
          </div>
          <p className="w-[322px] text-center mb-[25px] ">
            Digital currency in which a record of transactions is maintained.
          </p>
          <div>
            <img src={arrow} alt="" className="w-[64px] " />
          </div>
        </div>
        {/* flex three */}
        <div className="w-[370px] h-[433px]  rounded-lg flex flex-col text-[#828282] items-center py-[48px] ">
          <img src={litecoin} alt="" className="w-[80px] mb-[48px] " />
          <div className="flex items-center gap-[2px] mb-[16px] ">
            <h1 className="mb-[16px] text-[#0D0D2B] font-bold text-3xl ">
              Litecoin
            </h1>
            <small className="font-medium text-sm text-[#ffffff80]">LTC</small>
          </div>
          <p className="w-[322px] text-center mb-[25px] ">
            Digital currency in which a record of transactions is maintained.
          </p>
          <div>
            <img src={arrow} alt="" className="w-[64px] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
