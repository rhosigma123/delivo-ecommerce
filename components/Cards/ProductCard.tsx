import React from "react";
import ImageCard from "./ImageCard";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Link
      href={`/product`}
      className="grid gap-3 p-3 hover:bg-white rounded-2xl hover:border border border-transparent"
    >
      <ImageCard imageUrl={""} altText={"Product"} bgColor={"bg-white"} />
      <div className="grid gap-2">
        <strong className="font-bold text-fontPrimary text-lg flex items-center gap-3">
          ₹450
          <span className="text-red-500 line-through font-medium text-base">
            70
          </span>
        </strong>
        <h3 className="text-fontPrimary  break-words px-2 font-bold capitalize text-lg w-fit line-clamp-2">
          Ashirvad Atta Superior MP Whole Wheat Flour
        </h3>
        <span className="text-gray-400 text-base font-medium block">5Kg</span>

        <button className="border-accent px-4 py-2 rounded-full border text-accent text-lg font-semibold bg-white">
          Add to Bag
        </button>
        <div className="flex justify-center h-[44px] items-center rounded-full w-full gap-4 border-accent border-2 relative bg-white">
          <button className="absolute right-0 bg-accent h-10 w-10 text-white rounded-full grid place-content-center">
            +{" "}
          </button>
          <span className="text-fontSecondary text-lg">0</span>
          <button className="absolute left-0 bg-accent h-10 w-10 text-white rounded-full grid place-content-center">
            -
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
