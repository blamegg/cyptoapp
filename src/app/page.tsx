
import AppLanding from "../components/TopSection/AppLanding";
import TopCarousel from "../components/TopSection/TopCarousel";
import Feature from "../components/TopSection/Feature";
import Transaction from "../components/TopSection/Transaction";

import BitcoinNews from "@/components/BitcoinNews";
import NewsLetter from "@/components/NewsLetter";

import Downloads from "@/components/Downloads";

import ChooseUs from "./ChooseUs";
export default function Home() {
  return (
   <>
   <TopCarousel/>
<AppLanding/>
    <Feature/>
    <Transaction/>

   <BitcoinNews/>
   <NewsLetter/>
   <Downloads/>
   <ChooseUs/>

  
        </>
  );
}
