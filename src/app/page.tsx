import Image from "next/image";
import AppLanding from "../components/TopSection/AppLanding";
import TopCarousel from "../components/TopSection/TopCarousel";
import Feature from "../components/TopSection/Feature";
import Transaction from "../components/TopSection/Transaction";
import ScatteredCrypto from "../components/TopSection/ScatteredCrypto";
import BitcoinNews from "@/components/BitcoinNews";
import NewsLetter from "@/components/NewsLetter";
import { Download } from "lucide-react";

export default function Home() {
  return (
   <>
   <TopCarousel/>
<AppLanding/>
    <Feature/>
    <Transaction/>

   <BitcoinNews/>
   <NewsLetter/>
   <Download/>

  
        </>
  );
}
