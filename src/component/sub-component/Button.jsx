import React from "react";

function Button({ children }) {
  return (
    <button className="py-[14px] px-[32px]  bg-[#3671E9] rounded-full font-medium">
      {children}
    </button>
  );
}

export default Button;
