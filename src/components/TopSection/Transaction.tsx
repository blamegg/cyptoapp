import React from 'react'
import { mobile } from '@/assets'
import CryptoProgress from './Coins'

const Transaction = () => {
  return (
    <div className="">
      <div className="text-center mb-20 mt-40">
        <h2 className="font-normal text-4xl mb-4">
          Transparent{" "}
          <span className="font-bold text-customYellow">Transactions</span>
        </h2>
        <p className="text-xs font-bold text-gray-700">GET CLARITY NOW!</p>
        <p className='text-gray-600 text-lg font-thin'>Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci <br />
malesuada pharetra. Duis vel imperdiet enim. Vestibulum dolor metus.

</p>
      </div>
      <div className="text-center min-w-full  flex items-start justify-center ">
        <img src={mobile.src} alt="" />
      </div>
      <CryptoProgress />
    </div>
  );
}

export default Transaction
