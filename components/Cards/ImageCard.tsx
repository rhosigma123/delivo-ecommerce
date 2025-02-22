"use client";
import { BASE_URL } from "@/config";
import { ImageCardProps } from "@/types/interface";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const ImageCard = ({ bgColor, imageUrl, altText, offer }: ImageCardProps) => {
  const imgUrl = BASE_URL + (imageUrl + "?h=200&w=200&f=webp&q=100");
  // const imgUrl = imageUrl;
  const pathname = usePathname();

  return (
    <div
      className={`border-[#D8E4FF] relative border-2 overflow-clip grid place-content-center rounded-2xl ${bgColor}`}
    >
      <Image
        src={imgUrl || "/"}
        alt={altText + " - Delivo"}
        width={130}
        height={130}
        loading="eager"
        className={`object-cover h-full aspect-square`}
      />
      {offer && (
        <>
          {pathname?.startsWith("/") && (
            <span className="bg-green-600 text-white font-bold p-2 py-1 leading-4 text-center border-t-2 border-r-2 absolute bottom-0 left-0 rounded-tr-xl rounded-bl-xl border-white  grid break-words">
              <strong>{"$20"} </strong> off
            </span>
          )}
          {pathname?.startsWith("/restaurant") && (
            <span className="bg-[#FF835D] text-white font-bold p-2 py-1 leading-4 text-center border-t-2 border-r-2 absolute bottom-0 left-0 rounded-tr-xl rounded-bl-xl border-white  grid break-words">
              <strong>{"$20"} </strong> off
            </span>
          )}
          {pathname?.startsWith("/quick-craves") && (
            <span className="bg-pink-600 text-white font-bold p-2 py-1 leading-4 text-center border-t-2 border-r-2 absolute bottom-0 left-0 rounded-tr-xl rounded-bl-xl border-white  grid break-words">
              <strong>{"$20"} </strong> off
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default ImageCard;
