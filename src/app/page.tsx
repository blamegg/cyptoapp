
import ContactForm from "@/components/Contact/ContactForm";
import NetworkInfo from "@/components/Network/NetworkInfo";
import Price from "@/components/Price/Price";


import TestimonialSection from "@/components/Testimonial/TestimonialSlider";
import { TopCarousel ,AppLanding,Feature,Transaction, BitcoinNews, NewsLetter, Downloads, ChooseUs, SsCarousel} from "@/components";
export default function Home() {
  return (
    <>
      <TopCarousel />
      <AppLanding />
      <Feature />
      <Transaction />

      <BitcoinNews />
      <NewsLetter />
      <Downloads />
      <ChooseUs />
      <SsCarousel />
      <Price />
      <NetworkInfo />
      <TestimonialSection />
      <ContactForm />
    </>
  );
}
