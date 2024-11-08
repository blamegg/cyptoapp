import Image from "next/image";
import { Applanding1, appleStore, googlePlayStore } from "@/assets";

export const AppLanding = () => {
  return (
    <div className="flex flex-col lg:flex-row  items-center justify-between bg-white my-14 px-4 lg:px-28 max-w-7xl mx-auto ">
      {/* Left Section with App Image */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <Image
          src={Applanding1}
          alt="Bitcoin Wallet App Interface"
          width={450}
          height={450}
          className="object-contain"
        />
      </div>

      {/* Right Section with Text and Download Buttons */}
      <div className="lg:w-1/2 max-w-lg leading-8 md:ml-0 sm:ml-16 md:p-0 p-5">
        <h1 className="text-4xl lg:text-4xl  mb-4 font-ubuntu">
          <span>App For Invest in</span>
          <span className="block text-customYellow font-ubuntu md:text-4xl font-bold">
            Gold and Stocks
          </span>
        </h1>
        <p className="text-gray-600 mb-8  font-Segoe leading-7">
          Using the App, you can check the current exchange rate for BTC and
          Saraa Investment App offers a complete solution for your investment
          needs. Invest in gold and stocks, while also managing Bitcoin with a
          secure and functional wallet. Track performance, make smart decisions,
          and grow your portfolio—all in one app.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Download the App on
        </h2>
        <div className="flex md:flex-row flex-col gap-2">
          <Image
            src={appleStore}
            alt="Download on App Store"
            width={180}
            height={60}
            className="object-contain hover:opacity-85"
          />
          <Image
            src={googlePlayStore}
            alt="Get it on Google Play"
            width={180}
            height={60}
            className="object-contain hover:opacity-85"
          />
        </div>
      </div>
    </div>
  );
};
