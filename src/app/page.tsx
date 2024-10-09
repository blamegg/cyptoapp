import {Price, NetworkInfo, ContactForm, TestimonialSection} from "@/components";
import { TopCarousel ,AppLanding,Feature,Transaction, BitcoinNews, NewsLetter, Downloads, ChooseUs, SsCarousel } from "@/components";

export default function Home() {
  return (
    <>
      <div id="home">
        <TopCarousel />
      </div>
      <div id="appLanding">
        <AppLanding />
      </div>
      <div id="feature">
        <Feature />
      </div>
      <div id="transaction">
        <Transaction />
      </div>
      <div id="bitcoinNews">
        <BitcoinNews />
      </div>
      <div id="newsletter">
        <NewsLetter />
      </div>
      <div id="downloads">
        <Downloads />
      </div>
      <div id="chooseUs">
        <ChooseUs />
      </div>
      <div id="ssCarousel">
        <SsCarousel />
      </div>
      <div id="price">
        <Price />
      </div>
      <div id="networkInfo">
        <NetworkInfo />
      </div>
      <div id="testimonial">
        <TestimonialSection />
      </div>
      <div id="contactForm">
        <ContactForm />
      </div>
    </>
  );
}
