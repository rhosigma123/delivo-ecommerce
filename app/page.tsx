"use client";
import HeroBanner from "@/components/Banners/HeroBanner";
import CategorySection from "@/components/Home/CategorySection";
import QuickCravesSection from "@/components/Home/QuickCravesSection";
import { useSession } from "next-auth/react";

export default function Home() {
  const banners = [
    { imageUrl: "/hero-banner.png", altText: "Pan Corner" },
    { imageUrl: "/hero-banner.png", altText: "Pan Corner" },
    { imageUrl: "/hero-banner.png", altText: "Pan Corner" },
    { imageUrl: "/hero-banner.png", altText: "Pan Corner" },
    { imageUrl: "/hero-banner.png", altText: "Pan Corner" },
  ];

  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <HeroBanner banners={banners} />
      <CategorySection />
      <QuickCravesSection />
    </>
  );
}
