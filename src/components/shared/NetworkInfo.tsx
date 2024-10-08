import React from "react";
import img from "../../assets/img.png"; 

const NetworkInfo = () => {
  return (
    <div className="bg-gray-100 h-[500px] p-6 flex  ">
   
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center w-[80%] ">
         <div className="flex justify-center items-center ">
         <div
          className="w-2/3 h-60  rounded-lg flex justify-center items-center  "
          style={{
            backgroundImage: `url(${img.src})`,
          }}
        >
         
          <div className=" shadow-lg rounded-lg  bg-white w-2/3 h-20 ">
            <div className="text-center">
              <h2 className="text-[#2C4676] text-xl font-semibold ">
                BTC Prices List
              </h2>
              <p className="text-gray-600">
                CCCAGG market does not exist for this coin pair (BTC-EGP)
              </p>
            </div>
          </div>
        </div>
         </div>
      
       

        {/* Right Section - Text Content */}
        <div className="w-2/3 text-center lg:text-left ">
          <h2 className="text-3xl font-bold text-gray-800">
            Innovative Payment <span className="text-[#FEA301]">Network</span>
          </h2>
          <h2 className="text-gray-600 mt-4 text-2xl ">
            Simple & secure access to buy, sell and use Bitcoin.
          </h2>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sagittis nisl porttitor, eleifend tortor sed, auctor libero.
          </p>
          <p className="text-gray-500 mt-4">
            Proin quis purus eu mi fermentum blandit. Nam eget nisi ipsum. Nullam
            vitae nunc ac eros laoreet egestas.
          </p>
          <button className="bg-[#FEA301] text-white font-light text-sm py-3 px-4 mt-6 r">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkInfo;
