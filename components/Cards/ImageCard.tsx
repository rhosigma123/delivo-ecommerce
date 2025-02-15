import { BASE_URL } from "@/config";
import { ImageCardProps } from "@/types/interface";
import Image from "next/image";
import React from "react";

const ImageCard = ({ bgColor, imageUrl, altText }: ImageCardProps) => {
  const imgUrl = BASE_URL + imageUrl;
  return (
    <div
      className={`border-[#D8E4FF] border-2 overflow-clip rounded-2xl ${bgColor} w-full h-full`}
    >
      <Image
        src={imgUrl || "/"}
        alt={altText}
        width={150}
        height={150}
        loading="lazy"
        className={`object-cover w-full h-full`}
      />
    </div>
  );
};

export default ImageCard;
