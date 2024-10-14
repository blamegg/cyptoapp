"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineCurrencyBitcoin } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { sections } from "../constants";
export const ChooseUs = () => {
  const [openSection, setOpenSection] = useState(1);
  const handleClick = (id: number) => {
    setOpenSection(id);
  };
  const [activeTag, setActiveTag] = useState("headone");
  const handleActiveTag = (tag:string) => {
    setActiveTag(tag);

  };
    return (
    <>
      <div className="bg-Choosebg ">
        <div className="flex justify-center flex-col items-center mb-20">
          <div className="mt-20">
            <p>
              <span className="text-40 text-bitBlack">Why?</span>{" "}
              <span className="text-crypOrange text-40 font-semibold">
                Choose Us
              </span>
            </p>
          </div>
          <div>
            <p className="text-13 font-semibold opacity-55">
              WE WORK FOR YOUR SUCCESS
            </p>
          </div>
        </div>
        <div className="flex  mt-0 md:mt-20 lg:mt-0 gap-10 w-[80vw] mx-auto lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full">
            <div className="flex px-4 md:flex-row flex-col md:gap-0 gap-4 text-center items-center">
              <p
                onClick={() => handleActiveTag("headone")}
                className={`${
                  activeTag === "headone" ? "text-crypOrange" : "text-text"
                } border-t-4 transition-all duration-500 ${
                  activeTag === "headone"
                    ? "border-crypOrange"
                    : "border-Choosebg"
                }  h-12 text-md whitespace-nowrap font-medium p-3 hover:text-crypOrange flex items-center cursor-pointer`}
              >
                Acquiring Bitcoins
              </p>
              <p
                onClick={() => handleActiveTag("headtwo")}
                className={`${
                  activeTag === "headtwo" ? "text-crypOrange" : "text-text"
                } border-t-4 transition-all duration-500 ${
                  activeTag === "headtwo"
                    ? "border-crypOrange"
                    : "border-Choosebg"
                } h-12 text-md whitespace-nowrap font-medium hover:text-crypOrange flex items-center p-3 cursor-pointer`}
              >
                Mining Bitcoins
              </p>
              <p
                onClick={() => handleActiveTag("headthree")}
                className={`${
                  activeTag === "headthree" ? "text-crypOrange" : "text-text"
                } border-t-4 transition-all duration-500 ${
                  activeTag === "headthree"
                    ? "border-crypOrange"
                    : "border-Choosebg"
                } h-12 text-md whitespace-nowrap font-medium hover:text-crypOrange flex items-center p-3 cursor-pointer`}
              >
                Digital Wallet
              </p>
            </div>

            {/* First Content */}
            <div className={`${activeTag === "headone" ? "block" : "hidden"}`}>
              <p className="text-text text-base font-light font-sans text-start flex px-4 mt-5 leading-7">
                Alternatively if you have a specific service or question in mind
                please dont hesitate to contact us using the contact details:
              </p>
              <div className="flex flex-col px-3 mt-10 gap-3  text-base font-light font-sans">
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className="text-text">Crowdfunding</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className="text-text">Micro payments</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className="text-text">Dispute Mediation</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className="text-text">Multi-signature accounts</span>
                </p>
              </div>
              <div className="flex text-pretty mt-5 px-4">
                <p className="text-text leading-7 text-base font-light font-sans">
                  We have a team of writers who specialise in writing end of
                  year reports to highlight the successes of your business and
                  the forecast for the next year, which you can distribute to
                  clients and investors, both current and potential. We have the
                  skills and resources to create professional films. Whether you
                  want a corporate promotional film or a record of a conference
                  we can provide the services you require.
                </p>
              </div>
            </div>

            {/* Second Content */}
            <div className={`${activeTag === "headtwo" ? "block" : "hidden"}`}>
              <p className="text-text text-start flex ml-1 mt-5 leading-7  text-base font-light font-sans">
                xxxxx tincidunt, nisl at porttitor vulputate, justo nulla
                blandit nisl, ut posuere metus tortor vel odio...
              </p>
              <div className="flex flex-col mt-5 gap-3  text-base font-light font-sans">
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className="text-text">Duis aliquam lenb sodales.</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className="text-text">
                    Mauris aliquam sapien pharetra.
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className="text-text">
                    Fusce sed mi scelerisque est.
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className="text-text">
                    In luctus arcu urna commodo.
                  </span>
                </p>
              </div>
              <div className="flex text-pretty ml-2 mt-5">
                <p className="text-text leading-7  text-base font-light font-sans">
                  Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus
                  elit. Fusce cursus lacus vel orci malesuada pharetra. Duis vel
                  imperdiet enim. Vestibulum dolor metus, condimentum vitae
                  vehicula et, facilisis a nunc. Suspendisse potenti. Fusce
                  ullamcorper ullamcorper convallis. Morbi nec auctor mauris.
                  Nam et arcu sit amet justo accumsan tempus vel in ante.
                  Vestibulum lacinia velit eu lorem tincidunt vitae.
                </p>
              </div>
            </div>

            {/* Third Content */}
            <div
              className={`${activeTag === "headthree" ? "block" : "hidden"}`}
            >
              <p className="text-text  text-base font-light font-sans text-start flex mt-5 ml-1 leading-7">
                yyyyy tincidunt, nisl at porttitor vulputate, justo nulla
                blandit nisl, ut posuere metus tortor vel odio...
              </p>
              <div className="flex flex-col mt-5 gap-3  text-base font-light font-sans text-text">
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className="text-text">Duis aliquam lenb sodales.</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className="text-text">
                    Mauris aliquam sapien pharetra.
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className="text-text">
                    Fusce sed mi scelerisque est.
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className="text-text">
                    In luctus arcu urna commodo.
                  </span>
                </p>
              </div>
              <div className="flex text-pretty ml-2 mt-5">
                <p className="text-text leading-7  text-base font-light font-sans">
                  Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus
                  elit. Fusce cursus lacus vel orci malesuada pharetra. Duis vel
                  imperdiet enim. Vestibulum dolor metus, condimentum vitae
                  vehicula et, facilisis a nunc. Suspendisse potenti. Fusce
                  ullamcorper ullamcorper convallis. Morbi nec auctor mauris.
                  Nam et arcu sit amet justo accumsan tempus vel in ante.
                  Vestibulum lacinia velit eu lorem tincidunt vitae.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full xl:mt-0 md:mt-20 sm:mt-0 ">
            {sections.map((section) => (
              <div key={section.id} className="transition-all duration-300">
                <div className="flex items-center gap-8 mb-10">
                  <div
                    onClick={() => handleClick(section.id)}
                    className={`min-h-10 min-w-10 rounded-full cursor-pointer ${
                      openSection === section.id
                        ? "bg-buttonColor"
                        : "bg-bitBlack"
                    } flex items-center justify-center`}
                  >
                    <span className="text-white w-10 h-10 flex justify-center translate-y-3">
                      {openSection === section.id ? <FaMinus /> : <FaPlus />}
                    </span>
                  </div>
                  <p
                    onClick={() => handleClick(section.id)}
                    className={`font-semibold hover:text-crypOrange ${
                      openSection === section.id
                        ? "text-crypOrange"
                        : "text-bitBlack"
                    } cursor-pointer`}
                  >
                    {section.title}
                  </p>
                </div>
                <div
                  className={`ml-18 sm:mb-0 mb-12 transition-max-height duration-300 ease-in-out overflow-hidden ${
                    openSection === section.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  style={{ transitionProperty: "max-height, opacity" }}
                >
                  <p className="leading-7  text-text  text-sm font-light font-sans ">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
