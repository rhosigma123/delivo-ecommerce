import Banner from "@/components/Banner";
import HeroBanner from "@/components/Banners/HeroBanner";
import CategoryCard from "@/components/Cards/CategoryCard";
import DevelopedBy from "@/components/DevelopedBy";
import DownloadAppBanner from "@/components/DownloadAppBanner";
import Footer from "@/components/Footer/Footer";
import FooterBottom from "@/components/Footer/FooterBottom";
import CategorySection from "@/components/Home/CategorySection";
import QuickCravesSection from "@/components/Home/QuickCravesSection";
import LoginModal from "@/components/Modals/LoginModal";
import Navbar from "@/components/Navbar/Navbar";
import PopularSearches from "@/components/PopularSearches";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <HeroBanner bannerData={BannerData} /> */}
      <CategorySection />
      <QuickCravesSection />
      <DownloadAppBanner />
      <div className="grid gap-5 delivo__container my-14">
        <h2 className="text-5xl text-gray-300 font-bold flex items-center gap-2">
          Happiness Quickly Delivered{" "}
          <Image
            src={"/heart.svg"}
            alt="Love"
            width={30}
            height={30}
            loading="lazy"
          />
        </h2>
        <Image
          src={"/delivo-primary-logo.png"}
          alt="Delivo"
          width={100}
          height={100}
          loading="lazy"
        />
      </div>
    </>
  );
}
