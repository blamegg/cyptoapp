import AppLanding from "@/components/AppLanding";
import BitcoinNews from "@/components/BitcoinNews";
import NewsLetter from "@/components/NewsLetter";
import { Download } from "lucide-react";

export default function Home() {
  return (
   <>
   <BitcoinNews/>
   <NewsLetter/>
   <Download/>

  
    <AppLanding/>
    </>
  );
}
