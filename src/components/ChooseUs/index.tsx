
"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdOutlineCurrencyBitcoin } from "react-icons/md";

const tabData = [
  { id: "acquiring", label: "Acquiring Bitcoins" },
  { id: "mining", label: "Mining Bitcoins" },
  { id: "wallet", label: "Digital Wallet" },
];

const accordionData = [
  { title: "Unique Design Layouts and Features" },
  { title: "Easy dashboard integration for all mobile devices" },
  { title: "Community Service Forums" },
  { title: "Find the best jobs For your location" },
  { title: "Search for talented workers to improve your business" },
];

export const ChooseUs = () => {
  const [activeTab, setActiveTab] = useState("acquiring");
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);


  const toggleAccordion = (index: number ) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-Choosebg">
      <div className="flex justify-center flex-col items-center">
        <div className="mt-20">
          <p>
            <span className="text-40 text-bitBlack">Why?</span>{" "}
            <span className="text-crypOrange text-40 font-semibold">Choose Us</span>
          </p>
        </div>
        <div>
          <p className="text-13 font-semibold opacity-55">WE WORK FOR YOUR SUCCESS</p>
        </div>
      </div>
      <div className="flex gap-10 w-[80vw] mx-auto mt-20">
        <div className="w-1/2">
          <div className="flex px-4">
            {tabData.map((tab) => (
              <p
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? "text-crypOrange border-crypOrange" : "text-text border-Choosebg"
                } border-t-4 transition-all duration-500 h-12 text-xl whitespace-nowrap font-medium p-3 hover:text-crypOrange flex items-center cursor-pointer`}
              >
                {tab.label}
              </p>
            ))}
          </div>
          {tabData.map((tab) => (
            <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
              <p className="text-text text-start flex px-4 mt-5 leading-7">
                {tab.id === "acquiring"
                  ? "Alternatively if you have a specific service or question in mind please don't hesitate to contact us to discuss this using the contact details:"
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>
              <div className="flex flex-col px-3 mt-10 gap-3">
                {["Crowdfunding", "Micro payments", "Dispute Mediation", "Multi-signature accounts"].map((item, index) => (
                  <p key={index} className="flex items-center gap-2">
                    <span className="text-xl text-crypOrange">
                      <MdOutlineCurrencyBitcoin />
                    </span>
                    <span className="text-text">{item}</span>
                  </p>
                ))}
              </div>
              <div className="flex text-pretty mt-5 px-4">
                <p className="text-text leading-7">
                  {tab.id === "acquiring"
                    ? "We have a team of writers who specialise in writing end of year reports to highlight the successes of your business and the forecast for the next year, which you can distribute to clients and investors, both current and potential. We have the skills and resources to create professional films. Whether you want a corporate promotional film or a record of a conference we can provide the services you require."
                    : "Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci malesuada pharetra. Duis vel imperdiet enim. Vestibulum dolor metus, condimentum vitae vehicula et, facilisis a nunc. Suspendisse potenti. Fusce ullamcorper ullamcorper convallis. Morbi nec auctor mauris. Nam et arcu sit amet justo accumsan tempus vel in ante. Vestibulum lacinia velit eu lorem tincidunt vitae."}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2">
          {accordionData.map((item, index) => (
            <div key={index} className="transition-all duration-300 mb-10">
              <div className="flex items-center gap-8 mb-10">
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`h-10 w-10 rounded-full ${
                    activeAccordion === index ? "bg-crypOrange" : "bg-bitBlack"
                  } flex items-center`}
                >
                  <span className="text-white flex justify-center translate-x-3">
                    {activeAccordion === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <p
                  className={`font-semibold hover:text-crypOrange ${
                    activeAccordion === index ? "text-crypOrange" : "text-bitBlack"
                  } cursor-pointer`}
                >
                  {item.title}
                </p>
              </div>
              <p className={`ml-18 leading-7 mb-10 text-text ${activeAccordion === index ? "block" : "hidden"}`}>
                We work with clients big and small across a range of sectors and we utilise all forms of media to get your name out there in a way that's right for you. We have the skills and resources to create professional films.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};