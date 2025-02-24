"use client";

import React, { useState, useEffect, CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import dynamic from "next/dynamic";
import { BASE_URL } from "@/config";
import { useSku } from "@/app/Hooks/useSku";

interface CustomCSSProperties extends CSSProperties {
  "--swiper-navigation-color"?: string;
  "--swiper-pagination-color"?: string;
  "--swiper-navigation-size"?: string;
  "--swiper-navigation-backGround"?: string;
}

// Dynamically load ImageZoom for client-side use
const ImageZoom = dynamic(() => import(".././components/ImageZoom"), {
  ssr: false,
});

// Define types for props
interface SingleProductSliderProps {
  productData: any; // The full product data object
  skuId?: number; // The selected SKU ID (optional)
}

const SingleProductSlider: React.FC<SingleProductSliderProps> = ({
  productData,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [imageList, setImageList] = useState<string[]>([]);
  const [selectedSkuId, setSelectedSkuId] = useState<number | null>(null);
  const { skuData } = useSku();
  const skuid = skuData?.id;

  useEffect(() => {
    if (productData?.SKU?.length > 0) {
      const defaultSku = productData.SKU[0];
      setSelectedSkuId(skuid || defaultSku.id);
      setImageList(defaultSku.images || []);
    } else {
      console.warn("No SKUs found in productData");
      setImageList([]);
    }
  }, [productData, skuid]);

  // Update images when SKU changes
  useEffect(() => {
    if (productData?.SKU && selectedSkuId !== null) {
      const selectedSku = productData.SKU.find(
        (sku: any) => sku.id === selectedSkuId
      );

      if (!selectedSku) {
        console.warn("🚨 Selected SKU not found for ID:", selectedSkuId);
        return;
      }
      setImageList(selectedSku.images || []);
    }
  }, [productData, selectedSkuId]);

  const swiperStyle: CustomCSSProperties = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
    "--swiper-navigation-size": "20px",
    "--swiper-navigation-backGround": "#fff",
  };

  return (
    <div className="grid  grid-cols-[100px_1fr] gap-5 h-full">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        direction={"vertical"}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-[100px] h-[500px]"
      >
        {imageList.length > 0 ? (
          imageList.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`${BASE_URL}${imgUrl}?h=200&w=200&f=webp&q=100`}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="object-cover rounded-md h-full w-full border bg-white"
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p>No thumbnails available</p>
          </SwiperSlide>
        )}
      </Swiper>

      <Swiper
        style={swiperStyle}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full mb-3"
      >
        {imageList.length > 0 ? (
          imageList.map((imgUrl, index) => (
            <SwiperSlide
              key={index}
              className="cursor-grab h-full flex justify-center items-center"
            >
              <ImageZoom
                picture={`${imgUrl}?h=700&w=700&f=webp&q=100`}
                alt={`Product Image ${index + 1}`}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className="cursor-grab  flex justify-center items-center">
            <p>No images available</p>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default SingleProductSlider;
