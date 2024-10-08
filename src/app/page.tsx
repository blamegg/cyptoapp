
import AppLanding from "../components/TopSection/AppLanding";
import TopCarousel from "../components/TopSection/TopCarousel";
import Feature from "../components/TopSection/Feature";
import Transaction from "../components/TopSection/Transaction";

import BitcoinNews from "@/components/BitcoinNews";
import NewsLetter from "@/components/NewsLetter";
import ContactForm from "@/components/shared/ContactForm";
import NetworkInfo from "@/components/shared/NetworkInfo";
import Price from "@/components/shared/Price";

export default function Home() {
  return (
   <>
   <TopCarousel/>
<AppLanding/>
    <Feature/>
    <Transaction/>

   <BitcoinNews/>
   <NewsLetter/>
  <Price/>
  <NetworkInfo/>
  <ContactForm/>

  
        </>
  );
}
