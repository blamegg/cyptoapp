import type { Metadata } from "next";
import localFont from "next/font/local";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import "react-circular-progressbar/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Navbar } from "@/components";
import {Footer} from "@/components";
import Button from "@/components/shared/Button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const ubuntu = Ubuntu({
  weight: ["400", "500", "700"], // Specify the weights you need
  subsets: ["latin"], // Choose the subsets of the font you want to include
  variable: "--font-ubuntu", // Add a custom variable to use in CSS
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable}  antialiased`}
      >
        <Button />
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
