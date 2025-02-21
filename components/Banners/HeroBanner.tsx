import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface BannerProps {
  banners: {
    url: string;
    imageUrl: string;
    altText: string;
  }[];
}

const HeroBanner: React.FC<BannerProps> = ({ banners }) => {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Adjust timing as needed

    return () => clearInterval(interval); // Proper cleanup
  }, [banners.length]); // Depend only on banners.length

  return (
    <section className="delivo__container px-3">
      {banners && (
        <div className="px-5 p-0 my-10 relative h-[100px] grid content-center items-center sm:h-[200px] md:h-[250px] xl:h-[300px]">
          {banners.map((banner, index) => (
            <Link key={index} href={banner.url}>
              <Image
                src={banner.imageUrl}
                alt={banner.altText || "Banner Image"}
                width={1200}
                height={300}
                className={`w-full h-auto align-middle grid content-center items-center object-contain max-w-full absolute top-0 bottom-0 right-0 left-0 transition-opacity duration-1000 ${
                  activeBanner === index ? "opacity-100" : "opacity-0"
                }`}
              />
              {/* <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                {banners.map((_, index) => (
                  <span``````
                    key={index}
                    onClick={() => setActiveBanner(index)}
                    className={`w-3 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      activeBanner === index
                        ? "bg-primary scale-125"
                        : "bg-gray-400"
                    }`}
                  />
                ))}
              </div> */}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroBanner;
