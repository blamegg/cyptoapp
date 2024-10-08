import React from "react";
import { pricingPlans } from "../constants"; 
import { FaCheck, FaMinus } from "react-icons/fa";


const Price = () => {
  return (
    <section className="py-14 bg-white md:mx-0 mx-10">
      <div className="text-center mb-20 font-sans">
        <h2 className="text-[40px] text-[#222328] md:w-auto w-56 mx-auto leading-tight">
          Comes with <span className="text-crypOrange font-bold">Best Price</span>
        </h2>
        <p className="text-[#757575] font-ubuntu text-[12px] font-bold my-3 ">
          WE WORK FOR YOUR SUCCESS
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-7 gap-12 max-w-6xl mx-auto p-8 lg:p-0">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="rounded-lg border border-gray-100 ">
            <div className="relative h-1/2 cursor-pointer">
              <div className={` ${index === 1 ? "card fixed1" : "card1 "}`}>
                <div className="card-content p-10">
                  <img
                    src={plan.logo}
                    alt={plan.name}
                    className="h-[100px] mx-auto mb-10"
                  />
                  <h3 className="text-[50px] font-bold text-center">
                    {plan.price}
                  </h3>
                </div>
              </div>
            </div>

            <ul className="mb-6 space-y-3 font-sans font-light p-6 ">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-2 text-text"
                >
                  {feature.status === "check" ? (
                    <span className="text-green-500">
                      <FaCheck />
                    </span>
                  ) : (
                    <span className="text-red-500 ">
                      <FaMinus/>
                    </span>
                  )}
                  <span className="text-[16px] text-text">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price;
