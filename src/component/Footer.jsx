import React from "react";
import logo from "../assets/Logo.svg";
import visa from "../assets/Visa.svg";
import mastercard from "../assets/Mastercard.svg";
import bitcoin from "../assets/Bitcoinn.svg";
import facebook from "../assets/facebook.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <div className="pt-[89px] pl-[60px] pb-[80px] flex-col items flex gap-[120px] ">
      {/* top flex col */}
      <div className=" flex  ">
        {/* logo */}
        <div className=" mr-[171px] ">
          <div className="flex items-center gap-[16px] ">
            <img src={logo} alt="" />
            <h1 className="font-semibold text-lg">CRAPPO</h1>
          </div>
        </div>

        {/* quick links */}
        <div className="w-[200px] mr-[35px] ">
          <h1 className="mb-[24px] font-medium text-xl ">Quick links</h1>
          <ul className="text-[#FFFFFF90] ">
            <li className="mb-[15px] ">
              <a href="#home">Home</a>
            </li>
            <li className="mb-[15px] ">
              <a href="#products">Products</a>
            </li>
            <li className="mb-[15px] ">
              <a href="#about">About</a>
            </li>
            <li className="mb-[15px] ">
              <a href="#features">Features</a>
            </li>
            <li className="mb-[15px] ">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* resources */}
        <div className="w-[200px] mr-[104px]">
          <div className="">
            <h1 className="mb-[24px] font-medium text-xl ">Resources</h1>
            <ul className="text-[#ffffff90]">
              <li className="mb-[15px] ">
                <a href="#home">Download Whitepapper</a>
              </li>
              <li className="mb-[15px] ">
                <a href="#products">Smart Token</a>
              </li>
              <li className="mb-[15px] ">
                <a href="#about">Blockchain Explorer</a>
              </li>
              <li className="mb-[15px] ">
                <a href="#features">Crypto API</a>
              </li>
              <li className="mb-[15px] ">
                <a href="#contact">Interest</a>
              </li>
            </ul>
          </div>
        </div>
        {/* we accept ff */}
        <div className="">
          <h1 className="text-3xl font-medium w-[355px] mb-[50px] ">
            We accept following payment systems
          </h1>
          <div className="flex items-center justify-between">
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
            <img src={bitcoin} alt="" />
          </div>
        </div>
      </div>
      {/* bottom flex col */}
      <div className="flex justify-between items-center mr-[120px] ">
        <small className="text-[#ffffff98] ">
          ©2021 CRAPPO. All rights reserved
        </small>
        <div className="flex items-center gap-[34px] ">
          <a href="#facebook">
            <img src={facebook} alt="" />
          </a>
          <a href="#insta">
            <img src={insta} alt="" />
          </a>
          <a href="#twitter">
            <img src={twitter} alt="" />
          </a>
          <a href="#youtube">
            <img src={youtube} alt="" />
          </a>
          <a href="#linkedin">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
