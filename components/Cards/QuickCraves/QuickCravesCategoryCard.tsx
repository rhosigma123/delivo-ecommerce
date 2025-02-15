import React from "react";
import Image from "next/image";

const QuickCravesCategoryCard = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        width={100}
        height={100}
        className="rounded-full w-[100px] h-[100px] object-cover bg-white border-2"
        src="/product.png"
        alt="Quick Craves"
        loading="lazy"
      />
      <h3 className="text-sm capitalize font-normal text-fontPrimary text-center break-words">
        Snacks
      </h3>
    </div>
  );
};

export default QuickCravesCategoryCard;
