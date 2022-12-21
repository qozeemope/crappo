import React from "react";
import logo from "../assets/Logo.svg";
import Button from "./sub-component/Button";

function Navigation() {
  return (
    <div className="flex justify-between items-center mx-[120px] pt-[60px]">
      <div className="flex items-center gap-[16px] ">
        <img src={logo} alt="" />
        <h1 className="font-semibold text-lg">CRAPPO</h1>
      </div>
      <div className="flex gap-[32px] items-center ">
        {/* products features about contact login register */}
        <a href="#products">Products</a>
        <a href="#features ">Features </a>
        <a href="#about">About</a>
        <a href="#contact ">Contact</a>
        <a href="#login">Login</a>
        <div className="w-[1px] h-[24px] bg-[#F2F2F230]  "></div>
        <Button>Register</Button>
      </div>
    </div>
  );
}

export default Navigation;
