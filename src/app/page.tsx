import Image from "next/image";
import BitcoinNews from "./BitcoinNews";
import NewsLetter from "./NewsLetter";
import Download from "./Download";

export default function Home() {
  return (
   <>
   <BitcoinNews/>
   <NewsLetter/>
   <Download/>
   </>
  );
}
