import React from "react";
import { price1, price2, price3 } from "@/assets/sharedSection";
import { FaCheck } from "react-icons/fa";
import { BsDash } from "react-icons/bs";

const Price = () => {
  const plans = [
    {
      name: "Mycelium",
      logo: price1.src,
      price: "$50",
      features: [
        "Control over your money",
        "Centralized validation",
        "Vulnerable environment",
        "Basic privacy",
        "Discloses information to third party",
        "Dynamic fee with override",
      ],
      negatives: ["Remote app"],
    },
    {
      name: "Armory",
      logo: price2.src,
      price: "$20",
      features: [
        "Control over your money",
        "Centralized validation",
        "Remote app",
        "Vulnerable environment",
        "Basic privacy",
        "Discloses information to third party",
      ],
      negatives: ["Dynamic fee with override"],
    },
    {
      name: "Exodus",
      logo: price3.src,
      price: "$100",
      features: [
        "Control over your money",
        "Remote app",
        "Vulnerable environment",
        "Basic privacy",
        "Discloses information to third party",
        "Dynamic fee with override",
      ],
      negatives: ["Centralized validation"],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-10 font-sans">
        <h2 className="text-[40px] text-[#222328]">
          Comes with <span className="text-[#FEA301]">Best Price</span>
        </h2>
        <p className="text-[#757575] font-opensans text-[13px] my-3">WE WORK FOR YOUR SUCCESS</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="rounded-lg border border-gray-100 p-6">
            <div className="relative mb-8">
              <div className={`card ${index === 1 ? 'fixed' : ''} `}>
                <div className="card-content p-5">
                  <img src={plan.logo} alt={plan.name} className="h-[100px] mx-auto mb-4" />
                  <h3 className="text-[50px] font-bold text-center">{plan.price}</h3>
                </div>
              </div>
            </div>

            <ul className="mb-6 space-y-3 font-sans">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>
                  <span className="text-[16px] text-[#353535]">{feature}</span>
                </li>
              ))}
              {plan.negatives.map((negative, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-[#353535]">
                  <span className="text-red-500 font-extrabold">
                    <BsDash />
                  </span>
                  <span className="text-[16px] text-[#353535]">{negative}</span>
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
