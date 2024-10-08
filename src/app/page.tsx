import Image from "next/image";
import AppLanding from "../components/TopSection/AppLanding";
import TopCarousel from "../components/TopSection/TopCarousel";
import Feature from "../components/TopSection/Feature";
import Transaction from "../components/TopSection/Transaction";
import ScatteredCrypto from "../components/TopSection/ScatteredCrypto";

export default function Home() {
  return (
    <>
    <TopCarousel/>
    <AppLanding/>
    <Feature/>
    <Transaction/>
    </>
  );
}
