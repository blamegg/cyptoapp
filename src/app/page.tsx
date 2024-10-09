
// Home.tsx or App.tsx
import React from "react";
import { SlideProvider } from "@/components/context/SlideContext"; // Adjust the path accordingly
import { AppLanding, Feature, Transaction, BitcoinNews, NewsLetter, Downloads, ChooseUs, SsCarousel, Price, NetworkInfo, TestimonialSection, ContactForm, Navbar, TopCarousel } from "@/components";

const Home: React.FC = () => {
  return (
    <SlideProvider>
      <Navbar />
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
    </SlideProvider>
  );
};

export default Home;
