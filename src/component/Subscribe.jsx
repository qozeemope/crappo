import React from "react";

function Subscribe() {
  return (
    <div className="subscribe py-[88px]   ">
      <div className="bg-[#3671E9] mx-auto  rounded-lg  w-[1200px] h-[216px] p-[48px] flex items-center justify-between ">
        <div>
          <h1 className="font-bold text-3xl">Start mining now</h1>
          <p className="mt-[16px] w-[348px] ">
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <div className="flex gap-[40px] items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-inherit border-b-[1px] border-b-white border-b-solid w-[347px] h-[38px] placeholder:text-white "
          />
          <button className="py-[14px] px-[32px] text-black  bg-white rounded-full font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
