import React from "react";
import { mobile1 } from "@/assets";
import CryptoProgress from "./Coins";

export const Transaction = () => {
  return (
    <div className="">
      <div className="text-center mb-20 mt-20 md:p-0 p-10">
        <h2 className="font-normal text-4xl mb-4">
          Transparent{" "}
          <span className="font-bold text-customYellow">Transactions</span>
        </h2>
        <p className="text-xs font-Segoe  text-gray-500">
          GET CLARITY NOW!
        </p>
        <p className="text-gray-600 mt-4  font-Segoe text-base">
          Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit.
          Fusce cursus lacus vel orci <br />
          malesuada pharetra. Duis vel imperdiet enim. Vestibulum dolor metus.
        </p>
      </div>
      <div className="text-center min-w-full pl-16 pr-16 md:pl-14 md:pr-14       flex items-start justify-center ">
        <img src={mobile1.src} alt="" className="h-[300px] w-[500px] md:h-[500px] md:w-[700px]  lg:h-580 lg:w-861 "/>
      </div>
      <CryptoProgress />
    </div>
  );
};

