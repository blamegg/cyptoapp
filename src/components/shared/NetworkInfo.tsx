import React from "react";
import img from "../../assets/img.png"; 

const NetworkInfo = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
   
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        
      
        <div
          className="relative w-full h-80 lg:h-full bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${img.src})`,
          }}
        >
         
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-90 shadow-lg rounded-lg p-6">
            <div className="text-center">
              <h2 className="text-[#2C4676] text-xl font-semibold mb-2">
                BTC Prices List
              </h2>
              <p className="text-gray-600">
                CCCAGG market does not exist for this coin pair (BTC-EGP)
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-800">
            Innovative Payment <span className="text-yellow-500">Network</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Simple & secure access to buy, sell, and use Bitcoin.
          </p>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sagittis nisl porttitor, eleifend tortor sed, auctor libero.
          </p>
          <p className="text-gray-500 mt-4">
            Proin quis purus eu mi fermentum blandit. Nam eget nisi ipsum. Nullam
            vitae nunc ac eros laoreet egestas.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 mt-6 rounded-lg">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkInfo;
