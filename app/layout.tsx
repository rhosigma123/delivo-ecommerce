import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { Pontano_Sans } from "next/font/google";
import Provider from "./Provider";
import DevelopedBy from "@/components/DevelopedBy";
import FooterBottom from "@/components/Footer/FooterBottom";
import Navbar from "@/components/Navbar/Navbar";
import PopularSearches from "@/components/PopularSearches";
import Footer from "@/components/Footer/Footer";
import DownloadAppBanner from "@/components/DownloadAppBanner";
import Happiness from "@/components/Happiness";
// import { CategoryContextProvider } from "./Context/CategoryContext";

const PontanoSans = Pontano_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delivo - Fastest Grocery Delivery at Your Doorstep",
  description:
    "Shop online for fresh groceries and essentials with Delivo. Get your order delivered to your doorstep in minutes. Experience lightning-fast delivery and unbeatable convenience with Delivo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PontanoSans.className} antialiased`}>
        <NextTopLoader
          showSpinner={false}
          height={4}
          color="#3f41a6"
          zIndex={1600}
        />
        <Provider>
          <Toaster position="bottom-right" closeButton />
          {/* <Navbar /> */}
          {children}
          <DownloadAppBanner />
          <Happiness />
          <PopularSearches />
          <Footer />
          <FooterBottom />
          <DevelopedBy />
        </Provider>
      </body>
    </html>
  );
}
