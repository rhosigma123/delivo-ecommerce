import React from "react";
import { BASE_URL } from "@/config";
import Image from "next/image";

export interface BannerProps {
  banners: {
    imageUrl: string;
    altText: string;
  }[];
}

const HeroBanner: React.FC<BannerProps> = ({ banners }) => {
  return (
    <>
      {banners && (
        <div className="delivo__container my-10 relative h-auto md:h-[350px]">
          {banners.map((banner, index) => (
            <Image
              key={index}
              src={`${banner.imageUrl || "/"}`}
              alt={(banner.altText && banner.altText) || "Banner Image"}
              width={1200}
              height={300}
              className="w-full h-auto max-w-full absolute inset-0"
            />
          ))}
        </div>
      )}
    </>
  );
};

export default HeroBanner;
