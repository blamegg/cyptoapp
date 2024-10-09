
import AppLanding from "../components/TopSection/AppLanding";
import TopCarousel from "../components/TopSection/TopCarousel";
import Feature from "../components/TopSection/Feature";
import Transaction from "../components/TopSection/Transaction";

import BitcoinNews from "@/components/BitcoinNews";
import NewsLetter from "@/components/NewsLetter";
import ContactForm from "@/components/Contact/ContactForm";
import NetworkInfo from "@/components/Network/NetworkInfo";
import Price from "@/components/Price/Price";

import Downloads from "@/components/Downloads";

import ChooseUs from "./ChooseUs";
import TestimonialSection from "@/components/Testimonial/TestimonialSlider";
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
  <Price/>
  <NetworkInfo/>
  <TestimonialSection/>
  <ContactForm/>

  
        </>
  );
}
