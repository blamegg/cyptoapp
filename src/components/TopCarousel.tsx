// import React from 'react'
// import Image from 'next/image'
// import { hand, verticalScreen, horizontalScreen } from '@/assets'
// // import { ChevronLeft, ChevronRight } from 'lucide-react'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // You'll need to install these packages:
// // npm install react-slick slick-carousel

// const NextArrow = (props: any) => (
//   <ChevronRight
//     onClick={props.onClick}
//     className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white z-10"
//     size={32}
//   />
// )

// const PrevArrow = (props: any) => (
//   <ChevronLeft
//     onClick={props.onClick}
//     className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-white z-10"
//     size={32}
//   />
// )

// const TopCarousel = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   }

//   return (
//     <div className="relative bg-gray-900 text-white">
      
//         {/* First Slide */}
//         <div className="flex items-center justify-between px-8 py-16">
//           <div className="w-1/2">
//             <h2 className="text-2xl text-yellow-500 mb-2">App with Awesome Features</h2>
//             <h1 className="text-5xl font-bold mb-6">CryptoCurrency App</h1>
//             <div className="flex space-x-4 mb-6">
//               {['Bitcoin', 'Ripple', 'OmiseGO', 'Zcash', 'IOTA'].map((crypto, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <div className="w-12 h-12 rounded-full bg-gray-700 mb-2"></div>
//                   <span className="text-sm">{crypto}</span>
//                 </div>
//               ))}
//             </div>
//             <p className="mb-6">
//               Get to know the live rates of all the <strong>crypto currency</strong> without any
//               delay. Pay with crypto currency in more than <strong>20000 stores</strong>.
//             </p>
//             <div className="flex space-x-4">
//               <button className="bg-yellow-500 text-black px-6 py-2 rounded">GET STARTED</button>
//               <button className="border border-white px-6 py-2 rounded">HOW IT WORKS</button>
//             </div>
//           </div>
//           <div className="w-1/2">
//             <Image src={verticalScreen} alt="App Screenshot" width={300} height={600} />
//           </div>
//         </div>

//         {/* Second Slide */}
//         <div className="flex items-center justify-between px-8 py-16">
//           <div className="w-1/2">
//             <h2 className="text-2xl text-yellow-500 mb-2">Easy to Use</h2>
//             <h1 className="text-5xl font-bold mb-6">Manage Your Crypto</h1>
//             <p className="mb-6">
//               Our app provides an intuitive interface for managing your cryptocurrency portfolio.
//               Track prices, make trades, and stay updated with the latest market trends.
//             </p>
//             <button className="bg-yellow-500 text-black px-6 py-2 rounded">LEARN MORE</button>
//           </div>
//           <div className="w-1/2 relative">
//             <Image src={horizontalScreen} alt="App Interface" width={500} height={300} className="mb-4" />
//             <Image
//               src={hand}
//               alt="Hand holding phone"
//               width={200}
//               height={300}
//               className="absolute bottom-0 right-0"
//             />
//           </div>
//         </div>
      
//     </div>
//   )
// }

// export default TopCarousel
