import React from "react";
import Image from "next/image";
import Start from "../Svg/Start";

const RestaurantCard = () => {
  return (
    <div className="grid sm:grid-cols-[100px_1fr] gap-2 content-start items-start hover:bg-white p-3 rounded-2xl w-full">
      <Image
        src={"/product.png"}
        alt="Chachu Chahi fast food"
        width={100}
        height={100}
        className="rounded-xl border-2 bg-white object-cover h-full w-full"
        loading="lazy"
      />

      <div className="grid gap-1">
        <h3 className="text-base leading-5 font-bold text-fontPrimary capitalize line-clamp-2">
          Chachu Chachi Fast Food Stall{" "}
        </h3>
        <span className="text-fontSecondary text-sm line-clamp-1">
          Chi. Samosa | Vada Pav
        </span>
        <span className="flex items-center text-fontPrimary text-sm">
          <Start />
          4.2 | 2km | 12 mins
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
