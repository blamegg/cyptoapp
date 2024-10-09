
import AppLanding from "../components/AppLanding/AppLanding";
import TopCarousel from "../components/TopCarousel/TopCarousel";
import Feature from "../components/Features/Feature";
import Transaction from "../components/Transaction/Transaction";

import BitcoinNews from "@/components/BitcoinNews";
import NewsLetter from "@/components/NewsLetter";
import ContactForm from "@/components/Contact/ContactForm";
import NetworkInfo from "@/components/Network/NetworkInfo";
import Price from "@/components/Price/Price";

import Downloads from "@/components/Downloads";

import ChooseUs from "@/components/ChooseUs";
import Screenshot from "@/components/Screenshot";
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
   <Screenshot/>
  <Price/>
  <NetworkInfo/>
  <TestimonialSection/>
  <ContactForm/>

  
        </>
  );
}
