import {Price, NetworkInfo, ContactForm, TestimonialSection} from "@/components"
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
