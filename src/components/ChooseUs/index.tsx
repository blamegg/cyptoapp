"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineCurrencyBitcoin } from "react-icons/md";
import { FaMinus } from "react-icons/fa";

export const ChooseUs = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [headone, setHeadone] = useState(true);
  const [headtwo, setHeadtwo] = useState(false);
  const [headthree, setHeadthree] = useState(false);

  const one = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
    setFour(false);
    setFive(false);
  };
  const two = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
    setFour(false);
    setFive(false);
  };
  const three = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
    setFour(false);
    setFive(false);
  };
  const fourth = () => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFour(true);
    setFive(false);
  };
  const fifth = () => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFour(false);
    setFive(true);
  };
  const headfirst = () => {
    setHeadone(true);
    setHeadtwo(false);
    setHeadthree(false);
  };
  const headsecond = () => {
    setHeadone(false);
    setHeadtwo(true);
    setHeadthree(false);
  };
  const headthird = () => {
    setHeadone(false);
    setHeadtwo(false);
    setHeadthree(true);
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
                onClick={headfirst}
                className={`${
                  headone ? "text-crypOrange" : "text-text"
                } border-t-4 transition-all duration-500 ${
                  headone ? "border-crypOrange" : "border-Choosebg"
                }  h-12 text-xl whitespace-nowrap font-medium p-3 hover:text-crypOrange flex items-center cursor-pointer`}
              >
                Acquiring Bitcoins
              </p>
              <p
                onClick={headsecond}
                className={`${
                  headtwo ? "text-crypOrange" : "text-text"
                } border-t-4 transition-all duration-500 ${
                  headtwo ? "border-crypOrange" : "border-Choosebg"
                } h-12 text-xl whitespace-nowrap font-medium hover:text-crypOrange flex items-center p-3 cursor-pointer`}
              >
                Mining Bitcoins
              </p>
              <p
                onClick={headthird}
                className={`${
                  headthree ? "text-crypOrange" : "text-text"
                } border-t-4 ${
                  headthree ? "border-crypOrange" : "border-Choosebg"
                } transition-all whitespace-nowrap duration-500 h-12 text-xl p-3  font-medium hover:text-crypOrange flex items-center cursor-pointer`}
              >
                Digital Wallet
              </p>
            </div>
            <div className={`${headone ? "block" : "hidden"}`}>
              <p className=" text-text text-start  flex px-4 mt-5 leading-7">
                Alternatively if you have a specific service or question in mind
                please dont hesitate to contact us to discuss this using the
                contact details:
              </p>
              <div className="flex  flex-col px-3  mt-10 gap-3">
                <p className="flex items-center gap-2 ">
                  <span className="text-xl  text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className=" text-text">Crowdfunding</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className=" text-text">Micro payments</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className=" text-text">Dispute Mediation</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className=" text-text">Multi-signature accounts</span>
                </p>
              </div>
              <div className="flex text-pretty  mt-5 px-4 ">
                <p className=" text-text leading-7">
                  We have a team of writers who specialise in writing end of
                  year reports to
                  <br /> highlight the successes of your business and the
                  forecast for the next
                  <br /> year, which you can distribute to clients and
                  investors, both current and potential. We have the skills and
                  resources to create professional films. Whether you want a
                  corporate promotional film or a record of a conference we can
                  provide the services you require.
                </p>
              </div>
            </div>
            <div className={`${headtwo ? "block" : "hidden"}`}>
              <p className=" text-text text-start flex ml-1  mt-5  leading-7">
                xxxxx tincidunt, nisl at porttitor vulputate, justo nulla
                blandit nisl, ut posuere metus tortor vel odio. Aenean hendrerit
                nisi urna, eu pos:
              </p>

              <div className="flex  flex-col  mt-5 gap-3">
                <p className="flex items-center gap-2 ">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className=" text-text">Duis aliquam lenb sodales.</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className=" text-text">
                    Mauris aliquam sapien pharetra.
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className=" text-text">
                    Fusce sed mi scelerisque est.
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className=" text-text">
                    In luctus arcu urna commodo.
                  </span>
                </p>
              </div>
              <div className="flex text-pretty ml-2 mt-5">
                <p className=" text-text leading-7">
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
            <div className={`${headthree ? "block" : "hidden"}`}>
              <p className=" text-text text-start flex  mt-5 ml-1  leading-7">
                yyyyy tincidunt, nisl at porttitor vulputate, justo nulla
                blandit nisl, ut posuere
                <br /> metus tortor vel odio. Aenean hendrerit nisi urna, eu
                pos:
              </p>
              <div className="flex  flex-col  mt-5 gap-3">
                <p className="flex items-center gap-2 ">
                  <span className="text-xl  text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className=" text-text">Duis aliquam lenb sodales.</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className=" text-text">
                    Mauris aliquam sapien pharetra.
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className=" text-text">
                    Fusce sed mi scelerisque est.
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl text-crypOrange">
                    <MdOutlineCurrencyBitcoin />
                  </span>
                  <span className=" text-text">
                    In luctus arcu urna commodo.
                  </span>
                </p>
              </div>
              <div className="flex text-pretty ml-2 mt-5">
                <p className=" text-text leading-7">
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
          <div className="lg:w-1/2 w-full lg:mt-0 md:mt-20 sm:mt-0 ">
            <div className="transition-all duration-300">
              <div className="flex items-center gap-8 mb-10 ">
                <div
                  onClick={one}
                  className={`min-h-10 min-w-10 rounded-full cursor-pointer ${
                    first ? "bg-crypOrange" : "bg-bitBlack"
                  } flex items-center`}
                >
                  <span className="text-white flex justify-center translate-x-3">
                    {first ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <p
                  onClick={one}
                  className={`font-semibold hover:text-crypOrange ${
                    first ? "text-crypOrange" : "text-bitBlack"
                  } cursor-pointer `}
                >
                  Unique Design Layouts and Features
                </p>
              </div>
              <div
                className={`ml-18 transition-max-height duration-300 ease-in-out overflow-hidden ${
                  first ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ transitionProperty: "max-height, opacity" }}
              >
                <p className="leading-7 mb-10 text-text">
                  We work with clients big and small across a range of sectors
                  and we utilise all forms of media to get your name out there
                  in a way that's right for you. We have the skills and
                  resources to create professional films.
                </p>
              </div>
            </div>
            <div className="transition-all duration-300">
              <div className="flex items-center gap-8 mb-10">
                <div
                  onClick={two}
                  className={`min-h-10 min-w-10 rounded-full cursor-pointer ${
                    second ? "bg-crypOrange" : "bg-bitBlack"
                  } flex items-center justify-center`}
                >
                  <span className="text-white w-10 h-10 flex justify-center translate-y-3">
                    {second ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <p
                  onClick={two}
                  className={`font-semibold hover:text-crypOrange ${
                    second ? "text-crypOrange" : "text-bitBlack"
                  } cursor-pointer`}
                >
                  Easy dashboard integration for all mobile devices
                </p>
              </div>
              <div
                className={`ml-18 transition-max-height duration-300 ease-in-out overflow-hidden ${
                  second ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ transitionProperty: "max-height, opacity" }}
              >
                <p className="leading-7 mb-10 text-text">
                  We work with clients big and small across a range of sectors
                  and we utilise all forms of media to get your name out there
                  in a way that's right for you. We have the skills and
                  resources to create professional films.
                </p>
              </div>
            </div>
            <div className="transition-all duration-300">
              <div className="flex items-center gap-8 mb-10">
                <div
                  onClick={three}
                  className={`min-h-10 min-w-10 rounded-full cursor-pointer ${
                    third ? "bg-crypOrange" : "bg-bitBlack"
                  } flex items-center justify-center`}
                >
                  <span className="text-white w-10 h-10 flex justify-center translate-y-3">
                    {third ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <p
                  onClick={three}
                  className={`font-semibold hover:text-crypOrange ${
                    third ? "text-crypOrange" : "text-bitBlack"
                  } cursor-pointer`}
                >
                  Community Service Forums
                </p>
              </div>
              <div
                className={`ml-18 transition-max-height duration-300 ease-in-out overflow-hidden ${
                  third ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ transitionProperty: "max-height, opacity" }}
              >
                <p className="leading-7 mb-10 text-text">
                  We work with clients big and small across a range of sectors
                  and we utilise all forms of media to get your name out there
                  in a way that's right for you. We have the skills and
                  resources to create professional films.
                </p>
              </div>
            </div>
            <div className="transition-all duration-300">
              <div className="flex items-center gap-8 mb-10">
                <div
                  onClick={fourth}
                  className={`min-h-10 min-w-10 rounded-full cursor-pointer ${
                    four ? "bg-crypOrange" : "bg-bitBlack"
                  } flex items-center justify-center`}
                >
                  <span className="text-white w-10 h-10 flex justify-center translate-y-3">
                    {four ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <p
                  onClick={fourth}
                  className={`font-semibold hover:text-crypOrange ${
                    four ? "text-crypOrange" : "text-bitBlack"
                  } cursor-pointer`}
                >
                  Find the best jobs for your location
                </p>
              </div>
              <div
                className={`ml-18 transition-max-height duration-300 ease-in-out overflow-hidden ${
                  four ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ transitionProperty: "max-height, opacity" }}
              >
                <p className="leading-7 mb-10 text-text">
                  We work with clients big and small across a range of sectors
                  and we utilise all forms of media to get your name out there
                  in a way that's right for you. We have the skills and
                  resources to create professional films.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-8 mb-10">
                <div
                  onClick={fifth}
                  className={`min-h-10 min-w-10 rounded-full ${
                    five ? "bg-crypOrange" : "bg-bitBlack"
                  }  flex items-center`}
                >
                  <span className="text-white flex justify-center translate-x-3">
                    {five ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <p
                  onClick={fifth}
                  className={`font-semibold hover:text-crypOrange ${
                    five ? "text-crypOrange" : "text-bitBlack"
                  } cursor-pointer`}
                >
                  Search for talented workers to improve your business
                </p>
              </div>
              <p
                className={`ml-18  leading-7 mb-10 text-text ${
                  five ? "block" : "hidden"
                }`}
              >
                We work with clients big and small across a range of sectors and
                we utilise all forms of media to get your name out there in a
                way thats right for you. We have the skills and resources to
                create professional films.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
