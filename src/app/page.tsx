import AppLanding from "@/components/AppLanding";
import BitcoinNews from "@/components/BitcoinNews";
import NewsLetter from "@/components/NewsLetter";
import ContactForm from "@/components/shared/ContactForm";
import NetworkInfo from "@/components/shared/NetworkInfo";
import Price from "@/components/shared/Price";
import TestimonialCarousel from "@/components/shared/TestimonialSlider";
export default function Home() {
  return (
   <>
   <BitcoinNews/>
   <NewsLetter/>
  

  
    <AppLanding/>
    <Price/>
    <NetworkInfo/>
    {/* <TestimonialCarousel/> */}
   
    <ContactForm/>
    </>
  );
}
