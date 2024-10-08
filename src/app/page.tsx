import Image from "next/image";
import BitcoinNews from "./BitcoinNews";
import NewsLetter from "./NewsLetter";
import Download from "./Download";

import AppLanding from "./Components/AppLanding";
import TopCarousel from "./Components/TopCarousel";
export default function Home() {
  return (
   <>
   <BitcoinNews/>
   <NewsLetter/>
   <Download/>

    <TopCarousel/>
    <AppLanding/>
    </>
  );
}
