import React from "react";
import logo1 from "../../assets/pricing-logo-1.webp";
import logo2 from "../../assets/pricing-logo-2.webp";
import logo3 from "../../assets/pricing-logo-3.webp";
import { FaCheck } from "react-icons/fa";
import { BsDash } from "react-icons/bs";

const Price = () => {
  const plans = [
    {
      name: "mycelium",
      logo: logo1.src,
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
      logo: logo2.src,
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
      logo: logo3.src,
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
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Comes with <span className="text-[#FEA301]">Best Price</span>
        </h2>
        <p className="text-gray-500 text-xs pt-2">WE WORK FOR YOUR SUCCESS</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
          key={index}
          className=" rounded-lg border border-gray-100 p-6 bg-white "
        >
          <div className="relative mb-4 ">
            <div className="border-4 border-transparent p-4 rounded-md mb-4  hover:clip-polygon">
              <img src={plan.logo} alt={plan.name} className="h-16 mx-auto mb-2" />
              <h3 className="text-4xl font-bold text-center">{plan.price}</h3>
            </div>
          </div>

            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
              {plan.negatives.map((negative, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-red-500 font-extrabold">
                    <BsDash />
                  </span>
                  <span className="text-gray-700">{negative}</span>
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
